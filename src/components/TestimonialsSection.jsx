import React from 'react';
import { motion } from 'framer-motion';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from "@/components/ui/button";
import TestimonialCard from './testimonials/TestimonialCard';
import { testimonials } from '../constants/testimonials';

const TestimonialsSection = () => {
  const [sliderRef, instanceRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 32,
    },
    breakpoints: {
      "(max-width: 1024px)": {
        slides: { perView: 2, spacing: 24 }
      },
      "(max-width: 640px)": {
        slides: { perView: 1, spacing: 20 }
      }
    },
    loop: true,
    drag: true,
    defaultAnimation: {
      duration: 1000
    }
  });

  const handlePrevClick = React.useCallback(() => {
    instanceRef.current?.prev();
  }, [instanceRef]);

  const handleNextClick = React.useCallback(() => {
    instanceRef.current?.next();
  }, [instanceRef]);

  return (
    <section className="py-24 bg-gradient-to-b from-white to-cream dark:from-charcoal dark:to-charcoal-gray overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="text-gradient">What Our Clients Say</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Trusted by property owners and tenants across New Zealand
          </p>
        </motion.div>

        <div className="relative -mx-6 px-6">
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-1/2 -left-4 z-10 transform -translate-y-1/2 w-12 h-12 rounded-full bg-white/90 dark:bg-charcoal/90 backdrop-blur-sm shadow-lg hover:bg-white dark:hover:bg-charcoal transition-all duration-300"
            onClick={handlePrevClick}
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="absolute top-1/2 -right-4 z-10 transform -translate-y-1/2 w-12 h-12 rounded-full bg-white/90 dark:bg-charcoal/90 backdrop-blur-sm shadow-lg hover:bg-white dark:hover:bg-charcoal transition-all duration-300"
            onClick={handleNextClick}
          >
            <ChevronRight className="h-6 w-6" />
          </Button>

          <div ref={sliderRef} className="keen-slider overflow-visible">
            {testimonials.map((testimonial, idx) => (
              <TestimonialCard 
                key={idx}
                testimonial={testimonial}
                index={idx}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default React.memo(TestimonialsSection);