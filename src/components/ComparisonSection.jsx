import React from 'react';
import { Check, X, ShieldCheck, ArrowRight, Sparkles, Clock, BadgePercent, Wallet } from 'lucide-react';
import { useInsuranceContext } from '../context/InsuranceContext';

export default function ComparisonSection() {
  const { openQuoteForProduct } = useInsuranceContext();

  const highlights = [
    { icon: BadgePercent, value: '0%', label: 'Agent commission' },
    { icon: Clock, value: '60 sec', label: 'Policy issuance' },
    { icon: Wallet, value: '7 min', label: 'Average claim approval' }
  ];

  const comparisonRows = [
    {
      feature: 'Premium & commissions',
      traditional: 'Agent commission of 15-20% is quietly added to your premium.',
      us: 'No middlemen. The full saving comes back to you.'
    },
    {
      feature: 'Buying the policy',
      traditional: '2-4 days, paper signatures and physical forms.',
      us: 'Done in 60 seconds. Policy lands on WhatsApp.'
    },
    {
      feature: 'Raising a claim',
      traditional: 'Surveyor visits in 3-7 days, followed by long paperwork.',
      us: 'Upload photos or a video in the app. Approval in about 7 minutes.'
    },
    {
      feature: 'Repair & treatment network',
      traditional: 'Few authorised workshops and bills to reimburse later.',
      us: '14,000+ cashless garages and hospitals with doorstep pick-up.'
    },
    {
      feature: 'Hospital bill deductions',
      traditional: 'Room rent sub-limits, ICU caps and medicine deductions.',
      us: 'Cashless admission. No deductions on approved bills.'
    }
  ];

  return (
    <section className="bg-slate-50/70 py-16 sm:py-20 border-b border-gray-200/60">
      <div className="w-full px-[4%]">

        {/* Header */}
        <div className="grid lg:grid-cols-12 gap-8 items-end mb-10">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-emerald-100/80 text-emerald-800 text-xs font-bold mb-4 border border-emerald-200">
              <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
              <span>Why millions are switching to direct insurance</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 tracking-tight leading-[1.1]">
              Agents add cost.<br />
              <span className="text-[#6332ec]">We take it out.</span>
            </h2>
            <p className="text-sm sm:text-base text-gray-500 mt-3 font-medium max-w-xl">
              A side-by-side look at price, speed and claims, so you can see exactly where your money goes.
            </p>
          </div>

          <div className="lg:col-span-5 grid grid-cols-3 gap-3">
            {highlights.map(({ icon: Icon, value, label }) => (
              <div key={label} className="rounded-2xl bg-white border border-gray-200 p-4 text-center shadow-xs">
                <Icon className="w-5 h-5 text-[#6332ec] mx-auto" />
                <div className="text-xl font-black text-gray-900 mt-2">{value}</div>
                <div className="text-[11px] text-gray-500 font-semibold leading-tight mt-0.5">{label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Versus cards */}
        <div className="grid lg:grid-cols-2 gap-6 items-stretch">

          {/* Traditional */}
          <div className="rounded-[28px] bg-white border border-gray-200 p-7">
            <div className="flex items-center justify-between mb-5">
              <h3 className="text-lg font-extrabold text-gray-500">Traditional agents</h3>
              <span className="text-[11px] font-bold uppercase tracking-wider text-rose-600 bg-rose-50 px-2.5 py-1 rounded-full">The old way</span>
            </div>
            <ul className="divide-y divide-gray-100">
              {comparisonRows.map((row) => (
                <li key={row.feature} className="py-4 flex gap-3">
                  <span className="mt-0.5 w-6 h-6 rounded-full bg-rose-50 text-rose-500 flex items-center justify-center shrink-0">
                    <X className="w-3.5 h-3.5 stroke-[3]" />
                  </span>
                  <div>
                    <div className="text-sm font-bold text-gray-800">{row.feature}</div>
                    <p className="text-sm text-gray-500 mt-0.5 leading-relaxed">{row.traditional}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* ACKOIndia */}
          <div className="rounded-[28px] bg-gradient-to-br from-indigo-950 via-slate-900 to-slate-950 text-white p-7 relative overflow-hidden shadow-2xl">
            <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-indigo-500/25 blur-3xl pointer-events-none"></div>
            <div className="relative flex items-center justify-between mb-5">
              <h3 className="text-lg font-extrabold text-emerald-400">ACKOIndia Direct</h3>
              <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-200 bg-emerald-900/70 px-2.5 py-1 rounded-full">Winner</span>
            </div>
            <ul className="relative divide-y divide-white/10">
              {comparisonRows.map((row) => (
                <li key={row.feature} className="py-4 flex gap-3">
                  <span className="mt-0.5 w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-300 flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </span>
                  <div>
                    <div className="text-sm font-bold text-white">{row.feature}</div>
                    <p className="text-sm text-slate-300 mt-0.5 leading-relaxed">{row.us}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* CTA strip */}
        <div className="mt-6 rounded-2xl bg-white border border-gray-200 px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs font-semibold text-gray-600">
            <ShieldCheck className="w-4 h-4 text-indigo-600" />
            <span>Illustrative comparison for this demo • Not a real offer</span>
          </div>
          <button
            onClick={() => openQuoteForProduct({ id: 'car', title: 'Compare Rates Live' })}
            className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#6332ec] hover:bg-indigo-700 text-white font-bold text-xs shadow-md flex items-center justify-center gap-2 transition active:scale-95"
          >
            <span>See how much you can save</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
}
