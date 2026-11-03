import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote, Camera, CheckCheck, ShieldCheck } from 'lucide-react';
import { useInsuranceContext } from '../context/InsuranceContext';

export default function ClaimsExperience() {
  const { showToast } = useInsuranceContext();
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = [
    {
      text: "No hidden charges. The price you see in your quote is the price you pay, with every inclusion and exclusion explained in plain language.",
      initial: "1",
      author: "Clear pricing",
      role: "Our promise"
    },
    {
      text: "File a claim from your phone with a few photos. We keep you updated at every step, so you never have to chase anyone.",
      initial: "2",
      author: "Simple claims",
      role: "Our promise"
    },
    {
      text: "Real people are available to help you, every day. Call, message or write to us and we will get back to you quickly.",
      initial: "3",
      author: "Human support",
      role: "Our promise"
    }
  ];

  const current = testimonials[activeTestimonial];

  const handlePrev = () => {
    setActiveTestimonial((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="bg-[#f8f9fa] py-16 border-b border-gray-200/50">
      <div className="w-full px-[4%]">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">

          {/* LEFT: Claims shouldn't be hard + larger phone */}
          <div className="lg:col-span-6 rounded-[28px] p-8 border border-indigo-100/70 bg-gradient-to-br from-indigo-50 via-white to-violet-50 flex flex-col items-center">
            <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#6332ec] bg-white border border-indigo-100 px-3 py-1 rounded-full">
              7-minute claims
            </span>
            <h2 className="mt-3 text-2xl sm:text-4xl font-extrabold text-gray-900 tracking-tight text-center">
              Claims shouldn't be hard
            </h2>

            {/* Phone */}
            <div className="mt-8 w-full max-w-[340px] rounded-[48px] bg-[#221c38] p-3 shadow-2xl border-4 border-[#332b50] relative">
              <div className="absolute top-5 left-1/2 -translate-x-1/2 w-24 h-5 bg-black rounded-full z-20"></div>

              <div className="bg-white rounded-[38px] overflow-hidden h-[480px] flex flex-col border border-gray-100">
                <div className="pt-10 pb-3 px-5 bg-gradient-to-b from-[#f5efff] to-white border-b border-gray-100 flex items-center justify-between">
                  <h4 className="text-sm font-extrabold text-gray-900">File a claim</h4>
                  <span className="flex items-center gap-1 text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> Demo
                  </span>
                </div>

                <div className="flex-1 p-4 space-y-3 overflow-hidden">
                  <div className="max-w-[80%] bg-gray-100 text-gray-800 text-xs font-semibold px-3.5 py-2.5 rounded-2xl rounded-tl-sm">
                    Tell us what happened
                  </div>
                  <div className="ml-auto max-w-[80%] bg-[#6332ec] text-white text-xs font-semibold px-3.5 py-2.5 rounded-2xl rounded-tr-sm">
                    My car got damaged in an accident
                  </div>
                  <div className="max-w-[80%] bg-gray-100 text-gray-800 text-xs font-semibold px-3.5 py-2.5 rounded-2xl rounded-tl-sm">
                    Upload photos of your car
                  </div>
                  <div className="ml-auto w-36 rounded-2xl rounded-tr-sm bg-indigo-50 border border-indigo-100 p-2.5">
                    <div className="h-16 rounded-xl bg-gradient-to-br from-indigo-200 to-violet-200 flex items-center justify-center">
                      <Camera className="w-5 h-5 text-indigo-600" />
                    </div>
                    <div className="mt-1.5 flex items-center gap-1 text-[10px] font-bold text-indigo-700">
                      <CheckCheck className="w-3 h-3" /> 3 photos sent
                    </div>
                  </div>
                  <div className="max-w-[85%] bg-emerald-50 border border-emerald-100 text-emerald-900 text-xs font-semibold px-3.5 py-2.5 rounded-2xl rounded-tl-sm">
                    <span className="flex items-center gap-1.5"><ShieldCheck className="w-3.5 h-3.5" /> Claim approved in 7 mins</span>
                  </div>
                </div>

                <div className="p-3 border-t border-gray-100 bg-gray-50/70">
                  <button
                    onClick={() => showToast('Demo only: photo upload is not available.')}
                    className="w-full py-2.5 px-3 rounded-xl bg-white border border-gray-200 text-gray-400 text-xs text-left font-medium hover:border-gray-400 transition"
                  >
                    Tap to upload photo...
                  </button>
                </div>
              </div>
            </div>

            <span className="mt-5 text-[11px] text-gray-500 font-semibold">
              Illustrative demo • No real claim is filed
            </span>
          </div>

          {/* RIGHT: Reviews */}
          <div className="lg:col-span-6 rounded-[28px] p-8 border border-gray-100 bg-white flex flex-col">
            <div className="flex items-start justify-between gap-4">
              <h2 className="text-2xl sm:text-4xl font-extrabold text-gray-900 tracking-tight leading-tight">
                Promises made.<br />Promises kept.
              </h2>
            </div>

            {/* Quote card */}
            <div className="mt-8 flex-1 rounded-3xl bg-[#f8f9fa] border border-gray-100 p-7 relative flex flex-col justify-between">
              <Quote className="absolute top-5 right-6 w-12 h-12 text-indigo-100 fill-indigo-100" />
              <div>
                <p key={activeTestimonial} className="mt-4 text-base sm:text-lg text-gray-800 font-medium leading-relaxed relative animate-in fade-in duration-300">
                  “{current.text}”
                </p>
              </div>

              <div className="mt-6 flex items-center gap-3">
                <div className="w-11 h-11 rounded-full bg-[#6332ec] text-white font-bold flex items-center justify-center text-sm">
                  {current.initial}
                </div>
                <div>
                  <h5 className="text-sm font-extrabold text-gray-900 leading-tight">{current.author}</h5>
                  <span className="text-xs text-gray-500 font-medium">{current.role}</span>
                </div>
              </div>
            </div>

            {/* Controls */}
            <div className="mt-6 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <button
                  onClick={handlePrev}
                  className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-gray-100 transition"
                  aria-label="Previous review"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={handleNext}
                  className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-gray-100 transition"
                  aria-label="Next review"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
                <div className="flex items-center gap-1.5 ml-2">
                  {testimonials.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveTestimonial(i)}
                      aria-label={`Review ${i + 1}`}
                      className={`h-1.5 rounded-full transition-all ${i === activeTestimonial ? 'w-6 bg-[#6332ec]' : 'w-1.5 bg-gray-300'}`}
                    />
                  ))}
                </div>
              </div>

              <button
                onClick={() => showToast('Customer stories are coming soon.')}
                className="px-6 py-2.5 rounded-xl bg-gray-950 hover:bg-indigo-600 text-white text-xs font-bold transition"
              >
                View more
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
