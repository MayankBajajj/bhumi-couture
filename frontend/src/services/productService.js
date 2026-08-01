import { request } from './api';

export const productService = {
  getProducts: async ({ page = 1, limit = 12, category = 'All', search = '', sort = 'newest', isNewArrival, isFeatured, groupVariants = false } = {}) => {
    const params = new URLSearchParams();
    params.append('page', page);
    params.append('limit', limit);
    if (category) params.append('category', category);
    if (search) params.append('search', search);
    if (sort) params.append('sort', sort);
    if (groupVariants) params.append('groupVariants', 'true');
    if (isNewArrival) params.append('isNewArrival', 'true');
    if (isFeatured) params.append('isFeatured', 'true');

    return await request(`/products?${params.toString()}`, {
      method: 'GET'
    });
  },

  getProductBySlug: async (slug) => {
    return await request(`/products/slug/${slug}`, {
      method: 'GET'
    });
  },

  getCategories: async () => {
    return await request('/categories', {
      method: 'GET'
    });
  }
};
