import React from 'react';
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
import Footer from '../components/Footer';
import QuoteModal from '../components/QuoteModal';
import { useInsuranceContext } from '../context/InsuranceContext';
import { CheckCircle2, AlertCircle } from 'lucide-react';

export default function Home() {
  const { toast } = useInsuranceContext();

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
        {/* 1. Hero Section with 6 Bento Insurance Cards */}
        <HeroBanner />
        <HeroSection />

        {/* 2. Trust Metrics Bar */}
        <TrustMetrics />

        {/* 3. Claims Experience & Customer Promises */}
        <ClaimsExperience />

        {/* 4. Full-Screen Interactive 3D Digital Showroom */}
        <CarShowroom />

        {/* 5. Traditional Agents vs Direct ACKOIndia Comparison */}
        <ComparisonSection />

        {/* 6. Free Helpful Services & Policy Analyser Gauge */}
        <AppFeatures />

        {/* 7. 14,000+ Cashless Network Locator (Garages & Hospitals) */}
        <NetworkLocator />

        {/* 8. Comprehensive Protection Add-on Riders */}
        <AddonsGrid />

        {/* 9. Press & Awards Recognition */}
        <PressRecognition />

        {/* 10. Frequently Asked Questions (Accordion) & 24x7 Helpline */}
        <FaqSection />
      </main>

      {/* 11. Complete Footer with Accordion Directories & IRDAI Legal Disclosure */}
      <Footer />

      {/* Global Interactive Quote Modal */}
      <QuoteModal />

    </div>
  );
}
