import React from 'react';
import { Zap, BadgeCheck, Headphones, Users } from 'lucide-react';

const stats = [
  { icon: Zap, value: '7 mins', label: 'Fastest claim settlement' },
  { icon: BadgeCheck, value: '94.3%', label: 'Claims settled within a week' },
  { icon: Headphones, value: '24x7', label: 'Human support, every day' },
  { icon: Users, value: '1 Cr+', label: 'Customers who trust us' }
];

export default function TrustMetrics() {
  return (
    <section className="bg-white py-14 border-b border-gray-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-[28px] bg-gradient-to-r from-indigo-950 via-slate-900 to-indigo-950 text-white p-8 sm:p-10 grid lg:grid-cols-12 gap-8 items-center relative overflow-hidden">
          <div className="absolute -top-20 left-1/3 w-72 h-72 rounded-full bg-indigo-500/20 blur-3xl pointer-events-none"></div>

          <div className="lg:col-span-4 relative">
            <span className="text-[11px] font-extrabold uppercase tracking-widest text-emerald-300">Proof, not promises</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight mt-2 leading-tight">
              Trust is earned, one claim at a time
            </h2>
          </div>

          <div className="lg:col-span-8 relative grid grid-cols-2 sm:grid-cols-4 gap-4">
            {stats.map(({ icon: Icon, value, label }) => (
              <div key={label} className="rounded-2xl bg-white/5 border border-white/10 p-4">
                <Icon className="w-5 h-5 text-indigo-300" />
                <div className="text-2xl sm:text-3xl font-black mt-3">{value}</div>
                <div className="text-xs text-slate-300 font-semibold mt-1 leading-snug">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
