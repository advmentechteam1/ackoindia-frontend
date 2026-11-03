import React, { useState, useEffect } from 'react';
import { ArrowRight, Check } from 'lucide-react';
import { useInsuranceContext } from '../context/InsuranceContext';

// Authentic insurance visual assets
import sierraImg from '../assets/tata-sierra-yellow.png';
import seltosImg from '../assets/blue-suv-showroom.png';
import cretaImg from '../assets/black-suv-showroom.png';
import healthHeartImg from '../assets/health-heart.png';
import familyLifeImg from '../assets/family-life.png';
import electricScooterImg from '../assets/electric-scooter.png';
import travelGlobeImg from '../assets/travel-globe.png';
import ackoAirpassImg from '../assets/acko-airpass.png';

const heroCars = [
  { name: 'Tata Sierra', price: '₹2,094*', img: sierraImg },
  { name: 'Kia Seltos', price: '₹2,310*', img: seltosImg },
  { name: 'Hyundai Creta', price: '₹2,185*', img: cretaImg }
];

const cards = [
  {
    id: 'health', product: 'health', quoteTitle: 'Health insurance', title: 'Health insurance',
    desc: <><span className="text-[#6332ec] font-semibold">100% hospital bill payments</span>, from syringes to surgeries. No deductions.</>,
    pill: 'From ₹657/month', img: healthHeartImg, imgSize: 'w-28 h-28', bg: 'bg-rose-50/70 border-rose-100'
  },
  {
    id: 'life', product: 'life', quoteTitle: 'Term life insurance', title: 'Term life insurance',
    desc: <>Coverage from <span className="font-semibold text-gray-700">₹25 L to ₹100 Cr</span></>,
    pill: 'Pure life cover', img: familyLifeImg, imgSize: 'w-24 h-40 -mb-3', bg: 'bg-sky-50/70 border-sky-100'
  },
  {
    id: 'bike', product: 'bike', quoteTitle: 'Bike insurance', title: 'Bike insurance',
    desc: <><span className="text-[#6332ec] font-semibold">Insure your bike</span> or scooter in just 1 minute</>,
    pill: 'Starting at just ₹457*', img: electricScooterImg, imgSize: 'w-36 h-28', bg: 'bg-emerald-50/70 border-emerald-100'
  },
  {
    id: 'travel', product: 'travel', quoteTitle: 'Travel insurance', title: 'Travel insurance',
    desc: <><span className="text-[#6332ec] font-semibold">Emergency medical coverage</span> in 150+ countries</>,
    img: travelGlobeImg, imgSize: 'w-28 h-28', bg: 'bg-blue-50/70 border-blue-100'
  },
  {
    id: 'airpass', product: 'travel', quoteTitle: 'ACKOIndia AirPass', title: 'Flying domestic?',
    desc: <><span className="text-[#6332ec] font-semibold">ACKOIndia AirPass</span> pays you back for delayed, cancelled and missed flights</>,
    img: ackoAirpassImg, imgSize: 'w-40 h-28', bg: 'bg-violet-50/70 border-violet-100 sm:col-span-2'
  }
];

