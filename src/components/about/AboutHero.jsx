import React from 'react';
import { motion } from 'framer-motion';
import { History } from 'lucide-react';

const AboutHero = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-grid-black/[0.02] dark:bg-grid-white/[0.02]" />
      <div className="container mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <div className="inline-flex items-center justify-center p-3 mb-6 rounded-xl bg-deep-teal/10 dark:bg-light-teal/10">
            <History className="w-6 h-6 text-deep-teal dark:text-light-teal" />
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-deep-teal dark:text-soft-teal">Our </span>
            <span className="text-soft-teal dark:text-light-teal">Story</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
            From our humble beginnings in the late 1980s to becoming one of Christchurch's most trusted property management firms, discover the journey that shaped who we are today.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutHero;