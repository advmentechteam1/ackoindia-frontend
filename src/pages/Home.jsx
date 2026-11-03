import React, { useState, useEffect } from 'react';
import Reveal from '../components/Reveal';
import Navbar from '../components/Navbar';
import HeroBanner from '../components/HeroBanner';
import HeroSection from '../components/HeroSection';
import TrustMetrics from '../components/TrustMetrics';
import ClaimsExperience from '../components/ClaimsExperience';
import CarShowroom from '../components/CarShowroom';
import ComparisonSection from '../components/ComparisonSection';
import AppFeatures from '../components/AppFeatures';
import NetworkLocator from '../components/NetworkLocator';
import AddonsGrid from '../components/AddonsGrid';
import PressRecognition from '../components/PressRecognition';
import FaqSection from '../components/FaqSection';
import EnterprisePage from '../components/EnterprisePage';
import SupportPage from '../components/SupportPage';
import LegalPage from '../components/LegalPage';
import Footer from '../components/Footer';
import QuoteModal from '../components/QuoteModal';
import { useInsuranceContext } from '../context/InsuranceContext';
import { CheckCircle2, AlertCircle } from 'lucide-react';

export default function Home() {
  const { toast } = useInsuranceContext();
  const readPage = () => {
    const h = window.location.hash;
    if (h === '#enterprise') return 'enterprise';
    if (h === '#support') return 'support';
    if (h === '#privacy') return 'privacy';
    if (h === '#terms') return 'terms';
    return 'home';
  };
  const [page, setPage] = useState(readPage);

  useEffect(() => {
    const onHash = () => {
      setPage((prev) => {
        const next = readPage();
        if (prev !== next) window.scrollTo({ top: 0 });
        return next;
      });
    };
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);

  useEffect(() => {
    const titles = {
      enterprise: 'ACKOIndia for Enterprise: Group Health, Fleet & Embedded Insurance',
      support: 'ACKOIndia Support: Claims, Policies & Help',
      privacy: 'Privacy Policy | ACKOIndia',
      terms: 'Terms & Conditions | ACKOIndia',
      home: 'ACKOIndia: Direct Car, Bike & Health Insurance | Instant 7-Min Claims'
    };
    document.title = titles[page];
  }, [page]);

  return (
    <div className="min-h-screen bg-white text-gray-900 selection:bg-indigo-600 selection:text-white font-sans antialiased overflow-x-hidden">
      
      {/* Toast Notification */}
      {toast && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 px-5 py-3 rounded-2xl bg-gray-900 text-white shadow-2xl border border-gray-700 animate-in fade-in slide-in-from-bottom-5 duration-300">
          {toast.type === 'error' ? (
            <AlertCircle className="w-4 h-4 text-rose-400 shrink-0" />
          ) : (
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
          )}
          <span className="text-xs font-semibold">{toast.message}</span>
        </div>
      )}

      {/* Main Layout Sections with 4% Left/Right Page Padding */}
      <Navbar />
      
      <main className="w-full webpage-padding">
        {page === 'enterprise' ? (
          <Reveal from="up">
            <EnterprisePage />
          </Reveal>
        ) : page === 'privacy' || page === 'terms' ? (
          <Reveal from="up">
            <LegalPage type={page} />
          </Reveal>
        ) : page === 'support' ? (
          <Reveal from="up">
            <SupportPage />
          </Reveal>
        ) : (
          <>
        {/* 1. Hero Section with 6 Bento Insurance Cards */}
        <HeroBanner />
        <Reveal from="left">
              <HeroSection />
            </Reveal>

        {/* 2. Trust Metrics Bar */}
        <Reveal from="right">
              <TrustMetrics />
            </Reveal>

        {/* 3. Claims Experience & Customer Promises */}
        <Reveal from="left">
              <ClaimsExperience />
            </Reveal>

        {/* 4. Full-Screen Interactive 3D Digital Showroom */}
        <Reveal from="right">
              <CarShowroom />
            </Reveal>

        {/* 5. Traditional Agents vs Direct ACKOIndia Comparison */}
        <Reveal from="left">
              <ComparisonSection />
            </Reveal>

        {/* 6. Free Helpful Services & Policy Analyser Gauge */}
        <Reveal from="right">
              <AppFeatures />
            </Reveal>

        {/* 7. 14,000+ Cashless Network Locator (Garages & Hospitals) */}
        <Reveal from="left">
              <NetworkLocator />
            </Reveal>

        {/* 8. Comprehensive Protection Add-on Riders */}
        <Reveal from="right">
              <AddonsGrid />
            </Reveal>

        {/* 9. Press & Awards Recognition */}
        <Reveal from="left">
              <PressRecognition />
            </Reveal>

        {/* 10. Frequently Asked Questions (Accordion) & 24x7 Helpline */}
        <Reveal from="right">
              <FaqSection />
            </Reveal>
                </>
        )}
      </main>

      {/* 11. Complete Footer with Accordion Directories & IRDAI Legal Disclosure */}
      <Footer />

      {/* Global Interactive Quote Modal */}
      <QuoteModal />

    </div>
  );
}
