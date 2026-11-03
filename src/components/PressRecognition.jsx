import React from 'react';
import { Sparkles, ShieldCheck, Eye, Zap, HeartHandshake } from 'lucide-react';

const principles = [
  { icon: Eye, title: 'Transparent by default', desc: 'Prices, inclusions and exclusions are shown upfront, in plain language.' },
  { icon: Zap, title: 'Fast and digital', desc: 'Get a quote, buy and raise claims online without paper forms.' },
  { icon: HeartHandshake, title: 'People who help', desc: 'A support team you can call or message every day of the week.' },
  { icon: ShieldCheck, title: 'Your data, your choice', desc: 'We only ask for what is needed to prepare your quote.' }
];

export default function PressRecognition() {
  return (
    <section className="bg-slate-50/90 py-16 sm:py-20 border-b border-gray-200/60">
      <div className="w-full px-[4%]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 text-xs font-bold mb-4 border border-indigo-100">
              <Sparkles className="w-3.5 h-3.5" />
              <span>How we work</span>
            </div>
            <h3 className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight leading-[1.1]">
              Built on four simple principles
            </h3>
            <p className="text-sm sm:text-base text-gray-500 mt-3 font-medium max-w-md">
              Insurance should be easy to understand, easy to buy and easy to claim.
            </p>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {principles.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-white rounded-3xl p-6 border border-gray-200/80 hover:shadow-lg transition">
                <span className="w-11 h-11 rounded-2xl bg-indigo-50 text-[#6332ec] flex items-center justify-center">
                  <Icon className="w-5 h-5" />
                </span>
                <div className="mt-4 text-lg font-black text-gray-900 tracking-tight">{title}</div>
                <div className="text-sm text-gray-500 font-medium mt-1 leading-relaxed">{desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
