import React from 'react';
import { ShieldCheck, Wrench, Key, Sparkles, Droplets, Zap, Layers, ArrowRight, Check } from 'lucide-react';
import { useInsuranceContext } from '../context/InsuranceContext';

export default function AddonsGrid() {
  const { openQuoteForProduct, showToast } = useInsuranceContext();

  const addons = [
    {
      id: 'zero-dep',
      title: 'Zero Depreciation',
      tag: 'Most popular',
      desc: 'Full claim on plastic, rubber, glass and metal parts. No deduction for the age of your car.',
      price: '₹1,199',
      icon: Layers
    },
    {
      id: 'engine-protect',
      title: 'Engine & Gearbox Protect',
      tag: 'Monsoon pick',
      desc: 'Covers engine and gearbox damage from water ingression and oil leakage.',
      price: '₹649',
      icon: Wrench
    },
    {
      id: 'roadside',
      title: '24x7 Roadside Assistance',
      tag: 'Pan-India',
      desc: 'Battery jump-start, flat tyre help, towing up to 50 km and lockout support.',
      price: '₹199',
      icon: Zap
    },
    {
      id: 'return-to-invoice',
      title: 'Return to Invoice',
      tag: 'Total loss',
      desc: 'Get the original invoice value, including road tax and registration, if your car is stolen or written off.',
      price: '₹899',
      icon: ShieldCheck
    },
    {
      id: 'consumables',
      title: 'Consumables Cover',
      tag: 'No small bills',
      desc: 'Pays for engine oil, coolant, nuts, bolts and washers used during an accident repair.',
      price: '₹349',
      icon: Droplets
    },
    {
      id: 'key-replace',
      title: 'Key Replacement',
      tag: 'Smart keys',
      desc: 'Reimburses key fob programming and a new lockset if your smart key is lost or stolen.',
      price: '₹249',
      icon: Key
    }
  ];

  return (
    <section className="bg-slate-50/70 py-16 sm:py-20 border-b border-gray-200/60">
      <div className="w-full px-[4%]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

          {/* Left: intro panel */}
          <div className="lg:col-span-4 lg:sticky lg:top-24 rounded-[28px] bg-gradient-to-br from-indigo-950 via-slate-900 to-slate-950 text-white p-8 relative overflow-hidden shadow-xl">
            <div className="absolute -bottom-16 -right-16 w-60 h-60 rounded-full bg-indigo-500/25 blur-3xl pointer-events-none"></div>
            <div className="relative">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-indigo-200 text-xs font-bold border border-white/10">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Smart add-ons</span>
              </div>
              <h2 className="mt-4 text-3xl sm:text-4xl font-black tracking-tight leading-[1.1]">
                Build the cover your car deserves
              </h2>
              <p className="mt-3 text-sm text-slate-300 leading-relaxed">
                Pick only the riders you need. Each one is optional and can be added to your policy in a single tap.
              </p>

              <ul className="mt-6 space-y-2.5 text-sm text-slate-200">
                {['Add or remove riders anytime at renewal', 'Instant policy update, no paperwork', 'Bundle 3 or more and save up to 20%'].map((t) => (
                  <li key={t} className="flex items-start gap-2.5">
                    <span className="mt-0.5 w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-300 flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3 stroke-[3]" />
                    </span>
                    {t}
                  </li>
                ))}
              </ul>

              <button
                onClick={() => {
                  openQuoteForProduct({ id: 'car', title: 'Quote with add-on bundle' });
                  showToast('Add-on bundle selected');
                }}
                className="mt-8 w-full px-5 py-3 rounded-xl bg-white text-gray-900 text-sm font-extrabold hover:bg-indigo-50 transition flex items-center justify-center gap-2"
              >
                Get a bundle quote <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right: add-on cards */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {addons.map((addon) => {
              const Icon = addon.icon;
              return (
                <div
                  key={addon.id}
                  onClick={() => {
                    openQuoteForProduct({ id: 'car', title: `Quote with ${addon.title}` });
                    showToast(`Selected rider: ${addon.title}`);
                  }}
                  className="bg-white rounded-3xl p-6 border border-gray-200/80 hover:border-indigo-400 hover:shadow-xl transition-all duration-300 cursor-pointer flex gap-4 group"
                >
                  <div className="w-12 h-12 shrink-0 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center group-hover:bg-indigo-600 group-hover:text-white transition-all">
                    <Icon className="w-6 h-6 stroke-[2]" />
                  </div>
                  <div className="flex-1 min-w-0 flex flex-col">
                    <h3 className="text-base font-extrabold text-gray-900 group-hover:text-indigo-600 transition-colors leading-snug">
                      {addon.title}
                    </h3>
                    <span className="mt-1 self-start text-[10px] font-extrabold uppercase tracking-wider text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded-full">
                      {addon.tag}
                    </span>
                    <p className="text-sm text-gray-500 mt-2 leading-relaxed flex-1">{addon.desc}</p>
                    <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between">
                      <span className="text-sm font-extrabold text-gray-900">
                        {addon.price}<span className="text-xs font-semibold text-gray-400">/yr</span>
                      </span>
                      <span className="text-xs font-bold text-indigo-600 group-hover:underline flex items-center gap-1">
                        Add <ArrowRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
