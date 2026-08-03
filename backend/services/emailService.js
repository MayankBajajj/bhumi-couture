import nodemailer from 'nodemailer';
import dns from 'dns';
import Order from '../models/Order.js';
import Product from '../models/Product.js';

// Force Node to query Google Public DNS over IPv4 instead of broken local IPv6 router DNS
dns.setServers(['8.8.8.8', '8.8.4.4']);

export const sendEmail = async (to, subject, text, html) => {
  const isSmtpConfigured = 
    process.env.SMTP_HOST && 
    process.env.SMTP_USER && 
    process.env.SMTP_PASS;

  if (isSmtpConfigured) {
    try {
      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: parseInt(process.env.SMTP_PORT || '587'),
        secure: process.env.SMTP_SECURE === 'true', // true for port 465, false for other ports
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS
        }
      });

      await transporter.sendMail({
        from: `"Bhawna Closet" <${process.env.SMTP_USER}>`,
        to,
        subject,
        text,
        html
      });
      console.log(`Email successfully sent to ${to}`);
    } catch (err) {
      console.error(`Failed to send email via SMTP to ${to}:`, err.message);
      // fallback printing to console if SMTP sending itself fails
      printConsoleFallback(to, subject, text);
    }
  } else {
    printConsoleFallback(to, subject, text);
  }
};

const printConsoleFallback = (to, subject, text) => {
  console.log('\n==========================================');
  console.log(`[DEVELOPMENT EMAIL SENDER FALLBACK]`);
  console.log(`TO: ${to}`);
  console.log(`SUBJECT: ${subject}`);
  console.log(`MESSAGE:\n${text}`);
  console.log('==========================================\n');
};