export default function HeroSection() {
  const { openQuoteForProduct } = useInsuranceContext();
  const [carIdx, setCarIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setCarIdx((i) => (i + 1) % heroCars.length), 3500);
    return () => clearInterval(t);
  }, []);

  const heroCar = heroCars[carIdx];

  return (
    <section className="bg-[#f8f9fa] pt-6 pb-12 border-b border-gray-200/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Header: Headline on Left, Laurel Badges on Right */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-[40px] font-extrabold text-[#111827] tracking-tight leading-[1.2]">
              Have an award-winning <br />
              insurer by your side
            </h2>
          </div>

          {/* Laurel Wreath Badges */}
          <div className="flex items-center gap-6 sm:gap-8 shrink-0">
            {/* Wreath 1 */}
            <div className="flex items-center gap-2">
              <svg className="w-5 h-9 text-gray-400 fill-current opacity-80" viewBox="0 0 24 40">
                <path d="M12 2C8 7 4 15 4 24c0 6 3 11 8 14-2-4-3-9-3-14 0-8 3-15 3-24z"/>
              </svg>
              <div className="text-center">
                <span className="block text-xs font-bold text-gray-800 leading-tight">
                  India's #1*
                </span>
                <span className="block text-[11px] text-gray-500 font-medium leading-tight">
                  insurance app
                </span>
              </div>
              <svg className="w-5 h-9 text-gray-400 fill-current opacity-80 -scale-x-100" viewBox="0 0 24 40">
                <path d="M12 2C8 7 4 15 4 24c0 6 3 11 8 14-2-4-3-9-3-14 0-8 3-15 3-24z"/>
              </svg>
            </div>

            {/* Wreath 2 */}
            <div className="flex items-center gap-2">
              <svg className="w-5 h-9 text-gray-400 fill-current opacity-80" viewBox="0 0 24 40">
                <path d="M12 2C8 7 4 15 4 24c0 6 3 11 8 14-2-4-3-9-3-14 0-8 3-15 3-24z"/>
              </svg>
              <div className="text-center">
                <span className="block text-xs font-bold text-gray-800 leading-tight">
                  Best direct
                </span>
                <span className="block text-[11px] text-gray-500 font-medium leading-tight">
                  insurer 2025*
                </span>
              </div>
              <svg className="w-5 h-9 text-gray-400 fill-current opacity-80 -scale-x-100" viewBox="0 0 24 40">
                <path d="M12 2C8 7 4 15 4 24c0 6 3 11 8 14-2-4-3-9-3-14 0-8 3-15 3-24z"/>
              </svg>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">

          {/* Car insurance: tall feature card */}
          <div
            onClick={() => openQuoteForProduct({ id: 'car', title: 'Car insurance' })}
            className="lg:col-span-5 rounded-[28px] p-7 bg-gradient-to-br from-indigo-50 via-white to-violet-50 border border-indigo-100/70 hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col group relative overflow-hidden min-h-[440px]"
          >
            <div className="relative z-10 max-w-[280px]">
              <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-indigo-600 transition-colors">Car insurance</h3>
              <p className="text-sm text-gray-500 mt-1.5 leading-relaxed">
                <span className="text-[#6332ec] font-semibold">Simple prices. Super fast claims.</span> That's our promise.
              </p>
              <div className="mt-4 inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white text-[#6332ec] text-xs font-bold shadow-xs border border-indigo-100">
                <Check className="w-3.5 h-3.5 stroke-[3]" />
                <span>{heroCar.name} from {heroCar.price}</span>
              </div>
            </div>

            <div className="absolute left-1/2 bottom-16 -translate-x-1/2 w-[92%] flex justify-center pointer-events-none">
              <div className="absolute bottom-0 w-3/4 h-6 rounded-[100%] bg-indigo-900/15 blur-xl"></div>
              <img key={heroCar.name} src={heroCar.img} alt={heroCar.name} className="hero-img-in relative w-full max-w-[400px] object-contain" />
            </div>

            <div className="relative z-10 mt-auto flex items-center justify-between pt-4">
              <div className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-600 group-hover:bg-gray-950 group-hover:border-gray-950 group-hover:text-white transition-all">
                <ArrowRight className="w-4 h-4" />
              </div>
              <span className="text-xs text-gray-500 font-semibold">Instant 0% paper policy</span>
            </div>
          </div>

          {/* Right area */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {cards.map((c, idx) => (
              <div
                key={c.id}
                onClick={() => openQuoteForProduct({ id: c.product, title: c.quoteTitle })}
                className={`rounded-[28px] p-6 border hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col group relative overflow-hidden min-h-[210px] ${c.bg}`}
              >
                <div className="relative z-10 max-w-[62%]">
                  <h3 className="text-lg font-extrabold text-gray-900 group-hover:text-indigo-600 transition-colors leading-snug">{c.title}</h3>
                  <p className="text-xs text-gray-500 mt-1.5 leading-relaxed">{c.desc}</p>
                  {c.pill && (
                    <div className="mt-3 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white text-[#6332ec] text-[11px] font-bold border border-indigo-100">
                      <Check className="w-3 h-3 stroke-[3]" />
                      <span>{c.pill}</span>
                    </div>
                  )}
                </div>
                <img src={c.img} alt={c.title} style={{ animationDelay: `${idx * 400}ms` }} className={`hero-float absolute right-3 bottom-3 object-contain pointer-events-none group-hover:scale-105 transition-transform duration-500 ${c.imgSize}`} />
                <div className="relative z-10 mt-auto pt-4">
                  <div className="w-9 h-9 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-600 group-hover:bg-gray-950 group-hover:border-gray-950 group-hover:text-white transition-all">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Small Bottom Disclaimer Text */}
        <div className="mt-6 text-center">
          <span className="text-[11px] text-gray-400 font-medium">
            UID: 6484 | ARN: 1.0110 | T&C apply
          </span>
        </div>

      </div>
    </section>
  );
}
