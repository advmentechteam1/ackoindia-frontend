import React, { createContext, useContext, useState } from 'react';

const InsuranceContext = createContext();

export const InsuranceProvider = ({ children }) => {
  const [activeTab, setActiveTab] = useState('car');
  const [quickInput, setQuickInput] = useState('');
  const [toast, setToast] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  const showToast = (message, type = 'success') => {
    setToast({ message, type });
    setTimeout(() => {
      setToast(null);
    }, 3500);
  };

  const openQuoteForProduct = (product) => {
    setSelectedProduct(product);
    setIsQuoteModalOpen(true);
  };

  const closeQuoteModal = () => {
    setIsQuoteModalOpen(false);
    setSelectedProduct(null);
  };

  return (
    <InsuranceContext.Provider
      value={{
        activeTab,
        setActiveTab,
        quickInput,
        setQuickInput,
        toast,
        showToast,
        selectedProduct,
        isQuoteModalOpen,
        openQuoteForProduct,
        closeQuoteModal
      }}
    >
      {children}
    </InsuranceContext.Provider>
  );
};

export const useInsuranceContext = () => {
  const context = useContext(InsuranceContext);
  if (!context) {
    throw new Error('useInsuranceContext must be used within an InsuranceProvider');
  }
  return context;
};

