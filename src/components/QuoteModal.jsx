import React, { useState } from 'react';
import { X, CheckCircle, ShieldCheck, Zap, ArrowRight, Sparkles } from 'lucide-react';
import { useInsuranceContext } from '../context/InsuranceContext';
import { useQuickQuote } from '../hooks/useQuickQuote';
import { formatCurrency } from '../utils/formatters';

export default function QuoteModal() {
  const { isQuoteModalOpen, closeQuoteModal, selectedProduct, showToast } = useInsuranceContext();
  const { loading, result, fetchQuote, resetQuote } = useQuickQuote();

  const [inputVal, setInputVal] = useState('');
  const [mobile, setMobile] = useState('');
  const [zeroDep, setZeroDep] = useState(true);
  const [roadsideAssistance, setRoadsideAssistance] = useState(true);

  if (!isQuoteModalOpen || !selectedProduct) return null;

  const handleCalculate = async (e) => {
    e.preventDefault();
    await fetchQuote({
      productType: selectedProduct.id || 'car',
      identifier: inputVal || 'MH 02 CK 4421',
      mobile: mobile || '9876543210'
    });
  };

  const handleClose = () => {
    resetQuote();
    closeQuoteModal();
  };

  const calculatedBasePrice = result?.estimatedPremium || 2490;
  const zeroDepCost = zeroDep ? 450 : 0;
  const rsaCost = roadsideAssistance ? 199 : 0;
  const totalPremium = calculatedBasePrice + zeroDepCost + rsaCost;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">
        
        {/* Modal Top Header */}
        <div className="bg-gradient-to-r from-indigo-900 to-indigo-800 text-white p-6 relative">
          <button
            onClick={handleClose}
            className="absolute top-5 right-5 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2 text-indigo-300 text-xs font-bold uppercase tracking-wider mb-1">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Instant Quote Calculator</span>
          </div>

          <h3 className="text-2xl font-black">
            {selectedProduct.title || 'Insurance Policy'}
          </h3>
          <p className="text-xs text-indigo-200 mt-1">
            Zero broker fees • Guaranteed 100% paperless direct policy
          </p>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-5">
          {!result ? (
            <form onSubmit={handleCalculate} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                  Vehicle / Identification Number
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. MH 02 AB 1234 or City / Age"
                  value={inputVal}
                  onChange={(e) => setInputVal(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 font-semibold text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-600 uppercase"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                  Mobile Number (For WhatsApp Policy PDF)
                </label>
                <div className="flex">
                  <span className="inline-flex items-center px-3.5 rounded-l-xl border border-r-0 border-gray-200 bg-gray-50 text-gray-600 text-sm font-bold">
                    +91
                  </span>
                  <input
                    type="tel"
                    required
                    placeholder="98765 43210"
                    maxLength={10}
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value)}
                    className="flex-1 px-4 py-3 rounded-r-xl border border-gray-200 font-semibold text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-600"
                  />
                </div>
              </div>

              <div className="bg-emerald-50 border border-emerald-100 rounded-2xl p-3.5 flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0" />
                <span className="text-xs text-emerald-900 font-medium">
                  Direct pricing applied: You save approximately <strong className="font-extrabold text-emerald-700">up to 85%</strong> versus traditional agent rates.
                </span>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm shadow-lg shadow-indigo-200 flex items-center justify-center gap-2 transition active:scale-98 disabled:opacity-50"
              >
                {loading ? (
                  <span>Calculating Live Rates...</span>
                ) : (
                  <>
                    <span>Calculate Live Premium</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          ) : (
            /* Quote Result View */
            <div className="space-y-4 animate-in fade-in duration-300">
              
              {/* Premium Breakdown Card */}
              <div className="p-4 bg-slate-50 rounded-2xl border border-gray-200/80">
                <div className="flex items-center justify-between pb-3 border-b border-gray-200">
                  <div>
                    <span className="text-xs text-gray-400 font-bold uppercase">Estimated Quote</span>
                    <div className="text-2xl font-black text-gray-900">
                      {formatCurrency(totalPremium)}
                      <span className="text-xs text-gray-400 font-medium ml-1">/year (+GST)</span>
                    </div>
                  </div>
                  <span className="text-xs bg-emerald-100 text-emerald-800 font-extrabold px-2.5 py-1 rounded-full">
                    Quote ID: {result.quoteId}
                  </span>
                </div>

                {/* Add-on toggles */}
                <div className="mt-3 space-y-2 text-xs">
                  <div className="flex items-center justify-between py-1">
                    <label className="flex items-center gap-2 text-gray-700 font-semibold cursor-pointer">
                      <input
                        type="checkbox"
                        checked={zeroDep}
                        onChange={(e) => setZeroDep(e.target.checked)}
                        className="w-4 h-4 text-indigo-600 rounded focus:ring-indigo-500"
                      />
                      <span>Zero Depreciation Cover (Bumper-to-Bumper)</span>
                    </label>
                    <span className="font-bold text-gray-900">+₹450</span>
                  </div>

                  <div className="flex items-center justify-between py-1">
                    <label className="flex items-center gap-2 text-gray-700 font-semibold cursor-pointer">
                      <input
                        type="checkbox"
                        checked={roadsideAssistance}
                        onChange={(e) => setRoadsideAssistance(e.target.checked)}
                        className="w-4 h-4 text-indigo-600 rounded focus:ring-indigo-500"
                      />
                      <span>24x7 Roadside Assistance & Towing</span>
                    </label>
                    <span className="font-bold text-gray-900">+₹199</span>
                  </div>
                </div>
              </div>

              {/* Guarantees */}
              <div className="grid grid-cols-2 gap-2 text-[11px] text-gray-600 font-medium">
                <div className="flex items-center gap-1.5 p-2 bg-indigo-50 rounded-xl">
                  <Zap className="w-3.5 h-3.5 text-indigo-600" />
                  <span>7-Min claim settlement</span>
                </div>
                <div className="flex items-center gap-1.5 p-2 bg-indigo-50 rounded-xl">
                  <ShieldCheck className="w-3.5 h-3.5 text-indigo-600" />
                  <span>14,000+ Cashless network</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-2 pt-2">
                <button
                  type="button"
                  onClick={resetQuote}
                  className="px-4 py-3 rounded-xl border border-gray-300 hover:bg-gray-50 text-gray-700 text-xs font-bold transition"
                >
                  Recalculate
                </button>
                <button
                  type="button"
                  onClick={() => {
                    showToast(`Congratulations! Policy initiated for Quote #${result.quoteId}`);
                    handleClose();
                  }}
                  className="flex-1 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-extrabold shadow-lg shadow-emerald-200 flex items-center justify-center gap-2 transition"
                >
                  <span>Buy Policy Now • {formatCurrency(totalPremium)}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>
          )}
        </div>

      </div>
    </div>
  );
}

