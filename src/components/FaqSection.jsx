import React, { useState } from 'react';
import { Plus, Minus, HelpCircle, PhoneCall, MessageSquare } from 'lucide-react';
import { CONTACT } from '../utils/contact';

export default function FaqSection() {
  const [openIdx, setOpenIdx] = useState(0);

  const faqs = [
    {
      q: 'Why are direct insurance prices lower?',
      a: 'We work fully online, with no agent commissions or branch costs. Those savings go back to you as lower premiums and faster payouts.'
    },
    {
      q: 'Can I transfer my No Claim Bonus (NCB)?',
      a: 'Yes. You can carry over up to 50% NCB from your previous insurer at renewal. Just enter your NCB percentage while getting the quote and we apply it without paperwork.'
    },
    {
      q: 'How does the 7-minute claim work?',
      a: 'For minor damage like dents, scratches or a cracked mirror, upload 2-3 photos in the app. Our AI reviews the damage right away and the amount is paid to your bank account by IMPS or UPI.'
    },
    {
      q: 'Is the digital policy valid with the Traffic Police and RTO?',
      a: 'Your policy is issued digitally and can be shown on your phone or stored in DigiLocker. We recommend keeping a copy of the policy document with you.'
    },
    {
      q: 'How does cashless hospitalisation work?',
      a: 'Show your digital health card or policy number at the insurance desk of any of 14,300+ network hospitals. Pre-authorisation is cleared within 60 minutes, with no deductions on approved items.'
    },
    {
      q: 'Do you offer free doorstep pick-up for repairs?',
      a: 'Yes. For comprehensive car claims we collect the car from your home or office, repair it at a cashless garage and deliver it back with a repair warranty.'
    }
  ];

  return (
    <section className="bg-white py-16 sm:py-20 border-b border-gray-200/60">
      <div className="w-full px-[4%]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

          {/* Left: heading + help card */}
          <div className="lg:col-span-5 lg:sticky lg:top-24">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-indigo-50 text-indigo-700 text-xs font-bold mb-4 border border-indigo-100">
              <HelpCircle className="w-3.5 h-3.5 text-indigo-600" />
              <span>FAQs</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 tracking-tight leading-[1.1]">
              Questions? <span className="text-[#6332ec]">Answered.</span>
            </h2>
            <p className="text-sm sm:text-base text-gray-500 mt-3 font-medium max-w-md">
              Quick answers on policies, claims and coverage. Need more? Our team is a call away.
            </p>

            <div className="mt-8 rounded-3xl bg-gradient-to-br from-indigo-950 via-slate-900 to-slate-950 text-white p-6">
              <h4 className="text-lg font-extrabold">Talk to a real person</h4>
              <p className="text-xs text-slate-400 mt-1">Advisors and claims specialists, available 24x7.</p>
              <div className="mt-5 flex flex-col sm:flex-row gap-3">
                <a
                  href={CONTACT.phoneHref}
                  className="flex-1 px-4 py-3 rounded-xl bg-white text-gray-900 text-xs font-bold hover:bg-gray-100 transition flex items-center justify-center gap-2"
                >
                  <PhoneCall className="w-4 h-4 text-indigo-600" /> Call {CONTACT.phoneDisplay}
                </a>
                <a
                  href={CONTACT.whatsappHref}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 px-4 py-3 rounded-xl bg-emerald-600 text-white text-xs font-bold hover:bg-emerald-700 transition flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-4 h-4" /> WhatsApp us
                </a>
              </div>
            </div>
          </div>

          {/* Right: accordion */}
          <div className="lg:col-span-7 space-y-3">
            {faqs.map((faq, idx) => {
              const isOpen = openIdx === idx;
              return (
                <div
                  key={faq.q}
                  className={`rounded-2xl border transition ${isOpen ? 'border-indigo-200 bg-indigo-50/40' : 'border-gray-200 bg-white'}`}
                >
                  <button
                    onClick={() => setOpenIdx(isOpen ? null : idx)}
                    className="w-full px-6 py-5 flex items-center justify-between gap-4 text-left text-sm sm:text-base font-bold text-gray-900"
                  >
                    <span>{faq.q}</span>
                    <span className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${isOpen ? 'bg-[#6332ec] text-white' : 'bg-gray-100 text-gray-500'}`}>
                      {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                    </span>
                  </button>
                  {isOpen && (
                    <p className="px-6 pb-6 text-sm text-gray-600 leading-relaxed animate-in fade-in duration-200">
                      {faq.a}
                    </p>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
