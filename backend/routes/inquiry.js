import express from 'express';
import Inquiry from '../models/Inquiry.js';
import { sendInquiryNotificationToAdmin } from '../services/emailService.js';

const router = express.Router();

// POST a new inquiry/order contact submission
router.post('/', async (req, res) => {
  try {
    const { name, email, phone, message, productId } = req.body;

    if (!name || !email || !phone || !message) {
      return res.status(400).json({ message: 'All fields (name, email, phone, message) are required.' });
    }

    const inquiryData = {
      name,
      email,
      phone,
      message
    };

    if (productId) {
      inquiryData.product = productId;
    }

    const inquiry = new Inquiry(inquiryData);
    await inquiry.save();

    // Send email notification to admin (bhawnacloset.in@gmail.com)
    await sendInquiryNotificationToAdmin(inquiry);

    res.status(201).json({ message: 'Thank you! Your inquiry has been submitted successfully.', inquiry });
  } catch (error) {
    console.error('Inquiry processing error:', error);
    res.status(500).json({ message: 'An unexpected error occurred. Please try again.' });
  }
});

export default router;
