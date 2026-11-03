import React from 'react';
import { Award, ShieldCheck } from 'lucide-react';

export default function PressRecognition() {
  const partners = [
    { name: 'Economic Times', award: 'Fintech Startup of the Year' },
    { name: 'CNBC-TV18', award: 'Leaders of Tomorrow Award' },
    { name: 'Forbes India', award: 'Top 50 Innovative InsurTechs' },
    { name: 'TechCrunch', award: 'Pioneering Direct Consumer Insurance' }
  ];

  const investors = ['Amazon', 'Accel Partners', 'General Atlantic', 'Munich Re', 'Lightspeed'];

  return (
    <section className="bg-slate-50/90 py-16 sm:py-20 border-b border-gray-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold mb-4 border border-amber-200">
              <Award className="w-3.5 h-3.5 text-amber-600" />
              <span>In the spotlight</span>
            </div>
            <h3 className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight leading-[1.1]">
              Recognised by India's leading publications
            </h3>
            <p className="text-sm sm:text-base text-gray-500 mt-3 font-medium max-w-md">
              Awards and coverage that reflect how we build: simple, fast and fair for customers.
            </p>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {partners.map((item) => (
              <div key={item.name} className="bg-white rounded-3xl p-6 border border-gray-200/80 hover:shadow-lg transition">
                <Award className="w-6 h-6 text-amber-500" />
                <div className="mt-4 text-lg font-black text-gray-900 tracking-tight">{item.name}</div>
                <div className="text-sm text-gray-500 font-medium mt-1">{item.award}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 rounded-2xl bg-white border border-gray-200 px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs font-bold text-gray-500 uppercase tracking-widest">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>Backed by global investors</span>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-2">
            {investors.map((inv) => (
              <span key={inv} className="px-4 py-1.5 rounded-full bg-gray-50 border border-gray-200 text-sm font-bold text-gray-700">
                {inv}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
