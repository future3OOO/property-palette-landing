import React, { Suspense, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollProgress from './components/ScrollProgress';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import BenefitsSection from './components/BenefitsSection';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import PricingPage from './pages/PricingPage';
import LandlordServices from './pages/LandlordServices';
import TenantServices from './pages/TenantServices';
import FAQPage from './pages/FAQPage';
import NotFoundPage from './pages/NotFoundPage';

// Lazy load below-the-fold components
const TestimonialsSection = React.lazy(() => import('./components/TestimonialsSection'));
const ROICalculatorSection = React.lazy(() => import('./components/ROICalculatorSection'));
const CallToActionSection = React.lazy(() => import('./components/CallToActionSection'));

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <ScrollProgress />
        <Header isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
        <main className="flex-grow">
          <Routes>
            <Route 
              path="/" 
              element={
                <>
                  <HeroSection />
                  <ServicesSection />
                  <BenefitsSection />
                  <Suspense fallback={<div className="h-96 flex items-center justify-center">Loading...</div>}>
                    <TestimonialsSection />
                    <ROICalculatorSection />
                    <CallToActionSection />
                  </Suspense>
                </>
              } 
            />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/landlord-services" element={<LandlordServices />} />
            <Route path="/tenant-services" element={<TenantServices />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;