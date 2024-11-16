import React from 'react';
import { motion } from 'framer-motion';

const AboutTimeline = () => {
  return (
    <section className="py-24 bg-white dark:bg-charcoal">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gradient-to-b from-deep-teal via-soft-teal to-light-teal dark:from-light-teal dark:via-soft-teal dark:to-bright-teal"></div>

            <div className="space-y-16">
              {/* 1980s */}
              <TimelineItem
                year="1980s"
                title="The Beginning"
                content="Established as David Lawrence Real Estate, laying the foundation for what would become one of Christchurch's oldest property management firms."
                side="left"
              />

              {/* 1990s-2000s */}
              <TimelineItem
                year="1990s-2000s"
                title="Building Trust"
                content="Built lasting relationships with landlords, some of whom have trusted us with their assets for over two decades."
                side="right"
              />

              {/* 2015 */}
              <TimelineItem
                year="2015"
                title="The Transformation"
                content="Restructured and rebranded as Property Partner to better represent our ethos and the comprehensive services we offer."
                side="left"
              />

              {/* Present */}
              <TimelineItem
                year="Present"
                title="Modern Evolution"
                content="Continuing to evolve and adapt, focusing on building true partnerships with both landlords and tenants."
                side="right"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const TimelineItem = ({ year, title, content, side }) => {
  const isLeft = side === 'left';
  
  return (
    <motion.div
      initial={{ opacity: 0, x: isLeft ? -20 : 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      className={`relative ${isLeft ? 'text-right mr-1/2 pr-16' : 'ml-1/2 pl-16'}`}
    >
      <div className={`absolute ${isLeft ? '-right-3' : '-left-3'} top-3 w-6 h-6 rounded-full bg-deep-teal dark:bg-light-teal`}>
        <div className="absolute inset-2 rounded-full bg-white dark:bg-charcoal"></div>
      </div>
      
      <div className="bg-cream dark:bg-charcoal-gray p-6 rounded-xl shadow-soft hover:shadow-medium transition-shadow duration-300">
        <span className="text-deep-teal dark:text-light-teal font-semibold">{year}</span>
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mt-1 mb-2">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300">{content}</p>
      </div>
    </motion.div>
  );
};

export default AboutTimeline;