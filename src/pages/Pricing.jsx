import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import PricingHeader from '@/components/pricing/PricingHeader';
import PricingTiers from '@/components/pricing/PricingTiers';
import ComparisonTable from '@/components/pricing/ComparisonTable';
import PricingFAQ from '@/components/pricing/PricingFAQ';

const Pricing = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDarkMode);
  }, [isDarkMode]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-cream to-white dark:from-charcoal dark:to-dark-charcoal">
      <Header isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      
      <main className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-7xl mx-auto space-y-24">
          <PricingHeader />

          <div className="relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="grid lg:grid-cols-2 gap-8 lg:gap-12"
            >
              <PricingTiers />
              <ComparisonTable />
            </motion.div>
          </div>

          <PricingFAQ />

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="relative"
          >
            <div className="rounded-3xl p-12 text-center bg-gradient-to-br from-deep-teal/5 to-light-teal/5 dark:from-light-teal/5 dark:to-bright-teal/5">
              <Sparkles className="w-8 h-8 text-deep-teal dark:text-light-teal mx-auto mb-6" />
              <h3 className="text-2xl md:text-3xl font-bold text-deep-teal dark:text-light-teal mb-4">
                Ready to Transform Your Property Management?
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
                Join thousands of property owners who trust us with their investments.
                Start your journey towards effortless property management today.
              </p>
              <Button
                onClick={() => navigate('/contact')}
                size="lg"
                className="bg-deep-teal hover:bg-light-teal text-white dark:bg-light-teal dark:text-deep-teal dark:hover:bg-deep-teal dark:hover:text-white transition-all duration-300 font-medium px-8 py-6 h-auto rounded-xl group"
              >
                Get Started Now
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default Pricing;