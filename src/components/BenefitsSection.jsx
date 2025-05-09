import React, { memo } from 'react';
import { motion } from 'framer-motion';
import { benefits } from '../constants/benefits';
import { Card } from "@/components/ui/card";

const BenefitCard = memo(({ benefit, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
  >
    <Card className="h-full p-6 bg-white dark:bg-charcoal border border-deep-teal/10 dark:border-light-teal/10 hover:border-deep-teal dark:hover:border-light-teal transition-colors duration-300">
      <div className="flex flex-col items-start space-y-4">
        <div className="p-3 rounded-lg bg-deep-teal/10 dark:bg-light-teal/10">
          <benefit.icon className="w-6 h-6 text-deep-teal dark:text-light-teal" />
        </div>
        <h3 className="font-semibold text-lg text-deep-teal dark:text-light-teal">
          {benefit.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 text-sm">
          {benefit.description}
        </p>
      </div>
    </Card>
  </motion.div>
));

const BenefitsSection = () => {
  return (
    <section className="py-24 bg-white dark:bg-charcoal">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-deep-teal/10 dark:bg-light-teal/10 text-deep-teal dark:text-light-teal text-sm font-medium mb-6">
            Why Choose Property Partner?
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-deep-teal dark:text-light-teal">
            Everything you need to manage your property
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg">
            We make property management simple and stress-free with our comprehensive service offering
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {benefits.map((benefit, index) => (
            <BenefitCard key={index} benefit={benefit} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default memo(BenefitsSection);
