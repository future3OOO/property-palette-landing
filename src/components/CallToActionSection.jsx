import React from 'react';
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const CallToActionSection = () => {
  return (
    <section className="bg-gradient-to-br from-deep-teal to-soft-teal dark:from-charcoal dark:to-dark-charcoal py-16 md:py-20">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="container mx-auto px-4 text-center"
      >
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 md:mb-6">
          Ready to Optimize Your Property Portfolio?
        </h2>
        <p className="text-cream text-base md:text-lg mb-8 md:mb-10 max-w-2xl mx-auto leading-relaxed opacity-90">
          Join thousands of property investors who have transformed their real estate management with our cutting-edge solutions.
        </p>
        <Button 
          size="lg"
          className="bg-white/95 hover:bg-white text-deep-teal dark:text-light-teal font-medium text-base py-5 px-8 h-auto shadow-lg hover:shadow-xl transition-all duration-300 rounded-xl"
        >
          Get Started Now
        </Button>
      </motion.div>
    </section>
  );
};

export default CallToActionSection;