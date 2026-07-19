import { request } from './api';

export const authService = {
  login: async (phone, password) => {
    return await request('/auth/login', {
      method: 'POST',
      body: JSON.stringify({ phone, password })
    });
  },

  loginOtp: async (phone, firebaseToken) => {
    return await request('/auth/login-otp', {
      method: 'POST',
      body: JSON.stringify({ phone, firebaseToken })
    });
  },

  register: async (name, phone, password, firebaseToken) => {
    return await request('/auth/signup', {
      method: 'POST',
      body: JSON.stringify({ name, phone, password, firebaseToken })
    });
  },

  getProfile: async () => {
    return await request('/auth/profile', {
      method: 'GET'
    });
  },

  updateProfile: async (data) => {
    return await request('/auth/profile', {
      method: 'PUT',
      body: JSON.stringify(data)
    });
  },

  changePassword: async (currentPassword, newPassword) => {
    return await request('/auth/change-password', {
      method: 'PUT',
      body: JSON.stringify({ currentPassword, newPassword })
    });
  }
};
