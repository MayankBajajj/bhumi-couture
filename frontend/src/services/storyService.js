import { request } from './api';

export const storyService = {
  // Public API
  getStories: async () => {
    return await request('/stories', {
      method: 'GET'
    });
  },

  // Admin APIs
  createStory: async (formData) => {
    return await request('/stories/admin', {
      method: 'POST',
      body: formData
    }, true);
  },

  deleteStory: async (id) => {
    return await request(`/stories/admin/${id}`, {
      method: 'DELETE'
    }, true);
  },

  addSubStory: async (storyId, formData) => {
    return await request(`/stories/admin/${storyId}/substories`, {
      method: 'POST',
      body: formData
    }, true);
  },

  deleteSubStory: async (storyId, subId) => {
    return await request(`/stories/admin/${storyId}/substories/${subId}`, {
      method: 'DELETE'
    }, true);
  }
};
