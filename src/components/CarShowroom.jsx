import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, ShieldCheck, Zap, Sparkles, Check, Car } from 'lucide-react';
import { useInsuranceContext } from '../context/InsuranceContext';

// Studio isolated showroom assets
import tataSierraYellowImg from '../assets/tata-sierra-yellow.png';
import blueSuvImg from '../assets/blue-suv-showroom.png';
import blackSuvImg from '../assets/black-suv-showroom.png';

export default function CarShowroom() {
  const { showToast, openQuoteForProduct } = useInsuranceContext();
  const [activeCarIdx, setActiveCarIdx] = useState(0);

  const showroomCars = [
    {
      id: 'sierra',
      name: 'Tata Sierra EV',
      tag: 'Price starts from',
      offerPrice: '₹13.1 Lakhs',
      originalPrice: '₹13.3 Lakhs',
      savings: 'You save ₹21,695',
      delivery: 'Deliveries start in 10 days',
      specs: '450 km Electric Range • Panoramic Glass Roof',
      img: tataSierraYellowImg,
      accentGlow: 'from-amber-200/40 via-yellow-100/30 to-transparent'
    },
    {
      id: 'seltos',
      name: 'KIA Seltos Facelift',
      tag: 'Deliveries from 1 week',
      offerPrice: '₹12.5 Lakhs',
      originalPrice: '₹12.8 Lakhs',
      savings: 'You save ₹26,519',
      delivery: 'Direct dispatch from OEM yard',
      specs: '1.5L Turbo Petrol • ADAS Level 2 • Dual Screen',
      img: blueSuvImg,
      accentGlow: 'from-blue-200/40 via-sky-100/30 to-transparent'
    },
    {
      id: 'creta',
      name: 'Hyundai Creta Knight',
      tag: 'Immediate delivery',
      offerPrice: '₹10.9 Lakhs',
      originalPrice: '₹11.3 Lakhs',
      savings: 'You save ₹38,000',
      delivery: 'Ready in stock at brand hub',
      specs: 'All-Black Edition • Bose 8-Speaker Audio • Ventilated Seats',
      img: blackSuvImg,
      accentGlow: 'from-gray-300/40 via-slate-100/30 to-transparent'
    }
  ];

  const currentCar = showroomCars[activeCarIdx];
  const prevCar = showroomCars[(activeCarIdx - 1 + showroomCars.length) % showroomCars.length];
  const nextCar = showroomCars[(activeCarIdx + 1) % showroomCars.length];

  const handlePrev = () => {
    setActiveCarIdx((prev) => (prev === 0 ? showroomCars.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveCarIdx((prev) => (prev === showroomCars.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="bg-white py-14 sm:py-20 border-b border-gray-200/60 overflow-hidden w-full">
      <div className="w-full text-center">
        
        {/* ========================================================= */}
        {/* Header (Clean, bold, non-duplicated)                      */}
        {/* ========================================================= */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 mb-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 text-xs font-bold mb-3 border border-indigo-100/60">
            <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
            <span>Digital Car Showroom • Powered by ACKOIndia DRIVE</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-[#111827] tracking-tight">
            Save as much as ₹80,000 on top-selling cars
          </h2>
          <p className="text-xs sm:text-base text-gray-500 mt-2 font-medium">
            Explore, compare, and book your brand new car from our digital showroom
          </p>
        </div>

        {/* ========================================================= */}
        {/* FULL SCREEN / FULL WIDTH 3D STUDIO SHOWROOM STAGE         */}
        {/* ========================================================= */}
        <div className="relative w-full bg-white py-10 sm:py-16 overflow-hidden">
          
          {/* Interactive Cars Stage Row */}
          <div className="relative z-10 max-w-7xl mx-auto px-4 flex items-center justify-center gap-2 sm:gap-10">
            
            {/* Left Car (Clickable to switch!) */}
            <div 
              onClick={handlePrev}
              title="Click to view this car"
              className="hidden sm:flex w-36 sm:w-56 md:w-72 lg:w-80 h-28 sm:h-52 items-center justify-center opacity-90 hover:opacity-100 scale-90 sm:scale-95 transition-all duration-500 cursor-pointer group"
            >
              <img
                src={prevCar.img}
                alt={prevCar.name}
                className="w-full h-full object-contain  group-hover:scale-105 transition-transform"
              />
            </div>

            {/* Center Stage: Elevated Pedestal + Active Selected Car */}
            <div className="relative flex flex-col items-center justify-center shrink-0">
              
              {/* Dynamic Center Car with Smooth Transition */}
              <div 
                key={currentCar.id} 
                className="w-64 sm:w-[440px] md:w-[500px] h-44 sm:h-72 md:h-80 flex items-center justify-center relative z-10 animate-in fade-in zoom-in-95 duration-400"
              >
                <img
                  src={currentCar.img}
                  alt={currentCar.name}
                  className="w-full h-full object-contain  hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Soft floor shadow */}
              <div className="w-56 sm:w-[380px] md:w-[440px] h-4 sm:h-6 -mt-3 sm:-mt-5 rounded-[100%] bg-black/15 blur-xl z-0"></div>
            
            </div>

            {/* Right Car (Clickable to switch!) */}
            <div 
              onClick={handleNext}
              title="Click to view this car"
              className="hidden sm:flex w-36 sm:w-56 md:w-72 lg:w-80 h-28 sm:h-52 items-center justify-center opacity-90 hover:opacity-100 scale-90 sm:scale-95 transition-all duration-500 cursor-pointer group"
            >
              <img
                src={nextCar.img}
                alt={nextCar.name}
                className="w-full h-full object-contain  group-hover:scale-105 transition-transform"
              />
            </div>

          </div>

          {/* ========================================================= */}
          {/* Floating Action Pill Bar (Now fully reactive to arrows!) */}
          {/* ========================================================= */}
          <div className="mt-8 relative z-20 flex justify-center px-4">
            <div className="inline-flex items-center justify-between gap-3 sm:gap-6 bg-white px-5 sm:px-8 py-3 sm:py-4 rounded-3xl border border-gray-200 shadow-lg">
              
              {/* Left Arrow Button */}
              <button
                onClick={handlePrev}
                className="w-9 h-9 sm:w-11 sm:h-11 rounded-full border border-gray-300 hover:border-gray-900 bg-white flex items-center justify-center text-gray-800 hover:bg-gray-100 transition shadow-sm active:scale-90 shrink-0"
                aria-label="Previous car"
              >
                <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>

              {/* Car Name & Tag */}
              <div className="text-left px-2 sm:px-4 border-r border-gray-200">
                <h4 className="text-sm sm:text-lg font-black text-gray-900 leading-tight">
                  {currentCar.name}
                </h4>
                <span className="text-[10px] sm:text-xs text-gray-400 font-semibold block mt-0.5">
                  {currentCar.tag}
                </span>
              </div>

              {/* Pricing & Green Savings Badge */}
              <div className="text-left px-2 sm:px-4">
                <div className="flex items-baseline gap-1.5 sm:gap-2">
                  <span className="text-sm sm:text-xl font-black text-gray-900">
                    {currentCar.offerPrice}
                  </span>
                  <span className="text-xs sm:text-sm text-gray-400 line-through">
                    {currentCar.originalPrice}
                  </span>
                </div>
                <div className="mt-1 inline-block border border-emerald-500 text-emerald-800 bg-emerald-50 text-[10px] sm:text-xs font-black px-2.5 sm:px-3 py-0.5 rounded-full shadow-xs">
                  {currentCar.savings}
                </div>
              </div>

              {/* Right Arrow Button */}
              <button
                onClick={handleNext}
                className="w-9 h-9 sm:w-11 sm:h-11 rounded-full border border-gray-300 hover:border-gray-900 bg-white flex items-center justify-center text-gray-800 hover:bg-gray-100 transition shadow-sm active:scale-90 shrink-0"
                aria-label="Next car"
              >
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>

            </div>
          </div>

          {/* Quick Specs Pill under Pill Bar */}
          <div className="mt-4 flex flex-wrap items-center justify-center gap-4 text-xs font-semibold text-gray-500">
            <span className="flex items-center gap-1.5">
              <Check className="w-3.5 h-3.5 text-emerald-600 stroke-[3]" />
              {currentCar.delivery}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5">
              <Zap className="w-3.5 h-3.5 text-indigo-600" />
              {currentCar.specs}
            </span>
          </div>

        </div>

        {/* Action CTA */}
        <div className="mt-8">
          <button
            onClick={() => {
              openQuoteForProduct({
                id: 'car',
                title: `Pre-approved insurance & showroom booking for ${currentCar.name}`
              });
              showToast(`Booking interest recorded for ${currentCar.name}!`);
            }}
            className="px-8 sm:px-10 py-4 rounded-2xl bg-gray-950 hover:bg-indigo-600 text-white text-xs sm:text-sm font-extrabold shadow-lg transition-all active:scale-95"
          >
            Visit our digital showroom ➔
          </button>
        </div>

      </div>
    </section>
  );
}
