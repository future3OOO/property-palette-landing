import React from 'react';
import { Star, Quote } from 'lucide-react';
import { Card } from "@/components/ui/card";
import { motion } from 'framer-motion';

const TestimonialCard = ({ testimonial, index }) => (
  <motion.div
    className="keen-slider__slide"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
  >
    <Card className="h-[400px] bg-white dark:bg-charcoal border-none shadow-card mx-2">
      <div className="p-8 h-full flex flex-col">
        <div className="mb-6">
          <Quote className="w-10 h-10 text-deep-teal dark:text-light-teal opacity-50" />
        </div>

        <div className="flex mb-4">
          {[...Array(5)].map((_, i) => (
            <Star 
              key={i} 
              className="w-5 h-5 text-deep-teal dark:text-light-teal fill-current" 
            />
          ))}
        </div>

        <div className="flex-grow overflow-y-auto scrollbar-thin scrollbar-thumb-deep-teal/20 scrollbar-track-transparent pr-2">
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            {testimonial.content}
          </p>
        </div>

        <div className="mt-6 pt-6 border-t border-deep-teal/10 dark:border-light-teal/10">
          <p className="font-semibold text-lg text-deep-teal dark:text-light-teal">
            {testimonial.name}
          </p>
          <p className="text-gray-500 dark:text-gray-400">
            {testimonial.type}
          </p>
        </div>
      </div>
    </Card>
  </motion.div>
);

export default React.memo(TestimonialCard);