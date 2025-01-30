import React, { useState, memo, useCallback, Suspense } from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import ServicesSection from '../components/ServicesSection';
import BenefitsSection from '../components/BenefitsSection';
import ScrollProgress from '../components/ScrollProgress';
import Footer from '../components/Footer';
import LiveChat from '../components/LiveChat';

// Lazy load below-the-fold components
const TestimonialsSection = React.lazy(() => import('../components/TestimonialsSection'));
const ROICalculatorSection = React.lazy(() => import('../components/ROICalculatorSection'));
const CallToActionSection = React.lazy(() => import('../components/CallToActionSection'));

// Loading fallback component
const SectionLoader = () => (
  <div className="w-full h-96 flex items-center justify-center">
    <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-deep-teal"></div>
  </div>
);

const Index = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleChatToggle = useCallback((isOpen) => {
    setIsChatOpen(isOpen);
  }, []);

  const handleDarkModeToggle = useCallback((isDark) => {
    setIsDarkMode(isDark);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <ScrollProgress />
      <Header isDarkMode={isDarkMode} setIsDarkMode={handleDarkModeToggle} />
      <main className="flex-grow">
        <HeroSection />
        <ServicesSection />
        <BenefitsSection />
        <Suspense fallback={<SectionLoader />}>
          <TestimonialsSection />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <ROICalculatorSection />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <CallToActionSection />
        </Suspense>
      </main>
      <Footer />
      <LiveChat isChatOpen={isChatOpen} setIsChatOpen={handleChatToggle} />
    </div>
  );
};

export default memo(Index);