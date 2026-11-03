/**
 * Helper formatters for insurance calculation and input sanitization
 */

export const formatCurrency = (amount) => {
  if (typeof amount !== 'number') return amount;
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0
  }).format(amount);
};

export const sanitizeVehicleNumber = (val = '') => {
  return val
    .toUpperCase()
    .replace(/[^A-Z0-9]/g, '')
    .slice(0, 10);
};

export const calculateEstimatedPremium = (type, params = {}) => {
  const baseMap = {
    car: 2094,
    bike: 457,
    health: 4380, // ~365/mo
    life: 5800,
    travel: 699,
    ev: 2850
  };

  const base = baseMap[type] || 1500;
  const variance = Math.floor(Math.random() * 200);
  return base + variance;
};

