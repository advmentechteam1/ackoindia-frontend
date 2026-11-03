import React, { useState, useEffect } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight, Check } from 'lucide-react';
import { useInsuranceContext } from '../context/InsuranceContext';

import sierraImg from '../assets/tata-sierra-yellow.png';
import seltosImg from '../assets/blue-suv-showroom.png';
import cretaImg from '../assets/black-suv-showroom.png';
import scooterImg from '../assets/electric-scooter.png';
import heartImg from '../assets/health-heart.png';
import familyImg from '../assets/family-life.png';
import globeImg from '../assets/travel-globe.png';
import airpassImg from '../assets/acko-airpass.png';

const slides = [
  {
    id: 'sierra', product: 'car', label: 'Car insurance', title: 'Drive happy with zero-hassle car insurance',
    desc: 'Simple prices, 7-minute claims and free doorstep pick-up for your Tata Sierra.',
    points: ['Starting at ₹2,094*', 'Cashless at 7,200+ garages'],
    img: sierraImg, bg: 'from-amber-50 via-white to-orange-50', accent: 'bg-amber-300/40', imgClass: ''
  },
  {
    id: 'seltos', product: 'car', label: 'Car insurance', title: 'Protect your SUV from bumper to bumper',
    desc: 'Zero depreciation and engine cover add-ons for your Kia Seltos, in a single tap.',
    points: ['Up to 20% off with add-on bundle', 'Instant policy on WhatsApp'],
    img: seltosImg, bg: 'from-sky-50 via-white to-blue-50', accent: 'bg-sky-300/40', imgClass: ''
  },
  {
    id: 'creta', product: 'car', label: 'Car insurance', title: 'Renew your Creta in 60 seconds',
    desc: 'Carry over your No Claim Bonus and skip the paperwork completely.',
    points: ['Transfer up to 50% NCB', '24x7 roadside assistance'],
    img: cretaImg, bg: 'from-slate-100 via-white to-gray-100', accent: 'bg-slate-400/30', imgClass: ''
  },
  {
    id: 'bike', product: 'bike', label: 'Bike insurance', title: 'Insure your bike or scooter in 1 minute',
    desc: 'Comprehensive and third-party plans for petrol and electric two-wheelers.',
    points: ['Starting at ₹457*', 'EV-ready cover'],
    img: scooterImg, bg: 'from-emerald-50 via-white to-teal-50', accent: 'bg-emerald-300/40', imgClass: ''
  },
  {
    id: 'health', product: 'health', label: 'Health insurance', title: '100% hospital bill payments, no deductions',
    desc: 'From syringes to surgeries, we cover it all with cashless care at 14,300+ hospitals.',
    points: ['From ₹657/month', 'Pre-auth cleared in 60 mins'],
    img: heartImg, bg: 'from-rose-50 via-white to-pink-50', accent: 'bg-rose-300/40', imgClass: ''
  },
  {
    id: 'life', product: 'life', label: 'Term life insurance', title: 'Secure your family’s tomorrow, today',
    desc: 'Cover from ₹25 L up to ₹100 Cr with a hassle-free tele-medical check.',
    points: ['Pure life cover', 'Pay monthly or yearly'],
    img: familyImg, bg: 'from-indigo-50 via-white to-violet-50', accent: 'bg-indigo-300/40', imgClass: ''
  },
  {
    id: 'travel', product: 'travel', label: 'Travel insurance', title: 'Travel the world with a safety net',
    desc: 'Emergency medical cover in 150+ countries and instant visa-ready documents.',
    points: ['Starting at ₹225/trip', 'Cashless in 190+ countries'],
    img: globeImg, bg: 'from-blue-50 via-white to-cyan-50', accent: 'bg-cyan-300/40', imgClass: ''
  },
  {
    id: 'airpass', product: 'travel', label: 'ACKOIndia AirPass', title: 'Get paid when your flight is delayed',
    desc: 'AirPass pays you back for delayed, cancelled and missed domestic flights.',
    points: ['Instant payout', 'Unlimited flights for a year'],
    img: airpassImg, bg: 'from-violet-50 via-white to-fuchsia-50', accent: 'bg-violet-300/40', imgClass: ''
  }
];

const INTERVAL = 4000;

