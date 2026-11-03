import React, { useState, useRef, useEffect } from 'react';
import { 
  ShieldCheck, 
  ChevronDown, 
  ChevronRight,
  Car, 
  Bike, 
  HeartPulse, 
  ShieldAlert, 
  Plane, 
  Grid,
  FileCheck,
  Search,
  UserCheck,
  FileText,
  Briefcase,
  Users,
  MessageSquare,
  Globe,
  Menu,
  X,
  ArrowRight
} from 'lucide-react';
import Logo from './Logo';
import { useInsuranceContext } from '../context/InsuranceContext';

export default function Navbar() {
  const { openQuoteForProduct, showToast } = useInsuranceContext();

  // Active dropdown: 'products' | 'whyAcko' | 'renewals' | 'claims' | 'lang' | null
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [selectedProductCategory, setSelectedProductCategory] = useState('car');
  const [selectedLanguage, setSelectedLanguage] = useState('en');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileSection, setMobileSection] = useState(null);

  const navRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setActiveDropdown(null);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleDropdown = (name) => {
    setActiveDropdown((prev) => (prev === name ? null : name));
  };

  // Products mega-menu categories & sub-items
  const productCategories = [
    {
      id: 'car',
      label: 'Car insurance',
      icon: Car,
      subItems: [
        'Car insurance',
        'Comprehensive car insurance',
        'Third party car insurance',
        'Own damage car insurance',
        'Zero depreciation car insurance'
      ],
      promo: {
        title: 'The only pass that pays you back for flight troubles',
        btnText: 'Know more >',
        tag: 'ACKOIndia AirPass',
        bg: 'bg-gradient-to-br from-neutral-900 to-neutral-800'
      }
    },
    {
      id: 'bike',
      label: 'Bike insurance',
      icon: Bike,
      subItems: [
        'Bike insurance',
        'Comprehensive bike insurance',
        'Third party bike insurance',
        'Own damage two wheeler insurance',
        'Electric 2-wheeler cover'
      ],
      promo: {
        title: 'Instant bike policy issued in 60 seconds with zero paperwork',
        btnText: 'Renew Now >',
        tag: 'Instant Bike Cover',
        bg: 'bg-gradient-to-br from-teal-950 to-neutral-900'
      }
    },
    {
      id: 'health',
      label: 'Health insurance',
      icon: HeartPulse,
      subItems: [
        'Health insurance',
        'ACKOIndia Platinum health plan',
        'Super top-up health insurance',
        'Arogya Sanjeevani policy',
        'Corporate health insurance'
      ],
      promo: {
        title: '100% Hospital bill payments. Zero deductions on room rent',
        btnText: 'Explore Health >',
        tag: 'Platinum Health',
        bg: 'bg-gradient-to-br from-rose-950 to-neutral-900'
      }
    },
    {
      id: 'life',
      label: 'Life insurance',
      icon: ShieldAlert,
      subItems: [
        'Life insurance',
        'Term life insurance',
        'Zero-cost term plan',
        '₹50 Crore pure life protection'
      ],
      promo: {
        title: 'High-value term life cover with hassle-free tele-medical check',
        btnText: 'Calculate Cover >',
        tag: 'Term Life',
        bg: 'bg-gradient-to-br from-amber-950 to-neutral-900'
      }
    },
    {
      id: 'travel',
      label: 'Travel insurance',
      icon: Plane,
      subItems: [
        'Travel insurance',
        'International travel insurance',
        'Domestic travel insurance',
        'Schengen visa travel cover',
        'Student overseas medical cover'
      ],
      promo: {
        title: 'Cashless medical emergencies across 190+ countries',
        btnText: 'Get Travel Quote >',
        tag: 'Global Travel',
        bg: 'bg-gradient-to-br from-blue-950 to-neutral-900'
      }
    },
    {
      id: 'other',
      label: 'Other ACKOIndia Products',
      icon: Grid,
      subItems: [
        'ACKOIndia AirPass (Flight delays)',
        'ACKOIndia Drive (Brand new cars)',
        'Commercial vehicle insurance',
        'Embedded FinTech solutions'
      ],
      promo: {
        title: 'Save up to ₹80,000 on brand new cars with ACKOIndia Drive',
        btnText: 'Visit Showroom >',
        tag: 'ACKOIndia Drive',
        bg: 'bg-gradient-to-br from-purple-950 to-neutral-900'
      }
    }
  ];

  const currentCategoryData = productCategories.find(c => c.id === selectedProductCategory) || productCategories[0];

  const languages = [
    { code: 'en', symbol: 'A', label: 'English' },
    { code: 'kn', symbol: 'ಅ', label: 'Kannada' },
    { code: 'ta', symbol: 'அ', label: 'Tamil' },
    { code: 'hi', symbol: 'अ', label: 'Hindi' }
  ];

  const handleProductSelect = (subItemTitle) => {
    setActiveDropdown(null);
    openQuoteForProduct({
      id: selectedProductCategory,
      title: subItemTitle
    });
  };

  return (
    <header ref={navRef} className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-xs">
      <div className="w-full px-[4%] py-3">
        <div className="flex items-center justify-between h-14">
          
          {/* Left: Brand Logo & Main Links */}
          <div className="flex items-center gap-7">
            {/* Logo */}
            <Logo />

            {/* Nav Menu */}
            <nav className="hidden lg:flex items-center gap-1.5 text-sm font-semibold text-gray-700">
              
              {/* 1. Products Dropdown Trigger */}
              <div className="relative">
                <button
                  onClick={() => toggleDropdown('products')}
                  className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl transition ${
                    activeDropdown === 'products'
                      ? 'bg-gray-100 text-gray-950 font-bold'
                      : 'hover:bg-gray-50 hover:text-gray-950'
                  }`}
                >
                  <span>Products</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === 'products' ? 'rotate-180 text-gray-950' : 'text-gray-400'}`} />
                </button>
              </div>

              {/* Enterprise */}
              <a 
                href="#enterprise" 
                onClick={() => setActiveDropdown(null)}
                className="px-3.5 py-2 rounded-xl hover:bg-gray-50 hover:text-gray-950 transition"
              >
                Enterprise
              </a>

              {/* 2. Why ACKOIndia? Dropdown Trigger */}
              <div className="relative">
                <button
                  onClick={() => toggleDropdown('whyAcko')}
                  className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl transition ${
                    activeDropdown === 'whyAcko'
                      ? 'bg-gray-100 text-gray-950 font-bold'
                      : 'hover:bg-gray-50 hover:text-gray-950'
                  }`}
                >
                  <span>Why ACKOIndia?</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === 'whyAcko' ? 'rotate-180 text-gray-950' : 'text-gray-400'}`} />
                </button>
              </div>

              {/* Support */}
              <a 
                href="#support" 
                onClick={() => setActiveDropdown(null)}
                className="px-3.5 py-2 rounded-xl hover:bg-gray-50 hover:text-gray-950 transition"
              >
                Support
              </a>
            </nav>
          </div>

          {/* Right Action Menu */}
          <div className="hidden lg:flex items-center gap-3">
            
            {/* 3. Renewals Dropdown Trigger */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown('renewals')}
                className={`flex items-center gap-1.5 px-3.5 py-2 text-sm font-semibold rounded-xl transition ${
                  activeDropdown === 'renewals'
                    ? 'bg-gray-100 text-gray-950 font-bold'
                    : 'text-gray-700 hover:bg-gray-50 hover:text-gray-950'
                }`}
              >
                <span>Renewals</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeDropdown === 'renewals' ? 'rotate-180' : 'text-gray-400'}`} />
              </button>

              {/* Renewals Dropdown Panel */}
              {activeDropdown === 'renewals' && (
                <div className="absolute right-0 top-full mt-2 w-72 bg-white rounded-3xl p-4 shadow-2xl border border-gray-100 ring-1 ring-black/5 animate-in fade-in slide-in-from-top-2 duration-150 z-50">
                  <div className="mb-2 px-3 py-1">
                    <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">
                      New to ACKOIndia?
                    </span>
                  </div>
                  <div className="space-y-1">
                    <button 
                      onClick={() => { setActiveDropdown(null); openQuoteForProduct({ id: 'health', title: 'Renew Health Insurance' }); }}
                      className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-gray-50 text-left text-sm font-semibold text-gray-800 transition"
                    >
                      <HeartPulse className="w-4 h-4 text-gray-600" />
                      <span>Renew health insurance</span>
                    </button>
                    <button 
                      onClick={() => { setActiveDropdown(null); openQuoteForProduct({ id: 'car', title: 'Renew Car Insurance' }); }}
                      className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-gray-50 text-left text-sm font-semibold text-gray-800 transition"
                    >
                      <Car className="w-4 h-4 text-gray-600" />
                      <span>Renew car insurance</span>
                    </button>
                    <button 
                      onClick={() => { setActiveDropdown(null); openQuoteForProduct({ id: 'bike', title: 'Renew Bike Insurance' }); }}
                      className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-gray-50 text-left text-sm font-semibold text-gray-800 transition"
                    >
                      <Bike className="w-4 h-4 text-gray-600" />
                      <span>Renew bike insurance</span>
                    </button>
                    <button 
                      onClick={() => { setActiveDropdown(null); openQuoteForProduct({ id: 'life', title: 'Renew Life Insurance' }); }}
                      className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-gray-50 text-left text-sm font-semibold text-gray-800 transition"
                    >
                      <ShieldAlert className="w-4 h-4 text-gray-600" />
                      <span>Renew life insurance</span>
                    </button>
                  </div>

                  <div className="mt-3 pt-3 border-t border-gray-100">
                    <div className="mb-2 px-3">
                      <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">
                        Existing ACKOIndia Customer
                      </span>
                    </div>
                    <button 
                      onClick={() => { setActiveDropdown(null); openQuoteForProduct({ id: 'car', title: 'Login & Renew Policy' }); }}
                      className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-indigo-50 text-left text-sm font-bold text-gray-900 hover:text-indigo-600 transition"
                    >
                      <UserCheck className="w-4 h-4 text-indigo-600" />
                      <span>Login and renew policy</span>
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* 4. Claims Dropdown Trigger */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown('claims')}
                className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-semibold border transition ${
                  activeDropdown === 'claims'
                    ? 'border-gray-900 bg-gray-50 text-gray-900 font-bold'
                    : 'border-gray-300 hover:border-gray-400 text-gray-700 bg-white'
                }`}
              >
                <span>Claims</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeDropdown === 'claims' ? 'rotate-180' : 'text-gray-400'}`} />
              </button>

              {/* Claims Dropdown Panel */}
              {activeDropdown === 'claims' && (
                <div className="absolute right-0 top-full mt-2 w-64 bg-white rounded-3xl p-3 shadow-2xl border border-gray-100 ring-1 ring-black/5 animate-in fade-in slide-in-from-top-2 duration-150 z-50">
                  <div className="space-y-1">
                    <a
                      href="#claims"
                      onClick={() => {
                        setActiveDropdown(null);
                        showToast('Opened 7-Min Claim Filing wizard');
                      }}
                      className="flex items-center gap-3 px-3.5 py-3 rounded-2xl hover:bg-gray-50 text-sm font-semibold text-gray-800 transition group"
                    >
                      <FileCheck className="w-4 h-4 text-gray-500 group-hover:text-indigo-600" />
                      <span>File a claim</span>
                    </a>
                    <a
                      href="#claims"
                      onClick={() => {
                        setActiveDropdown(null);
                        showToast('Live tracking status: No active claim found for this browser session.');
                      }}
                      className="flex items-center gap-3 px-3.5 py-3 rounded-2xl hover:bg-gray-50 text-sm font-semibold text-gray-800 transition group"
                    >
                      <Search className="w-4 h-4 text-gray-500 group-hover:text-indigo-600" />
                      <span>Track a claim</span>
                    </a>
                  </div>
                </div>
              )}
            </div>

            {/* Login Button */}
            <button
              onClick={() => openQuoteForProduct({ id: 'car', title: 'Login with Mobile OTP' })}
              className="px-5 py-2 rounded-xl bg-gray-950 hover:bg-indigo-600 text-white text-sm font-bold shadow-xs transition active:scale-95"
            >
              Login
            </button>

            {/* 5. Language Selector Trigger [A/अ] */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown('lang')}
                className={`flex items-center gap-1.5 p-2 rounded-xl border border-gray-200 hover:border-gray-300 text-gray-700 transition ${
                  activeDropdown === 'lang' ? 'bg-gray-100 border-gray-400' : ''
                }`}
                title="Change language"
              >
                <div className="w-6 h-6 rounded-md bg-gray-100 flex items-center justify-center font-bold text-xs">
                  <span className="font-sans text-[11px] leading-none">A/अ</span>
                </div>
                <ChevronDown className={`w-3.5 h-3.5 text-gray-500 transition-transform ${activeDropdown === 'lang' ? 'rotate-180' : ''}`} />
              </button>

              {/* Language Dropdown Panel */}
              {activeDropdown === 'lang' && (
                <div className="absolute right-0 top-full mt-2 w-48 bg-white rounded-3xl p-2 shadow-2xl border border-gray-100 ring-1 ring-black/5 animate-in fade-in slide-in-from-top-2 duration-150 z-50">
                  <div className="space-y-1">
                    {languages.map((lang) => {
                      const isSelected = selectedLanguage === lang.code;
                      return (
                        <button
                          key={lang.code}
                          onClick={() => {
                            setSelectedLanguage(lang.code);
                            setActiveDropdown(null);
                            showToast(`Language switched to ${lang.label}`);
                          }}
                          className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-left text-sm font-semibold transition ${
                            isSelected
                              ? 'bg-purple-100/70 text-indigo-900 font-bold'
                              : 'text-gray-700 hover:bg-gray-50'
                          }`}
                        >
                          <span className="w-6 text-center font-bold text-base text-gray-900">
                            {lang.symbol}
                          </span>
                          <span>{lang.label}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

          </div>

          {/* Mobile Menu Hamburger */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => openQuoteForProduct({ id: 'car', title: 'Login' })}
              className="px-3.5 py-1.5 text-xs font-bold bg-gray-950 text-white rounded-lg"
            >
              Login
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-gray-700 hover:bg-gray-100"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* ------------------------------------------------------------- */}
      {/* 1. PRODUCTS MEGA MENU PANEL                                   */}
      {/* ------------------------------------------------------------- */}
      {activeDropdown === 'products' && (
        <div className="hidden lg:block absolute left-0 right-0 top-full bg-white border-b border-gray-200 shadow-2xl animate-in fade-in slide-in-from-top-1 duration-200 z-50">
          <div className="w-full px-[4%] py-6">
            <div className="grid grid-cols-12 gap-8 items-start">

              {/* Column 1: Left Category list */}
              <div className="col-span-4 space-y-1 border-r border-gray-100 pr-4">
                {productCategories.map((cat) => {
                  const CatIcon = cat.icon;
                  const isHovered = selectedProductCategory === cat.id;
                  return (
                    <div
                      key={cat.id}
                      onMouseEnter={() => setSelectedProductCategory(cat.id)}
                      onClick={() => setSelectedProductCategory(cat.id)}
                      className={`flex items-center justify-between px-3.5 py-3 rounded-xl cursor-pointer font-semibold transition ${
                        isHovered ? 'bg-indigo-50 text-indigo-600' : 'text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <CatIcon className={`w-5 h-5 ${isHovered ? 'text-indigo-600' : 'text-gray-400'}`} />
                        <span className="text-sm">{cat.label}</span>
                      </div>
                      <ChevronRight className={`w-4 h-4 ${isHovered ? 'text-indigo-600' : 'text-gray-300'}`} />
                    </div>
                  );
                })}
              </div>

              {/* Column 2: Middle Sub-items list */}
              <div className="col-span-4 pl-2 space-y-1.5">
                <div className="mb-2">
                  <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">
                    {currentCategoryData.label} Options
                  </span>
                </div>
                {currentCategoryData.subItems.map((item, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleProductSelect(item)}
                    className="w-full text-left px-3.5 py-2.5 rounded-xl hover:bg-indigo-50/70 hover:text-indigo-600 text-gray-800 font-semibold text-sm transition flex items-center justify-between group"
                  >
                    <span>{item}</span>
                    <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all text-indigo-600" />
                  </button>
                ))}
              </div>

              {/* Column 3: Right Featured Promo Card */}
              <div className="col-span-4 pl-4">
                <div className={`rounded-3xl p-6 text-white ${currentCategoryData.promo.bg} shadow-xl relative overflow-hidden flex flex-col justify-between min-h-[260px]`}>
                  <div>
                    <span className="text-[11px] font-extrabold uppercase tracking-widest text-indigo-300 bg-white/10 px-2.5 py-1 rounded-full">
                      {currentCategoryData.promo.tag}
                    </span>
                    <h4 className="text-xl font-bold mt-4 leading-snug">
                      {currentCategoryData.promo.title}
                    </h4>
                  </div>

                  <div className="mt-6 flex items-center justify-between pt-4 border-t border-white/10">
                    <button
                      onClick={() => {
                        setActiveDropdown(null);
                        openQuoteForProduct({ id: selectedProductCategory, title: currentCategoryData.promo.tag });
                      }}
                      className="px-4 py-2 rounded-xl bg-white text-gray-900 text-xs font-extrabold hover:bg-indigo-50 transition"
                    >
                      {currentCategoryData.promo.btnText}
                    </button>
                    <span className="text-[11px] text-gray-400">Zero Commission</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      )}

      {/* ------------------------------------------------------------- */}
      {/* 2. WHY ACKOINDIA? DROPDOWN PANEL                              */}
      {/* ------------------------------------------------------------- */}
      {activeDropdown === 'whyAcko' && (
        <div className="hidden lg:block absolute left-0 right-0 top-full bg-white border-b border-gray-200 shadow-2xl animate-in fade-in slide-in-from-top-1 duration-200 z-50">
          <div className="w-full px-[4%] py-8">
            <div className="grid grid-cols-12 gap-8 items-stretch">

              {/* Left Column: Menu links with descriptions */}
              <div className="col-span-5 space-y-2">
                {[
                  { href: '#about', icon: FileText, label: 'About Us', desc: 'Our story, mission and the team behind ACKOIndia' },
                  { href: '#careers', icon: Briefcase, label: 'Careers', desc: 'Build the future of digital insurance with us' },
                  { href: '#claims', icon: MessageSquare, label: 'Customer stories', desc: 'How real claims were settled, in their words' }
                ].map(({ href, icon: Icon, label, desc }) => (
                  <a
                    key={href}
                    href={href}
                    onClick={() => setActiveDropdown(null)}
                    className="flex items-center gap-4 px-4 py-3.5 rounded-2xl border border-transparent hover:border-indigo-100 hover:bg-indigo-50/50 transition group"
                  >
                    <span className="w-11 h-11 rounded-xl bg-gray-100 text-gray-500 flex items-center justify-center shrink-0 group-hover:bg-indigo-600 group-hover:text-white transition">
                      <Icon className="w-5 h-5" />
                    </span>
                    <span className="flex-1 min-w-0">
                      <span className="block text-sm font-bold text-gray-900 group-hover:text-indigo-700">{label}</span>
                      <span className="block text-xs text-gray-500 mt-0.5">{desc}</span>
                    </span>
                    <ArrowRight className="w-4 h-4 text-gray-300 group-hover:text-indigo-600 group-hover:translate-x-0.5 transition" />
                  </a>
                ))}
              </div>

              {/* Right Column: Trust stats panel (no photo) */}
              <div className="col-span-7">
                <div className="h-full rounded-3xl bg-gradient-to-br from-indigo-950 via-slate-900 to-slate-950 text-white p-7 shadow-xl relative overflow-hidden">
                  <div className="absolute -top-16 -right-16 w-56 h-56 rounded-full bg-indigo-500/20 blur-3xl pointer-events-none"></div>
                  <div className="relative flex items-start justify-between gap-6">
                    <div className="max-w-sm">
                      <span className="text-[11px] font-extrabold uppercase tracking-widest text-emerald-400 bg-emerald-950/60 px-2.5 py-1 rounded-full border border-emerald-800">
                        Real Customer Stories
                      </span>
                      <h4 className="text-2xl font-black leading-snug mt-3">
                        Stories that speak for ACKOIndia
                      </h4>
                      <p className="text-sm text-slate-400 mt-1.5">Honest experiences from customers who have claimed with us.</p>
                    </div>
                    <button
                      onClick={() => {
                        setActiveDropdown(null);
                        showToast('Opening verified customer stories archive...');
                      }}
                      className="shrink-0 px-4 py-2 rounded-xl bg-white text-gray-900 text-xs font-extrabold hover:bg-indigo-50 transition"
                    >
                      Know more &gt;
                    </button>
                  </div>

                  <div className="relative grid grid-cols-3 gap-3 mt-6">
                    {[
                      { v: '4.8/5', l: 'Customer rating' },
                      { v: '1 Cr+', l: 'Happy customers' },
                      { v: '95%', l: 'Claims settled digitally' }
                    ].map((s) => (
                      <div key={s.l} className="rounded-2xl bg-white/5 border border-white/10 px-4 py-3.5">
                        <div className="text-2xl font-black">{s.v}</div>
                        <div className="text-[11px] text-slate-400 font-semibold mt-0.5">{s.l}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      )}

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-xl max-h-[calc(100vh-72px)] overflow-y-auto">
          <div className="px-4 py-3 divide-y divide-gray-100">

            {/* Products accordion */}
            <div className="py-1">
              <button
                onClick={() => setMobileSection(mobileSection === 'products' ? null : 'products')}
                className="w-full flex items-center justify-between py-3 text-sm font-bold text-gray-900"
              >
                <span>Products</span>
                <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform ${mobileSection === 'products' ? 'rotate-180' : ''}`} />
              </button>
              {mobileSection === 'products' && (
                <div className="pb-3 space-y-2">
                  {productCategories.map((cat) => {
                    const CatIcon = cat.icon;
                    const open = selectedProductCategory === cat.id;
                    return (
                      <div key={cat.id} className="rounded-2xl border border-gray-100 bg-gray-50/70">
                        <button
                          onClick={() => setSelectedProductCategory(open ? null : cat.id)}
                          className="w-full flex items-center justify-between px-3.5 py-3 text-sm font-semibold text-gray-800"
                        >
                          <span className="flex items-center gap-2.5">
                            <CatIcon className="w-4 h-4 text-indigo-600" /> {cat.label}
                          </span>
                          <ChevronRight className={`w-4 h-4 text-gray-400 transition-transform ${open ? 'rotate-90' : ''}`} />
                        </button>
                        {open && (
                          <div className="px-2 pb-2 grid gap-1">
                            {cat.subItems.map((item) => (
                              <button
                                key={item}
                                onClick={() => { setMobileMenuOpen(false); setActiveDropdown(null); openQuoteForProduct({ id: cat.id, title: item }); }}
                                className="text-left px-3 py-2 rounded-xl text-sm text-gray-700 hover:bg-white hover:text-indigo-600"
                              >
                                {item}
                              </button>
                            ))}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              )}
            </div>

            <a href="#enterprise" onClick={() => setMobileMenuOpen(false)} className="block py-3.5 text-sm font-bold text-gray-900">
              Enterprise
            </a>

            {/* Why ACKOIndia accordion */}
            <div className="py-1">
              <button
                onClick={() => setMobileSection(mobileSection === 'why' ? null : 'why')}
                className="w-full flex items-center justify-between py-3 text-sm font-bold text-gray-900"
              >
                <span>Why ACKOIndia?</span>
                <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform ${mobileSection === 'why' ? 'rotate-180' : ''}`} />
              </button>
              {mobileSection === 'why' && (
                <div className="pb-3 grid gap-1">
                  {[['About Us', '#about'], ['Careers', '#careers'], ['Customer stories', '#claims']].map(([label, href]) => (
                    <a key={label} href={href} onClick={() => setMobileMenuOpen(false)} className="px-3 py-2.5 rounded-xl text-sm text-gray-700 hover:bg-gray-50">
                      {label}
                    </a>
                  ))}
                </div>
              )}
            </div>

            <a
              href="#support"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-3.5 text-sm font-bold text-gray-900"
            >
              Support
            </a>

            {/* Renewals */}
            <div className="py-1">
              <button
                onClick={() => setMobileSection(mobileSection === 'renewals' ? null : 'renewals')}
                className="w-full flex items-center justify-between py-3 text-sm font-bold text-gray-900"
              >
                <span>Renewals</span>
                <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform ${mobileSection === 'renewals' ? 'rotate-180' : ''}`} />
              </button>
              {mobileSection === 'renewals' && (
                <div className="pb-3 grid grid-cols-2 gap-2">
                  {[['car', 'Car'], ['bike', 'Bike'], ['health', 'Health'], ['life', 'Life']].map(([id, label]) => (
                    <button
                      key={id}
                      onClick={() => { setMobileMenuOpen(false); openQuoteForProduct({ id, title: `Renew ${label} Insurance` }); }}
                      className="px-3 py-2.5 rounded-xl bg-gray-50 text-left text-sm font-semibold text-gray-800"
                    >
                      Renew {label}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <a href="#claims" onClick={() => setMobileMenuOpen(false)} className="block py-3.5 text-sm font-bold text-gray-900">
              Claims
            </a>
            <a href="#showroom" onClick={() => setMobileMenuOpen(false)} className="block py-3.5 text-sm font-bold text-gray-900">
              Digital Showroom <span className="text-emerald-600 font-semibold">(Save ₹80k)</span>
            </a>

            {/* Language */}
            <div className="py-4">
              <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <Globe className="w-3.5 h-3.5" /> Language
              </div>
              <div className="flex flex-wrap gap-2">
                {languages.map((l) => (
                  <button
                    key={l.code}
                    onClick={() => { setSelectedLanguage(l.code); showToast(`Language set to ${l.label}`); }}
                    className={`px-3.5 py-1.5 rounded-full text-xs font-bold border ${
                      selectedLanguage === l.code ? 'bg-gray-950 text-white border-gray-950' : 'bg-white text-gray-700 border-gray-200'
                    }`}
                  >
                    {l.symbol} {l.label}
                  </button>
                ))}
              </div>
            </div>

          </div>
        </div>
      )}

    </header>
  );
}