export const sendOrderNotificationToAdmin = async (order) => {
  try {
    const populatedOrder = await Order.findById(order._id).populate('items.productId');
    const adminEmail = process.env.ADMIN_EMAIL || 'bhawnacloset.in@gmail.com';
    const subject = `🛍️ New Order Placed: #${populatedOrder._id.toString().slice(-8).toUpperCase()}`;

    const itemsText = populatedOrder.items.map(item => {
      const name = item.productId ? item.productId.name : 'Unknown Product';
      return `- ${name} (${item.size}${item.color ? ` / Color: ${item.color}` : ''}) x ${item.quantity} - ₹${item.price * item.quantity}`;
    }).join('\n');

    const text = `
Hello Admin,

A new order has been successfully placed on Bhawna Closet!

Order Details:
---------------------------------------------
Order ID: ${populatedOrder._id}
Payment Method: ${populatedOrder.paymentMethod}
Payment Status: ${populatedOrder.paymentStatus}
Total Amount: ₹${populatedOrder.totalAmount}
Online Paid Amount: ₹${populatedOrder.paymentMethod === 'Partial COD' ? '500 (Remaining balance COD)' : populatedOrder.totalAmount}

Customer Shipping Details:
---------------------------------------------
${populatedOrder.shippingAddress}

Items Ordered:
---------------------------------------------
${itemsText}

The order is currently in "Processing" status and has been queued/synced to Shiprocket. You can manage this order and track shipping updates in the Shiprocket dashboard or the Bhawna Closet Admin panel.

Warm regards,
Bhawna Closet System
`;

    // Construct structured HTML list of ordered items with image thumbnails
    const itemsHtml = populatedOrder.items.map(item => {
      const name = item.productId ? item.productId.name : 'Unknown Product';
      const imgUrl = (item.productId && item.productId.image) 
        ? item.productId.image 
        : 'https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=200&auto=format&fit=crop';
      
      return `
        <tr style="border-bottom: 1px solid #eee;">
          <td style="padding: 10px; text-align: left; vertical-align: middle;">
            <a href="${imgUrl}" target="_blank" style="display: block; margin-bottom: 8px; text-decoration: none;">
              <img src="${imgUrl}" alt="${name}" style="width: 140px; height: 180px; object-fit: cover; border-radius: 6px; border: 1px solid #ddd; display: block;" />
              <span style="font-size: 0.75rem; color: #F0548A; display: block; margin-top: 4px; font-weight: bold;">🔍 Click to view full image</span>
            </a>
            <span style="font-weight: bold; color: #333; display: block;">${name}</span>
          </td>
          <td style="padding: 10px; text-align: center; vertical-align: middle; color: #555;">
            <strong>${item.size}</strong>${item.color ? ` / Color: ${item.color}` : ''}
          </td>
          <td style="padding: 10px; text-align: center; vertical-align: middle; color: #555;">
            ${item.quantity}
          </td>
          <td style="padding: 10px; text-align: right; vertical-align: middle; font-weight: bold; color: #333;">
            ₹${item.price * item.quantity}
          </td>
        </tr>
      `;
    }).join('');

    const html = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eaeaea; border-radius: 8px; background-color: #fcfcfc;">
        <h2 style="color: #F0548A; text-align: center; border-bottom: 2px solid #F0548A; padding-bottom: 10px; margin-top: 0;">Bhawna Closet - New Order!</h2>
        
        <p style="color: #333;">A new order has been placed on the store. Below are the details:</p>
        
        <div style="background-color: #f7f7f7; padding: 15px; border-radius: 6px; margin-bottom: 20px;">
          <h3 style="margin-top: 0; color: #333; font-size: 1rem; border-bottom: 1px solid #ddd; padding-bottom: 5px;">Order Summary</h3>
          <table style="width: 100%; font-size: 0.95rem; border-collapse: collapse;">
            <tr><td style="padding: 4px 0;"><strong>Order ID:</strong></td><td style="padding: 4px 0;">${populatedOrder._id}</td></tr>
            <tr><td style="padding: 4px 0;"><strong>Payment Method:</strong></td><td style="padding: 4px 0;">${populatedOrder.paymentMethod}</td></tr>
            <tr><td style="padding: 4px 0;"><strong>Payment Status:</strong></td><td style="padding: 4px 0;">${populatedOrder.paymentStatus}</td></tr>
            <tr><td style="padding: 4px 0;"><strong>Total Amount:</strong></td><td style="padding: 4px 0; font-weight: bold; color: #F0548A;">₹${populatedOrder.totalAmount}</td></tr>
            <tr>
              <td style="padding: 4px 0;"><strong>Online Paid:</strong></td>
              <td style="padding: 4px 0; font-weight: bold; color: #28a745;">₹${populatedOrder.paymentMethod === 'Partial COD' ? '500' : populatedOrder.totalAmount}</td>
            </tr>
            ${populatedOrder.paymentMethod === 'Partial COD' ? `
              <tr>
                <td style="padding: 4px 0;"><strong>Remaining COD Amount:</strong></td>
                <td style="padding: 4px 0; font-weight: bold; color: #fd7e14;">₹${Math.max(0, populatedOrder.totalAmount - 500)}</td>
              </tr>
            ` : ''}
          </table>
        </div>
        
        <div style="margin-bottom: 20px;">
          <h3 style="color: #333; font-size: 1rem; border-bottom: 1px solid #ddd; padding-bottom: 5px;">Items Ordered</h3>
          <table style="width: 100%; border-collapse: collapse;">
            <thead>
              <tr style="background-color: #f1f1f1;">
                <th style="padding: 8px; text-align: left; font-size: 0.9rem; color: #555;">Product</th>
                <th style="padding: 8px; text-align: center; font-size: 0.9rem; color: #555;">Size / Color</th>
                <th style="padding: 8px; text-align: center; font-size: 0.9rem; color: #555;">Qty</th>
                <th style="padding: 8px; text-align: right; font-size: 0.9rem; color: #555;">Price</th>
              </tr>
            </thead>
            <tbody>
              ${itemsHtml}
            </tbody>
          </table>
        </div>

        <div style="background-color: #f7f7f7; padding: 15px; border-radius: 6px; margin-bottom: 20px;">
          <h3 style="margin-top: 0; color: #333; font-size: 1rem; border-bottom: 1px solid #ddd; padding-bottom: 5px;">Customer Shipping Details</h3>
          <p style="margin: 0; line-height: 1.5; white-space: pre-wrap; font-size: 0.95rem; color: #333;">${populatedOrder.shippingAddress}</p>
        </div>

        <p style="font-size: 0.8rem; color: #777; text-align: center; border-top: 1px solid #eee; padding-top: 15px; margin-bottom: 0;">
          This order has been automatically queued and synced to Shiprocket. You can manage this order inside the Bhawna Closet Admin Panel.
        </p>
      </div>
    `;

    await sendEmail(adminEmail, subject, text, html);
  } catch (err) {
    console.error('Failed to send admin order notification email:', err.message);
  }
};

export const sendOrderConfirmationToCustomer = async (order, customerEmail) => {
  try {
    if (!customerEmail) return;
    const populatedOrder = await Order.findById(order._id).populate('items.productId');
    const subject = `🎉 Order Confirmed! Bhawna Closet #${populatedOrder._id.toString().slice(-8).toUpperCase()}`;

    const itemsText = populatedOrder.items.map(item => {
      const name = item.productId ? item.productId.name : 'Outfit';
      return `- ${name} (${item.size}${item.color ? ` / Color: ${item.color}` : ''}) x ${item.quantity}`;
    }).join('\n');

    const text = `
Dear Customer,

Thank you for shopping with Bhawna Closet! Your order has been successfully confirmed.

Order Summary:
---------------------------------------------
Order ID: #${populatedOrder._id.toString().slice(-8).toUpperCase()}
Payment Method: ${populatedOrder.paymentMethod}
Payment Status: ${populatedOrder.paymentStatus}
Total Amount: ₹${populatedOrder.totalAmount}
Paid Online: ₹${populatedOrder.paymentMethod === 'Partial COD' ? 500 : populatedOrder.totalAmount}
Remaining Cash on Delivery: ₹${populatedOrder.paymentMethod === 'Partial COD' ? Math.max(0, populatedOrder.totalAmount - 500) : 0}

Items Ordered:
---------------------------------------------
${itemsText}

Shipping Address:
---------------------------------------------
${populatedOrder.shippingAddress}

We are preparing your package for shipment. You will receive tracking updates once your order is dispatched.

With love,
Bhawna Closet
`;

    await sendEmail(customerEmail, subject, text);
  } catch (err) {
    console.error('Failed to send customer order confirmation email:', err.message);
  }
};

export const sendInquiryNotificationToAdmin = async (inquiry) => {
  try {
    const adminEmail = process.env.ADMIN_EMAIL || 'bhawnacloset.in@gmail.com';
    const subject = `📞 New Contact Inquiry: ${inquiry.name}`;

    const text = `
Hello Admin,

A new contact inquiry has been submitted on Bhawna Closet!

Inquiry Details:
---------------------------------------------
Name: ${inquiry.name}
Email: ${inquiry.email}
Phone: ${inquiry.phone}
Submitted At: ${inquiry.createdAt || new Date()}

Message:
---------------------------------------------
${inquiry.message}

Warm regards,
Bhawna Closet System
`;

    await sendEmail(adminEmail, subject, text);
  } catch (err) {
    console.error('Failed to send admin inquiry email:', err.message);
  }
};
