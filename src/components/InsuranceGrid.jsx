import React, { useState } from 'react';
import { INSURANCE_PRODUCTS } from '../utils/constants';
import InsuranceCard from './InsuranceCard';
import { Shield, Sparkles } from 'lucide-react';

export default function InsuranceGrid() {
  const [filter, setFilter] = useState('all');

  const filteredProducts = filter === 'all' 
    ? INSURANCE_PRODUCTS 
    : INSURANCE_PRODUCTS.filter((p) => {
        if (filter === 'auto') return p.category === 'auto';
        if (filter === 'health') return p.category === 'health' || p.category === 'life';
        if (filter === 'travel') return p.category === 'travel';
        return true;
      });

  return (
    <section id="products" className="py-16 bg-slate-50/70 border-b border-gray-100">
      <div className="w-full px-[4%]">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="flex items-center gap-2 text-indigo-600 font-bold text-xs uppercase tracking-widest mb-2">
              <Shield className="w-4 h-4" />
              <span>Tailored Protection Plans</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight">
              Direct Insurance Products
            </h2>
            <p className="text-gray-500 text-sm mt-1">
              Choose your coverage. Zero paper forms, instant issuance, and best-in-class claims.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-2 p-1 bg-white rounded-2xl border border-gray-200 shadow-xs">
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition ${
                filter === 'all' 
                  ? 'bg-indigo-600 text-white shadow-xs' 
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              All Plans
            </button>
            <button
              onClick={() => setFilter('auto')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition ${
                filter === 'auto' 
                  ? 'bg-indigo-600 text-white shadow-xs' 
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              🚗 Car & Bike
            </button>
            <button
              onClick={() => setFilter('health')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition ${
                filter === 'health' 
                  ? 'bg-indigo-600 text-white shadow-xs' 
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              🩺 Health & Life
            </button>
            <button
              onClick={() => setFilter('travel')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition ${
                filter === 'travel' 
                  ? 'bg-indigo-600 text-white shadow-xs' 
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              ✈️ Travel
            </button>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <InsuranceCard key={product.id} product={product} />
          ))}
        </div>

      </div>
    </section>
  );
}

