
import React, { memo } from 'react';
import { motion, LazyMotion, domAnimation } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Sparkles, HeadphonesIcon } from 'lucide-react';

// Move animation variants outside component to prevent recreation
const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const floatingVariants = {
  initial: { y: 20 },
  animate: { 
    y: 0,
    transition: { 
      duration: 1, 
      repeat: Infinity, 
      repeatType: "reverse", 
      ease: "easeInOut" 
    }
  }
};

const phoneVariants = {
  initial: { y: 20 },
  animate: { 
    y: 0,
    transition: { 
      duration: 3, 
      repeat: Infinity, 
      repeatType: "reverse", 
      ease: "easeInOut" 
    }
  }
};

const HeroSection = () => {
  return (
    <section className="relative py-16 md:py-20 lg:py-32 overflow-hidden bg-cream dark:bg-charcoal">
      <div className="absolute inset-0 bg-grid-black/[0.02] dark:bg-grid-white/[0.02]" />
      
      {/* Visual accent - decorative elements - optimized for different screen sizes */}
      <div className="absolute top-10 md:top-20 left-5 md:left-10 w-12 md:w-20 h-12 md:h-20 border-t-2 border-l-2 border-deep-teal/30 dark:border-light-teal/30 rounded-tl-xl" />
      <div className="absolute bottom-10 md:bottom-20 right-5 md:right-10 w-12 md:w-20 h-12 md:h-20 border-b-2 border-r-2 border-deep-teal/30 dark:border-light-teal/30 rounded-br-xl" />
      <div className="absolute top-1/3 right-4 md:right-8 w-8 md:w-12 h-8 md:h-12 rounded-full bg-deep-teal/5 dark:bg-light-teal/5 blur-xl" />
      <div className="absolute bottom-1/4 left-8 md:left-16 w-10 md:w-16 h-10 md:h-16 rounded-full bg-deep-teal/5 dark:bg-light-teal/5 blur-xl" />
      
      <div className="container mx-auto px-4 sm:px-6 relative">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-20">
          <LazyMotion features={domAnimation}>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex-1 text-left"
            >
              <div className="inline-flex items-center gap-2 px-3 md:px-4 py-1.5 md:py-2 rounded-full bg-deep-teal/10 dark:bg-light-teal/10 text-deep-teal dark:text-light-teal text-xs md:text-sm font-medium mb-4 md:mb-6">
                <span>Transform Your Property Management</span>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 text-deep-teal dark:text-light-teal leading-tight">
                Simplified Property Management for Modern Landlords
              </h1>
              <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-6 md:mb-8 max-w-2xl leading-relaxed tracking-wide">
                Your Partner in Stress-Free and Transparent Rental Property Management, Ensuring Positive Experiences for All
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-deep-teal hover:bg-soft-teal text-white dark:bg-light-teal dark:hover:bg-bright-teal dark:text-deep-teal font-medium transition-all duration-300 group rounded-full px-6 py-5 h-12 shadow-md hover:shadow-deep-teal/20 dark:hover:shadow-light-teal/20"
                >
                  Get Started Now
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-deep-teal hover:bg-deep-teal/5 text-deep-teal dark:border-light-teal dark:hover:bg-light-teal/5 dark:text-light-teal transition-all duration-300 group rounded-full h-12"
                >
                  <Phone className="mr-2 h-4 w-4" />
                  Contact Us
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex-1 relative mt-12 lg:mt-0"
            >
              <div className="relative max-w-[300px] mx-auto">
                {/* Enhanced interactive phone image with parallax effect */}
                <motion.div
                  variants={phoneVariants}
                  initial="initial"
                  animate="animate"
                  className="relative z-20"
                >
                  <div className="w-[250px] sm:w-[300px] h-[500px] sm:h-[600px] mx-auto rounded-3xl shadow-2xl border-8 border-white dark:border-gray-800 bg-white dark:bg-charcoal p-4 transition-all duration-300 hover:rotate-1">
                    <div className="h-full w-full bg-white dark:bg-charcoal rounded-2xl overflow-hidden">
                      <img 
                        src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
                        alt="Property Management Dashboard"
                        className="w-full h-full object-cover"
                        loading="lazy"
                        width="300"
                        height="600"
                      />
                    </div>
                  </div>
                </motion.div>

                <div className="absolute -top-4 -right-4 w-16 sm:w-24 h-16 sm:h-24 bg-deep-teal/10 dark:bg-light-teal/10 rounded-full blur-xl" />
                <div className="absolute -bottom-4 -left-4 w-16 sm:w-24 h-16 sm:h-24 bg-deep-teal/10 dark:bg-light-teal/10 rounded-full blur-xl" />

                {/* Enhanced Smart Management message with icon and better styling */}
                <motion.div
                  initial={{ x: -20, y: -20 }}
                  animate={{ x: 0, y: 0 }}
                  transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
                  className="absolute top-16 sm:top-20 -left-4 sm:-left-10 z-30 hidden sm:block"
                >
                  <div className="bg-white dark:bg-charcoal p-3 sm:p-4 rounded-xl shadow-lg border border-deep-teal/20 dark:border-light-teal/20 hover:border-deep-teal dark:hover:border-light-teal transition-colors duration-300">
                    <div className="flex items-center gap-2">
                      <Sparkles className="h-4 sm:h-5 w-4 sm:w-5 text-deep-teal dark:text-light-teal" />
                      <p className="text-xs sm:text-sm font-medium text-deep-teal dark:text-light-teal">Smart Management</p>
                    </div>
                  </div>
                </motion.div>

                {/* Enhanced 24/7 Support message with icon and better styling */}
                <motion.div
                  initial={{ x: 20, y: 20 }}
                  animate={{ x: 0, y: 0 }}
                  transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", ease: "easeInOut", delay: 0.5 }}
                  className="absolute bottom-16 sm:bottom-20 -right-4 sm:-right-10 z-30 hidden sm:block"
                >
                  <div className="bg-white dark:bg-charcoal p-3 sm:p-4 rounded-xl shadow-lg border border-deep-teal/20 dark:border-light-teal/20 hover:border-deep-teal dark:hover:border-light-teal transition-colors duration-300">
                    <div className="flex items-center gap-2">
                      <HeadphonesIcon className="h-4 sm:h-5 w-4 sm:w-5 text-deep-teal dark:text-light-teal" />
                      <p className="text-xs sm:text-sm font-medium text-deep-teal dark:text-light-teal">24/7 Support</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </LazyMotion>
        </div>
      </div>
    </section>
  );
};

export default memo(HeroSection);
