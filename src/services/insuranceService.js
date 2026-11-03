import { apiClient } from './api';
import { calculateEstimatedPremium } from '../utils/formatters';

export const insuranceService = {
  // Get an instant quote estimate
  async getInstantQuote({ productType, identifier, pinCode, mobile }) {
    await apiClient.post('/quotes/instant', { productType, identifier, pinCode, mobile });
    const premium = calculateEstimatedPremium(productType);
    return {
      success: true,
      quoteId: `Q-${Math.floor(100000 + Math.random() * 900000)}`,
      productType,
      estimatedPremium: premium,
      discountPct: 45,
      cashlessGarages: 7200,
      turnaroundMinutes: 7
    };
  },

  // Check mock vehicle challans
  async checkTrafficChallan(vehicleNumber) {
    await apiClient.get(`/vehicle/challans/${vehicleNumber}`);
    return {
      vehicleNumber,
      challansFound: 0,
      status: 'Clean record - No pending challans',
      checkedAt: new Date().toLocaleDateString('en-IN')
    };
  },

  // File rapid claim
  async initiateClaimRequest(claimData) {
    return apiClient.post('/claims/initiate', claimData);
  }
};

