import React from 'react';
import { IndianRupee, Car, FileText, Ambulance, FileBadge, Search, ChevronRight } from 'lucide-react';
import { useInsuranceContext } from '../context/InsuranceContext';

const vehicleTools = [
  { icon: IndianRupee, title: 'Traffic fines', desc: 'Check and pay challans in the app', toast: 'Scanning traffic police e-challan database...' },
  { icon: Car, title: 'FASTag alerts', desc: 'Get a nudge before your balance runs low', toast: 'FASTag alert: Auto-sync with NHAI toll active' },
  { icon: FileText, title: 'PUCC reminders', desc: 'Never miss a pollution certificate expiry', toast: 'PUCC Reminder: Registration alert set for your city' }
];

const healthTools = [
  { icon: Ambulance, title: 'Emergency help', desc: 'Ambulance and hospital SOS with GPS', toast: 'GPS Ambulance & Hospital SOS ready', tone: 'rose' },
  { icon: FileBadge, title: 'ABHA health card', desc: 'Create your digital health ID in minutes', toast: 'National Digital Health Mission: ABHA registration simulator', tone: 'indigo' },
  { icon: Search, title: 'Analyse my policy', desc: 'Spot room-rent limits and hidden clauses', toast: 'AI Scan: Analyzing deductible clauses and room rent sub-limits...', tone: 'pink' }
];

function ToolList({ title, subtitle, items, accent, footer, showToast }) {
  return (
    <div className="lg:col-span-4 rounded-[28px] bg-gray-50/80 border border-gray-100 p-6 sm:p-7 flex flex-col">
      <span className={`text-[11px] font-extrabold uppercase tracking-widest ${accent}`}>{subtitle}</span>
      <h3 className="text-xl font-extrabold text-gray-900 mt-1 leading-snug">{title}</h3>

      <div className="mt-5 space-y-3 flex-1">
        {items.map(({ icon: Icon, title: t, desc, toast }) => (
          <button
            key={t}
            onClick={() => showToast(toast)}
            className="w-full text-left rounded-2xl bg-white border border-gray-100 hover:border-indigo-300 hover:shadow-md transition p-4 flex items-center gap-3 group"
          >
            <span className="w-10 h-10 rounded-xl bg-gray-100 text-gray-700 flex items-center justify-center shrink-0 group-hover:bg-indigo-600 group-hover:text-white transition">
              <Icon className="w-4 h-4" />
            </span>
            <span className="flex-1 min-w-0">
              <span className="block text-sm font-bold text-gray-900">{t}</span>
              <span className="block text-xs text-gray-500 mt-0.5">{desc}</span>
            </span>
            <ChevronRight className="w-4 h-4 text-gray-300 group-hover:text-indigo-600 transition" />
          </button>
        ))}
      </div>

      <p className="mt-5 text-[11px] text-gray-400 font-medium text-center">{footer}</p>
    </div>
  );
}

export default function AppFeatures() {
  const { showToast } = useInsuranceContext();

  return (
    <section className="bg-white py-16 sm:py-20 border-b border-gray-200/60 overflow-hidden">
      <div className="w-full px-[4%]">

        <div className="max-w-2xl mb-10">
          <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#6332ec]">Free with every policy</span>
          <h2 className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight mt-2 leading-[1.1]">
            Handy tools that go beyond insurance
          </h2>
          <p className="text-sm sm:text-base text-gray-500 mt-3 font-medium">
            Track your vehicle, check your cover and be ready for emergencies, all from one app.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">

          <ToolList
            title="Vehicle toolkit"
            subtitle="For your car & bike"
            items={vehicleTools}
            accent="text-emerald-600"
            footer="Syncs automatically with Parivahan Sewa"
            showToast={showToast}
          />

          {/* Center: policy analyser phone */}
          <div className="lg:col-span-4 flex justify-center">
            <div className="w-full max-w-[320px] bg-gray-950 rounded-[48px] p-3.5 shadow-2xl ring-1 ring-black/10">
              <div className="mx-auto w-24 h-4 bg-black rounded-full mb-2"></div>
              <div className="bg-white rounded-[40px] p-5 text-left border border-gray-100 min-h-[500px] flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between text-xs font-bold text-gray-800 pb-2 border-b border-gray-100">
                    <span>23:10</span>
                    <span>5G</span>
                  </div>

                  <div className="mt-4 text-center">
                    <h4 className="text-base font-extrabold text-gray-900">Policy analyser</h4>
                    <p className="text-[11px] text-gray-500 mt-1 leading-snug px-3">
                      Based on our analysis, this is where your coverage stands.
                    </p>
                  </div>

                  <div className="mt-6 flex justify-center">
                    <div className="relative w-44 h-44 flex items-center justify-center">
                      <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                        <circle cx="50" cy="50" r="40" stroke="#f3f4f6" strokeWidth="8" fill="none" />
                        <circle cx="50" cy="50" r="40" stroke="#10b981" strokeWidth="8" fill="none" strokeDasharray="251.2" strokeDashoffset="37.68" strokeLinecap="round" />
                      </svg>
                      <div className="absolute flex flex-col items-center text-center">
                        <span className="text-3xl font-black text-gray-900 leading-none">85/100</span>
                        <span className="mt-1.5 px-3 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-extrabold">Excellent</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-100 flex items-center justify-between text-[11px] text-gray-600 font-semibold px-2">
                  {[
                    ['At risk', '0-50', 'bg-rose-500'],
                    ['Can be better', '51-80', 'bg-amber-400'],
                    ['Excellent', '81-100', 'bg-emerald-500']
                  ].map(([l, r, c]) => (
                    <div key={l} className="flex flex-col items-center">
                      <span className="text-[10px] text-gray-400">{l}</span>
                      <span className="flex items-center gap-1 mt-0.5">
                        <span className={`w-2 h-2 rounded-full ${c}`}></span>
                        {r}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <ToolList
            title="Health toolkit"
            subtitle="For you & your family"
            items={healthTools}
            accent="text-rose-600"
            footer="100% cashless at 14,300+ hospitals"
            showToast={showToast}
          />

        </div>
      </div>
    </section>
  );
}
