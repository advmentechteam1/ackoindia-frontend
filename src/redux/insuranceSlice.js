import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selectedCategory: 'car',
  userIdentifier: '', // Car number, phone or pin
  savedQuotes: [],
  activeModal: null, // 'quote' | 'challan' | 'emergency' | null
  activeModalData: null,
  isSubmitting: false,
  notification: null
};

export const insuranceSlice = createSlice({
  name: 'insurance',
  initialState,
  reducers: {
    setSelectedCategory: (state, action) => {
      state.selectedCategory = action.payload;
    },
    setUserIdentifier: (state, action) => {
      state.userIdentifier = action.payload;
    },
    openModal: (state, action) => {
      state.activeModal = action.payload.type;
      state.activeModalData = action.payload.data || null;
    },
    closeModal: (state) => {
      state.activeModal = null;
      state.activeModalData = null;
    },
    addSavedQuote: (state, action) => {
      state.savedQuotes.unshift(action.payload);
    },
    setNotification: (state, action) => {
      state.notification = action.payload;
    },
    clearNotification: (state) => {
      state.notification = null;
    }
  }
});

export const {
  setSelectedCategory,
  setUserIdentifier,
  openModal,
  closeModal,
  addSavedQuote,
  setNotification,
  clearNotification
} = insuranceSlice.actions;

export default insuranceSlice.reducer;

