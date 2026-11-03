import { useState } from 'react';
import { insuranceService } from '../services/insuranceService';
import { sanitizeVehicleNumber } from '../utils/formatters';

export const useQuickQuote = () => {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const fetchQuote = async ({ productType, identifier, pinCode, mobile }) => {
    setLoading(true);
    setError(null);
    try {
      const sanitizedIdentifier = productType === 'car' || productType === 'bike' 
        ? sanitizeVehicleNumber(identifier) 
        : identifier;

      const response = await insuranceService.getInstantQuote({
        productType,
        identifier: sanitizedIdentifier,
        pinCode,
        mobile
      });
      setResult(response);
      return response;
    } catch (err) {
      setError(err?.message || 'Failed to fetch quote. Please try again.');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const resetQuote = () => {
    setResult(null);
    setError(null);
  };

  return { loading, result, error, fetchQuote, resetQuote };
};

