import { registerUser, loginUser, generateToken } from '../services/userService.js';
import User from '../models/User.js';
import { verifyFirebaseIdToken } from '../utils/firebaseAuth.js';

export const register = async (req, res, next) => {
  try {
    const { name, phone, password, firebaseToken } = req.body;
    if (!name || !phone || !password || !firebaseToken) {
      return res.status(400).json({ message: 'Please fill in all fields' });
    }
    if (password.length < 6) {
      return res.status(400).json({ message: 'Password must be at least 6 characters' });
    }

    // Verify Firebase ID token
    const decoded = await verifyFirebaseIdToken(firebaseToken);
    const tokenPhone = decoded.phone_number;
    if (!tokenPhone) {
      return res.status(400).json({ message: 'Token does not contain a verified phone number' });
    }

    // Ensure phone numbers match
    const normalizedTokenPhone = tokenPhone.replace(/\D/g, '');
    const normalizedInputPhone = phone.replace(/\D/g, '');
    if (!normalizedTokenPhone.endsWith(normalizedInputPhone)) {
      return res.status(400).json({ message: 'Phone number mismatch with verification token' });
    }

    const result = await registerUser(name, tokenPhone, password);
    res.status(201).json(result);
  } catch (error) {
    res.status(400);
    next(error);
  }
};

export const login = async (req, res, next) => {
  try {
    const { phone, password } = req.body;
    if (!phone || !password) {
      return res.status(400).json({ message: 'Please fill in all fields' });
    }
    
    // Normalize input phone number
    let normalizedPhone = phone.trim();
    if (!normalizedPhone.startsWith('+')) {
      if (normalizedPhone.length === 10) {
        normalizedPhone = `+91${normalizedPhone}`;
      } else {
        return res.status(400).json({ message: 'Please enter a valid phone number with country code (e.g. +91XXXXXXXXXX)' });
      }
    }

    const result = await loginUser(normalizedPhone, password);
    res.json(result);
  } catch (error) {
    res.status(401);
    next(error);
  }
};

export const loginOtp = async (req, res, next) => {
  try {
    const { phone, firebaseToken } = req.body;
    if (!phone || !firebaseToken) {
      return res.status(400).json({ message: 'Please provide phone and firebase verification token' });
    }

    const decoded = await verifyFirebaseIdToken(firebaseToken);
    const tokenPhone = decoded.phone_number;
    if (!tokenPhone) {
      return res.status(400).json({ message: 'Token does not contain a verified phone number' });
    }

    const normalizedTokenPhone = tokenPhone.replace(/\D/g, '');
    const normalizedInputPhone = phone.replace(/\D/g, '');
    if (!normalizedTokenPhone.endsWith(normalizedInputPhone)) {
      return res.status(400).json({ message: 'Phone number mismatch with verification token' });
    }

    const user = await User.findOne({ phone: tokenPhone });
    if (!user) {
      return res.status(404).json({ message: 'Phone number is not registered. Please sign up first.' });
    }

    res.json({
      _id: user._id,
      name: user.name,
      phone: user.phone,
      token: generateToken(user._id)
    });
  } catch (error) {
    res.status(400);
    next(error);
  }
};

export const getProfile = async (req, res, next) => {
  try {
    res.json(req.user);
  } catch (error) {
    res.status(500);
    next(error);
  }
};

export const updateProfile = async (req, res, next) => {
  try {
    const user = await User.findById(req.user._id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    
    user.name = req.body.name || user.name;
    
    if (req.body.phone && req.body.phone !== user.phone) {
      let normalizedPhone = req.body.phone.trim();
      if (!normalizedPhone.startsWith('+') && normalizedPhone.length === 10) {
        normalizedPhone = `+91${normalizedPhone}`;
      }
      
      const phoneExists = await User.findOne({ phone: normalizedPhone });
      if (phoneExists) {
        return res.status(400).json({ message: 'Phone number is already in use' });
      }
      user.phone = normalizedPhone;
    }
    
    const updatedUser = await user.save();
    res.json({
      _id: updatedUser._id,
      name: updatedUser.name,
      phone: updatedUser.phone
    });
  } catch (error) {
    res.status(400);
    next(error);
  }
};

export const changePassword = async (req, res, next) => {
  try {
    const { currentPassword, newPassword } = req.body;
    if (!currentPassword || !newPassword) {
      return res.status(400).json({ message: 'Please provide both current and new password' });
    }
    if (newPassword.length < 6) {
      return res.status(400).json({ message: 'New password must be at least 6 characters' });
    }
    
    const user = await User.findById(req.user._id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    
    const isMatch = await user.comparePassword(currentPassword);
    if (!isMatch) {
      return res.status(400).json({ message: 'Incorrect current password' });
    }
    
    user.password = newPassword;
    await user.save();
    res.json({ message: 'Password updated successfully' });
  } catch (error) {
    res.status(400);
    next(error);
  }
};

export const resetPassword = async (req, res, next) => {
  try {
    const { phone, newPassword, firebaseToken } = req.body;
    if (!phone || !newPassword || !firebaseToken) {
      return res.status(400).json({ message: 'Please provide phone number, new password, and firebase verification token' });
    }
    if (newPassword.length < 6) {
      return res.status(400).json({ message: 'Password must be at least 6 characters' });
    }

    const decoded = await verifyFirebaseIdToken(firebaseToken);
    const tokenPhone = decoded.phone_number;
    if (!tokenPhone) {
      return res.status(400).json({ message: 'Token does not contain a verified phone number' });
    }

    const normalizedTokenPhone = tokenPhone.replace(/\D/g, '');
    const normalizedInputPhone = phone.replace(/\D/g, '');
    if (!normalizedTokenPhone.endsWith(normalizedInputPhone)) {
      return res.status(400).json({ message: 'Phone number mismatch with verification token' });
    }

    const user = await User.findOne({ phone: tokenPhone });
    if (!user) {
      return res.status(404).json({ message: 'Phone number is not registered' });
    }

    user.password = newPassword;
    await user.save();

    res.json({
      _id: user._id,
      name: user.name,
      phone: user.phone,
      token: generateToken(user._id)
    });
  } catch (error) {
    res.status(400);
    next(error);
  }
};
