import React from 'react';
import { ArrowUpRight, Check, Sparkles } from 'lucide-react';
import { useInsuranceContext } from '../context/InsuranceContext';

export default function InsuranceCard({ product }) {
  const { openQuoteForProduct } = useInsuranceContext();

  return (
    <div 
      onClick={() => openQuoteForProduct(product)}
      className="group relative rounded-3xl bg-white border border-gray-100 p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 cursor-pointer flex flex-col justify-between overflow-hidden"
    >
      {/* Popular badge */}
      {product.popular && (
        <div className="absolute top-0 right-0 bg-gradient-to-l from-indigo-600 to-purple-600 text-white text-[10px] font-extrabold uppercase tracking-widest px-3 py-1 rounded-bl-xl shadow-xs flex items-center gap-1">
          <Sparkles className="w-3 h-3" />
          Most Popular
        </div>
      )}

      {/* Header Info */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs font-bold uppercase tracking-wider text-indigo-700 bg-indigo-50 px-2.5 py-1 rounded-lg">
            {product.category}
          </span>
          <span className="text-xs font-semibold text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-100">
            {product.discountBadge}
          </span>
        </div>

        <h3 className="text-xl font-black text-gray-900 group-hover:text-indigo-600 transition-colors flex items-center justify-between">
          <span>{product.title}</span>
          <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 group-hover:bg-indigo-600 group-hover:text-white transition-all">
            <ArrowUpRight className="w-4 h-4" />
          </div>
        </h3>

        <p className="text-xs sm:text-sm text-gray-600 mt-1 line-clamp-2">
          {product.subtitle}
        </p>

        {/* Feature Highlights */}
        <ul className="mt-4 space-y-2 border-t border-gray-100 pt-3">
          {product.features.map((feat, idx) => (
            <li key={idx} className="flex items-center gap-2 text-xs text-gray-600">
              <div className="w-4 h-4 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-600 shrink-0">
                <Check className="w-2.5 h-2.5 stroke-[3]" />
              </div>
              <span>{feat}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Footer / Price Tag */}
      <div className="mt-6 pt-3 border-t border-gray-100 flex items-center justify-between">
        <div className="flex flex-col">
          <span className="text-[11px] text-gray-600 font-medium uppercase tracking-wide">Starting from</span>
          <span className="text-sm font-extrabold text-gray-900">
            {product.priceBadge}
          </span>
        </div>
        <button className="px-4 py-2 rounded-xl bg-gray-50 group-hover:bg-indigo-600 group-hover:text-white text-gray-700 text-xs font-bold transition-all shadow-xs">
          Get Quote ➔
        </button>
      </div>
    </div>
  );
}

