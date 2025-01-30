import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';

const HeroSection = () => (
  <section className="relative py-24 overflow-hidden">
    <div className="container mx-auto px-6">
      <div className="flex flex-col lg:flex-row items-center gap-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 max-w-2xl"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-deep-teal dark:text-light-teal leading-tight">
            Maximize Your Property Investment
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
            Join thousands of property owners who trust us to manage their investments. 
            Experience professional property management with a personal touch.
          </p>
          <div className="flex gap-4">
            <Button
              size="lg"
              className="bg-deep-teal hover:bg-light-teal text-white dark:bg-light-teal dark:text-deep-teal dark:hover:bg-deep-teal dark:hover:text-white transition-all group"
            >
              Get Started
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="flex-1 relative"
        >
          <img 
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
            alt="Modern Property Management"
            className="rounded-2xl shadow-xl w-full object-cover aspect-[4/3]"
          />
          <div className="absolute -bottom-8 -right-8 bg-white/90 dark:bg-charcoal/90 backdrop-blur-sm p-6 rounded-xl shadow-lg max-w-xs">
            <p className="text-deep-teal dark:text-light-teal font-semibold mb-2">Property Partner Advantage</p>
            <p className="text-gray-600 dark:text-gray-300 text-sm">Professional management solutions that protect and grow your investment.</p>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default HeroSection;