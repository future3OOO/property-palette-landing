import React, { useState, memo, useCallback } from 'react';
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

// Memoize components that don't depend on props
const MemoizedHeroSection = memo(HeroSection);
const MemoizedServicesSection = memo(ServicesSection);
const MemoizedBenefitsSection = memo(BenefitsSection);
const MemoizedTestimonialsSection = memo(TestimonialsSection);
const MemoizedROICalculatorSection = memo(ROICalculatorSection);
const MemoizedCallToActionSection = memo(CallToActionSection);

const Index = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Memoize the chat toggle handler
  const handleChatToggle = useCallback((isOpen) => {
    setIsChatOpen(isOpen);
  }, []);

  // Memoize the dark mode toggle handler
  const handleDarkModeToggle = useCallback((isDark) => {
    setIsDarkMode(isDark);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <ScrollProgress />
      <Header isDarkMode={isDarkMode} setIsDarkMode={handleDarkModeToggle} />
      <main className="flex-grow">
        <MemoizedHeroSection />
        <MemoizedServicesSection />
        <MemoizedBenefitsSection />
        <MemoizedTestimonialsSection />
        <MemoizedROICalculatorSection />
        <MemoizedCallToActionSection />
      </main>
      <Footer />
      <LiveChat isChatOpen={isChatOpen} setIsChatOpen={handleChatToggle} />
    </div>
  );
};

export default memo(Index);