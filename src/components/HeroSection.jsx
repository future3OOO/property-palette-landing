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
            className="flex-1 text-center lg:text-left"
          >
            <span className="inline-block mb-6 text-deep-teal dark:text-light-teal font-medium">
              Transform Your Property Management
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-deep-teal dark:text-light-teal">
              Simplified Property Management for Modern Landlords
            </h1>
            <h2 className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto lg:mx-0">
              Your Partner in Stress-Free and Transparent Rental Property Management, Ensuring Positive Experiences for All
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                size="lg"
                className="bg-deep-teal hover:bg-soft-teal text-white dark:bg-light-teal dark:hover:bg-bright-teal dark:text-deep-teal font-medium transition-all group"
              >
                Get Started Now
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-deep-teal hover:bg-deep-teal/5 text-deep-teal dark:border-light-teal dark:hover:bg-light-teal/5 dark:text-light-teal transition-all group"
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
                <div className="w-[300px] h-[600px] mx-auto rounded-3xl shadow-2xl border-8 border-white dark:border-gray-800 bg-deep-teal dark:bg-light-teal p-4">
                  <div className="h-full w-full bg-white dark:bg-charcoal rounded-2xl overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
                      alt="Property Management Dashboard"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </motion.div>

              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-deep-teal/10 dark:bg-light-teal/5 rounded-full blur-3xl -z-10" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-soft-teal/10 dark:bg-bright-teal/5 rounded-full blur-2xl -z-10" />

              <motion.div
                initial={{ x: -20, y: -20 }}
                animate={{ x: 0, y: 0 }}
                transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
                className="absolute top-20 -left-10 z-30"
              >
                <div className="glass-effect p-4 rounded-lg shadow-lg">
                  <p className="text-sm font-medium text-deep-teal dark:text-light-teal">Smart Management</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ x: 20, y: 20 }}
                animate={{ x: 0, y: 0 }}
                transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", ease: "easeInOut", delay: 0.5 }}
                className="absolute bottom-20 -right-10 z-30"
              >
                <div className="glass-effect p-4 rounded-lg shadow-lg">
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