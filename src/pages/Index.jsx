import React, { useState, memo } from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import ServicesSection from '../components/ServicesSection';
import BenefitsSection from '../components/BenefitsSection';
import ROICalculatorSection from '../components/ROICalculatorSection';
import TestimonialsSection from '../components/TestimonialsSection';
import CallToActionSection from '../components/CallToActionSection';
import Footer from '../components/Footer';
import LiveChat from '../components/LiveChat';
import ScrollProgress from '../components/ScrollProgress';

// Memoize components that don't depend on frequently changing state
const MemoizedHeroSection = memo(HeroSection);
const MemoizedServicesSection = memo(ServicesSection);
const MemoizedBenefitsSection = memo(BenefitsSection);
const MemoizedTestimonialsSection = memo(TestimonialsSection);
const MemoizedROICalculatorSection = memo(ROICalculatorSection);
const MemoizedCallToActionSection = memo(CallToActionSection);

const Index = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <div className="flex flex-col min-h-screen">
      <ScrollProgress />
      <Header isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      <main className="flex-grow">
        <MemoizedHeroSection />
        <MemoizedServicesSection />
        <MemoizedBenefitsSection />
        <MemoizedTestimonialsSection />
        <MemoizedROICalculatorSection />
        <MemoizedCallToActionSection />
      </main>
      <Footer />
      <LiveChat isChatOpen={isChatOpen} setIsChatOpen={setIsChatOpen} />
    </div>
  );
};

export default Index;