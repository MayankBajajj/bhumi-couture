import jwt from 'jsonwebtoken';
import User from '../models/User.js';

export const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET || 'bhawna_closet_super_secret_jwt_key_2026', {
    expiresIn: '30d'
  });
};

export const registerUser = async (name, phone, password) => {
  const userExists = await User.findOne({ phone });
  if (userExists) {
    throw new Error('Phone number is already registered');
  }
  const user = await User.create({ name, phone, password });
  return {
    _id: user._id,
    name: user.name,
    phone: user.phone,
    token: generateToken(user._id)
  };
};

export const loginUser = async (phone, password) => {
  const user = await User.findOne({ phone });
  if (user && (await user.comparePassword(password))) {
    return {
      _id: user._id,
      name: user.name,
      phone: user.phone,
      token: generateToken(user._id)
    };
  } else {
    throw new Error('Invalid phone number or password');
  }
};