export default function HeroBanner() {
  const { openQuoteForProduct } = useInsuranceContext();
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return undefined;
    const t = setInterval(() => setActive((i) => (i + 1) % slides.length), INTERVAL);
    return () => clearInterval(t);
  }, [paused]);

  const slide = slides[active];
  const prev = () => setActive((i) => (i - 1 + slides.length) % slides.length);
  const next = () => setActive((i) => (i + 1) % slides.length);

  return (
    <section
      className="relative -mx-[4.348%] overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className={`relative bg-gradient-to-br ${slide.bg} transition-colors duration-700`}>
        <div className={`hero-drift absolute -right-32 top-1/2 w-[640px] h-[640px] rounded-full blur-3xl pointer-events-none transition-colors duration-700 ${slide.accent}`}></div>
        <div className="absolute -left-24 -bottom-24 w-72 h-72 rounded-full bg-white/70 blur-2xl pointer-events-none"></div>

        <div className="relative w-full px-[4%] pt-6 sm:pt-14 pb-20 sm:pb-28">
          <div key={slide.id} className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8 items-center lg:min-h-[460px]">

            {/* Image first on mobile, right on desktop */}
            <div className="lg:col-span-6 lg:order-2 flex items-center justify-center">
              <div className="hero-img-in w-full flex justify-center"><img src={slide.img} alt={slide.label} className="hero-float w-full max-w-[640px] max-h-[200px] sm:max-h-[320px] lg:max-h-[420px] object-contain drop-shadow-2xl" /></div>
            </div>

            <div className="lg:col-span-6 lg:order-1">
              <span className="hero-up inline-block text-xs font-extrabold uppercase tracking-widest text-[#6332ec] bg-white/90 border border-indigo-100 px-3.5 py-1.5 rounded-full">
                {slide.label}
              </span>
              <h1 style={{ animationDelay: '120ms' }} className="hero-up mt-5 text-3xl sm:text-5xl xl:text-6xl font-black text-gray-900 tracking-tight leading-[1.05]">
                {slide.title}
              </h1>
              <p style={{ animationDelay: '240ms' }} className="hero-up mt-3 sm:mt-5 text-sm sm:text-lg text-gray-600 font-medium max-w-xl">{slide.desc}</p>

              <ul style={{ animationDelay: '360ms' }} className="hero-up mt-4 sm:mt-6 flex flex-wrap gap-2">
                {slide.points.map((p) => (
                  <li key={p} className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white/90 border border-gray-200 text-sm font-bold text-gray-800">
                    <Check className="w-4 h-4 text-emerald-600 stroke-[3]" /> {p}
                  </li>
                ))}
              </ul>

              <button
                onClick={() => openQuoteForProduct({ id: slide.product, title: slide.label })}
                style={{ animationDelay: '480ms' }}
                className="hero-up mt-5 sm:mt-8 px-7 sm:px-8 py-3.5 sm:py-4 rounded-2xl bg-gray-950 hover:bg-[#6332ec] text-white text-sm font-extrabold shadow-xl transition active:scale-95 inline-flex items-center gap-2"
              >
                Get a quote <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom bar: progress tabs + arrows */}
        <div className="absolute bottom-0 inset-x-0 border-t border-black/5 bg-white/60 backdrop-blur">
          <div className="w-full px-[4%] py-3 flex items-center justify-between gap-4">
            {/* Mobile: compact dots */}
            <div className="flex sm:hidden items-center gap-1.5">
              {slides.map((s, i) => (
                <button
                  key={s.id}
                  onClick={() => setActive(i)}
                  aria-label={`Show ${s.label} ${i + 1}`}
                  className={`h-2 rounded-full transition-all ${i === active ? 'w-6 bg-[#6332ec]' : 'w-2 bg-gray-300'}`}
                />
              ))}
            </div>

            {/* Tablet/desktop: labelled tabs */}
            <div className="hidden sm:flex flex-1 min-w-0 items-center gap-2 overflow-x-auto no-scrollbar">
              {slides.map((s, i) => (
                <button
                  key={s.id}
                  onClick={() => setActive(i)}
                  className={`relative shrink-0 px-3.5 py-1.5 rounded-full text-xs font-bold overflow-hidden transition ${
                    i === active ? 'bg-gray-950 text-white' : 'bg-white text-gray-600 border border-gray-200 hover:border-gray-400'
                  }`}
                >
                  {s.id === 'airpass' ? 'AirPass' : s.id.charAt(0).toUpperCase() + s.id.slice(1)}
                  {i === active && !paused && (
                    <span key={`${active}-run`} className="absolute left-0 bottom-0 h-0.5 w-full bg-[#a78bfa] origin-left" style={{ animation: `heroFill ${INTERVAL}ms linear forwards` }}></span>
                  )}
                </button>
              ))}
            </div>
            <div className="flex items-center gap-2 shrink-0">
              <button onClick={prev} aria-label="Previous slide" className="w-9 h-9 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-700 hover:bg-gray-100 transition">
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button onClick={next} aria-label="Next slide" className="w-9 h-9 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-700 hover:bg-gray-100 transition">
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <style>{`@keyframes heroFill { from { transform: scaleX(0); } to { transform: scaleX(1); } }`}</style>
    </section>
  );
}
