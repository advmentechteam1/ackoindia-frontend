import React, { useState } from 'react';
import { 
  ShieldCheck, 
  ArrowUp
} from 'lucide-react';

import Logo from './Logo';

export default function Footer() {
  const [activeTab, setOpenAccordion] = useState(0);

  const accordionSections = [
    {
      title: 'Auto products and services',
      items: [
        'Comprehensive Car Insurance',
        'Third Party Car Insurance',
        'Commercial Vehicle Insurance',
        'EV 4-Wheeler Cover',
        'Comprehensive Two-Wheeler Insurance',
        'Own Damage Bike Insurance',
        'FASTag Recharge & Challan Pay'
      ]
    },
    {
      title: 'Health, life, and other services',
      items: [
        'ACKOIndia Platinum Health Plan',
        'Super Top-up Health Insurance',
        'Arogya Sanjeevani Policy',
        'Term Life Insurance Plan',
        'ABHA Health Card Registration',
        'Corporate Health Insurance'
      ]
    },
    {
      title: 'Travel Insurance',
      items: [
        'International Travel Insurance',
        'Domestic Travel Cover',
        'ACKOIndia AirPass (Flight Delay Cover)',
        'Schengen Visa Travel Insurance',
        'Student Overseas Medical Cover'
      ]
    },
    {
      title: 'Enterprise & Group Protection',
      items: [
        'Group Health for Startups',
        'App-based Gig Worker Insurance',
        'Logistics & Fleet Protection',
        'Embedded FinTech API Solutions'
      ]
    }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-950 text-gray-300 pt-16 pb-12 border-t border-gray-800">
      <div className="w-full px-[4%]">
        
        {/* Brand + link columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 pb-12 border-b border-gray-800">

          <div className="lg:col-span-4">
            <Logo dark />
            <p className="text-sm text-gray-400 mt-4 max-w-xs leading-relaxed">
              Simple, direct insurance for your car, bike, health and travel. No agents, no paperwork, no surprises.
            </p>
            <div className="mt-5 inline-flex items-center gap-2 rounded-full bg-gray-900 border border-gray-800 px-4 py-2 text-xs font-semibold text-gray-300">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              Claims helpline 1800-266-2256 • 24x7
            </div>
          </div>

          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              ['Products', [['Car insurance', '#products'], ['Bike insurance', '#products'], ['Health insurance', '#products'], ['Life insurance', '#products'], ['Travel insurance', '#products'], ['Enterprise solutions', '#enterprise']]],
              ['Company', [['About us', '#about'], ['Careers', '#careers'], ['Contact us', '#contact'], ['Board of directors', '#board'], ['Investor relations', '#investors']]],
              ['Brand Hub', [['All resources', '#resources'], ['Customer stories', '#stories'], ['Media Kit', '#media'], ['Articles & Guides', '#articles'], ['E-books', '#ebooks']]],
              ['Legal & Disclosures', [['Financials & Disclosures', '#disclosures'], ['Privacy policy', '#privacy'], ['Terms & conditions', '#terms'], ['Anti-fraud policy', '#fraud'], ['Grievance Redressal', '#grievance']]]
            ].map(([title, links]) => (
              <div key={title}>
                <h4 className="text-white text-xs font-bold uppercase tracking-widest mb-4">{title}</h4>
                <ul className="space-y-2.5 text-sm">
                  {links.map(([label, href]) => (
                    <li key={label}><a href={href} className="text-gray-400 hover:text-white transition">{label}</a></li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

        </div>

        {/* Directory tabs */}
        <div className="py-8 border-b border-gray-800">
          <div className="flex flex-wrap gap-2">
            {accordionSections.map((sec, idx) => (
              <button
                key={sec.title}
                onClick={() => setOpenAccordion(idx)}
                className={`px-4 py-2 rounded-full text-xs font-bold border transition ${
                  activeTab === idx
                    ? 'bg-white text-gray-950 border-white'
                    : 'bg-transparent text-gray-300 border-gray-700 hover:border-gray-500'
                }`}
              >
                {sec.title}
              </button>
            ))}
          </div>
          <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-3 text-sm text-gray-400">
            {accordionSections[activeTab].items.map((item) => (
              <span key={item} className="hover:text-indigo-400 cursor-pointer transition">{item}</span>
            ))}
          </div>
        </div>

        {/* Corporate Address & Social Links */}
        <div className="pt-8 pb-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center text-white font-black text-sm">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h5 className="text-white font-extrabold text-sm tracking-wide">
                ACKOIndia Technology and Services Limited
              </h5>
              <p className="text-[11px] text-gray-400 mt-0.5 max-w-xl">
                #36/5, Hustlehub One East, Somasandrapalya, 27th Main Rd, Sector 2, HSR Layout, Bengaluru, Karnataka 560102
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="w-8 h-8 rounded-full bg-gray-800 hover:bg-indigo-600 flex items-center justify-center text-gray-300 hover:text-white transition">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.6a1.6 1.6 0 0 0-1.6 1.6 1.6 1.6 0 0 0 1.6 1.6 1.6 1.6 0 0 0 1.6-1.6 1.6 1.6 0 0 0-1.6-1.6Z"/></svg>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="X Twitter" className="w-8 h-8 rounded-full bg-gray-800 hover:bg-indigo-600 flex items-center justify-center text-gray-300 hover:text-white transition">
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram" className="w-8 h-8 rounded-full bg-gray-800 hover:bg-indigo-600 flex items-center justify-center text-gray-300 hover:text-white transition">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
            </a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook" className="w-8 h-8 rounded-full bg-gray-800 hover:bg-indigo-600 flex items-center justify-center text-gray-300 hover:text-white transition">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            </a>
            <button
              onClick={scrollToTop}
              className="ml-2 w-8 h-8 rounded-full bg-gray-800 hover:bg-indigo-600 flex items-center justify-center text-gray-300 hover:text-white transition"
              title="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Disclaimer / Regulatory Note */}
        <div className="pt-4 border-t border-gray-900 text-[10px] text-gray-400 leading-relaxed space-y-1.5">
          <p>
            *IRDAI Regn No. 157 | Category: General Insurance | CIN: U66000KA2016PLC138288 | Trade logo displayed above belongs to ACKOIndia Technology and Services Limited and licensed to ACKOIndia General Insurance Limited.
          </p>
          <p>
            Insurance is the subject matter of solicitation. For more details on risk factors, terms, conditions, and exclusions, please read the sales brochure carefully before concluding a sale. Savings percentage calculated based on comparative third-party rate tariffs.
          </p>
          <div className="pt-2 flex items-center justify-between text-gray-400">
            <span>© {new Date().getFullYear()} ACKOIndia. All rights reserved.</span>
            <span>Made for high-speed direct insurance in India</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
