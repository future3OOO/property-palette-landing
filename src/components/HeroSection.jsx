import React from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative py-20 lg:py-32 overflow-hidden bg-cream dark:bg-charcoal">
      <div className="absolute inset-0 bg-grid-black/[0.02] dark:bg-grid-white/[0.02]" />
      <div className="container mx-auto px-6 relative">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 text-left"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-deep-teal/10 dark:bg-light-teal/10 text-deep-teal dark:text-light-teal text-sm font-medium mb-6">
              Transform Your Property Management
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-deep-teal dark:text-light-teal leading-tight">
              Simplified Property Management for Modern Landlords
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl">
              Your Partner in Stress-Free and Transparent Rental Property Management, Ensuring Positive Experiences for All
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-deep-teal hover:bg-soft-teal text-white dark:bg-light-teal dark:hover:bg-bright-teal dark:text-deep-teal font-medium transition-all group rounded-full"
              >
                Get Started Now
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-deep-teal hover:bg-deep-teal/5 text-deep-teal dark:border-light-teal dark:hover:bg-light-teal/5 dark:text-light-teal transition-all group rounded-full"
              >
                <Phone className="mr-2 h-4 w-4" />
                Contact Us
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="flex-1 relative"
          >
            <div className="relative">
              <motion.div
                initial={{ y: 20 }}
                animate={{ y: 0 }}
                transition={{ duration: 1, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
                className="relative z-20"
              >
                <div className="w-[300px] h-[600px] mx-auto rounded-3xl shadow-2xl border-8 border-white dark:border-gray-800 bg-white dark:bg-charcoal p-4">
                  <div className="h-full w-full bg-white dark:bg-charcoal rounded-2xl overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
                      alt="Property Management Dashboard"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </motion.div>

              <div className="absolute -top-4 -right-4 w-24 h-24 bg-deep-teal/10 dark:bg-light-teal/10 rounded-full blur-xl" />
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-deep-teal/10 dark:bg-light-teal/10 rounded-full blur-xl" />

              <motion.div
                initial={{ x: -20, y: -20 }}
                animate={{ x: 0, y: 0 }}
                transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
                className="absolute top-20 -left-10 z-30"
              >
                <div className="bg-white dark:bg-charcoal p-4 rounded-xl shadow-lg border border-deep-teal/10 dark:border-light-teal/10">
                  <p className="text-sm font-medium text-deep-teal dark:text-light-teal">Smart Management</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ x: 20, y: 20 }}
                animate={{ x: 0, y: 0 }}
                transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", ease: "easeInOut", delay: 0.5 }}
                className="absolute bottom-20 -right-10 z-30"
              >
                <div className="bg-white dark:bg-charcoal p-4 rounded-xl shadow-lg border border-deep-teal/10 dark:border-light-teal/10">
                  <p className="text-sm font-medium text-deep-teal dark:text-light-teal">24/7 Support</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;