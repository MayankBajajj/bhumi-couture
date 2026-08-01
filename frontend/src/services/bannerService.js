import { request } from './api';

export const bannerService = {
  // Public API
  getBanners: async () => {
    return await request('/banners', {
      method: 'GET'
    });
  },

  // Admin APIs
  createBanner: async (formData) => {
    return await request('/banners', {
      method: 'POST',
      body: formData
    }, true);
  },

  deleteBanner: async (id) => {
    return await request(`/banners/${id}`, {
      method: 'DELETE'
    }, true);
  }
};
