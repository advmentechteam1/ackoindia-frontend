// Mock API Client with simulated latency for realistic frontend interaction
export const apiClient = {
  get: async (endpoint, params = {}) => {
    await new Promise((resolve) => setTimeout(resolve, 350));
    return { data: { success: true, timestamp: Date.now(), endpoint, params } };
  },
  post: async (endpoint, payload = {}) => {
    await new Promise((resolve) => setTimeout(resolve, 500));
    return { data: { success: true, timestamp: Date.now(), endpoint, payload } };
  }
};

