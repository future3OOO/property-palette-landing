import React from 'react';
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight } from 'lucide-react';

const CallToActionSection = () => {
  return (
    <section className="bg-deep-teal dark:bg-light-teal py-24">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="container mx-auto px-4 text-center"
      >
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white dark:text-deep-teal mb-6">
            Ready to Optimize Your Property Portfolio?
          </h2>
          <p className="text-cream/90 dark:text-charcoal/90 text-lg mb-10 leading-relaxed">
            Join thousands of property investors who have transformed their real estate management with our cutting-edge solutions.
          </p>
          <Button 
            size="lg"
            className="bg-white hover:bg-cream text-deep-teal dark:bg-charcoal dark:hover:bg-gray-800 dark:text-light-teal font-medium text-base py-6 px-8 h-auto rounded-full group"
          >
            Get Started Now
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </motion.div>
    </section>
  );
};

export default CallToActionSection;