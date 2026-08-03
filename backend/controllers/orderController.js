import Order from '../models/Order.js';
import Product from '../models/Product.js';
import Cart from '../models/Cart.js';
import { syncOrderToShiprocket } from '../services/shiprocketService.js';
import { sendOrderNotificationToAdmin, sendOrderConfirmationToCustomer } from '../services/emailService.js';

// Create a new order
export const createOrder = async (req, res, next) => {
  try {
    const { items, totalAmount, shippingAddress, paymentMethod } = req.body;
    const userId = req.user._id;

    if (!items || items.length === 0) {
      return res.status(400).json({ message: 'No items in the order' });
    }

    if (!shippingAddress) {
      return res.status(400).json({ message: 'Shipping address is required' });
    }

    // Validate 6-digit Indian PIN code format at the end of the address
    const pincodeMatch = shippingAddress.trim().match(/-\s*([1-9][0-9]{5})$/);
    if (!pincodeMatch) {
      return res.status(400).json({ message: 'Please provide a valid 6-digit pin code in the shipping address.' });
    }

    // Verify stock and update inventory in a transaction-like loop
    for (const item of items) {
      const product = await Product.findById(item.productId);
      if (!product || product.isDeleted) {
        return res.status(404).json({ message: `Product ${item.name || item.productId} not found` });
      }

      // Check stock for specific size
      const sizeInfo = product.sizes.find(s => s.size === item.size);
      if (!sizeInfo || sizeInfo.stock < item.quantity) {
        return res.status(400).json({
          message: `Insufficient stock for product "${product.name}" in size "${item.size}". Only ${sizeInfo ? sizeInfo.stock : 0} items remaining.`
        });
      }
    }

    // Deduct stock after validating all items
    for (const item of items) {
      await Product.updateOne(
        { _id: item.productId, 'sizes.size': item.size },
        { $inc: { 'sizes.$[elem].stock': -item.quantity } },
        { arrayFilters: [{ 'elem.size': item.size }] }
      );
    }

    // Create the order document
    const order = await Order.create({
      userId,
      items: items.map(item => ({
        productId: item.productId,
        quantity: item.quantity,
        price: item.price,
        size: item.size,
        color: item.color || ''
      })),
      totalAmount,
      shippingAddress,
      paymentMethod: paymentMethod || 'COD',
      paymentStatus: 'Pending',
      status: 'Processing',
      timeline: [
        { status: 'Pending', note: 'Order initiated via Cash on Delivery.' },
        { status: 'Processing', note: 'Inventory allocated. Order is preparing for shipment.' }
      ]
    });

    // Clear user's cart in database
    await Cart.findOneAndUpdate({ userId }, { $set: { items: [] } });

    // Sync to Shiprocket in background
    syncOrderToShiprocket(order._id).catch(err => {
      console.error(`Background Shiprocket sync failed for order ${order._id}:`, err.message);
    });

    // Trigger emails in background
    sendOrderNotificationToAdmin(order).catch(err => {
      console.error(`Failed to send order email notification to admin:`, err.message);
    });

    if (req.user && req.user.email) {
      sendOrderConfirmationToCustomer(order, req.user.email).catch(err => {
        console.error(`Failed to send order email confirmation to customer:`, err.message);
      });
    }

    res.status(201).json({
      message: 'Order placed successfully!',
      order
    });
  } catch (error) {
    res.status(500);
    next(error);
  }
};

// Get current user's order history
export const getUserOrders = async (req, res, next) => {
  try {
    const userId = req.user._id;
    const orders = await Order.find({ userId })
      .populate('items.productId', 'name images image sku slug')
      .sort({ createdAt: -1 });

    res.json(orders);
  } catch (error) {
    res.status(500);
    next(error);
  }
};
