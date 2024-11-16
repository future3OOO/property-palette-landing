import React from 'react';
import { motion } from 'framer-motion';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const testimonials = [
  {
    name: "Eamon Wood",
    type: "Property Owner",
    rating: 5,
    content: "McKenzie was experienced and knowledgeable. Great communication, also great modern systems and processes to create smooth communication between tenant, landlord and property manager. Highly recommend using his service"
  },
  {
    name: "Zach Mckay",
    type: "Former Tenant",
    rating: 5,
    content: "While searching for a house to purchase, we leased a property from McKenzie. Throughout our time there, we encountered no problems at all. I highly recommend contacting Property Partners if you're seeking a reliable agent."
  },
  {
    name: "Peter Malthus",
    type: "Current Tenant",
    rating: 5,
    content: "McKenzie has been fantastic to deal with. Any issue that has arisen, whilst renting this property, has been resolved swiftly and painlessly. My children and I greatly appreciate the hassle-free nature of working with Property Partner. Thank you."
  },
  {
    name: "Qing Xu",
    type: "Property Owner",
    rating: 5,
    content: "My house was rented out by McKenzie last week. I am very lucky to choose McKenzie as my rental agent. Because this is my first time renting my house, I don't have any idea or experience in renting, after contacting several agents, I just feel that McKenzie is the most professional. Now it turned out that my feeling was right, McKenzie was not only professional, but also very responsible. Every step is perfect, such as healthy home assessment, advertisement, finding tenants etc. I found McKenzie to be a great property manager. Highly recommend."
  },
  {
    name: "Lynette Stevenson",
    type: "Property Owner",
    rating: 5,
    content: "McKenzie was easy to communicate with, quick to follow up if any issues arose around the rental property. I found McKenzie to be a great property manager and would highly recommend his services."
  }
];

const TestimonialsSection = () => {
  const [sliderRef, instanceRef] = useKeenSlider({
    mode: "snap",
    slides: {
      perView: 3,
      spacing: 24,
    },
    breakpoints: {
      "(max-width: 1024px)": {
        slides: { perView: 2, spacing: 16 }
      },
      "(max-width: 640px)": {
        slides: { perView: 1, spacing: 16 }
      }
    },
    slideChanged() {
      // Update active slide indicator
    }
  });

  return (
    <section className="py-24 bg-white dark:bg-charcoal overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="text-deep-teal dark:text-soft-teal">What Our Clients </span>
            <span className="text-soft-teal dark:text-light-teal">Say</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Don't just take our word for it - hear from our satisfied clients about their experience with Property Partner.
          </p>
        </motion.div>

        <div className="relative -mx-6 px-6">
          {/* Navigation Buttons */}
          <div className="absolute top-1/2 -left-4 z-10 transform -translate-y-1/2">
            <Button
              variant="ghost"
              size="icon"
              className="w-12 h-12 rounded-full bg-white/90 dark:bg-charcoal/90 backdrop-blur-sm shadow-lg hover:bg-white dark:hover:bg-charcoal"
              onClick={() => instanceRef.current?.prev()}
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
          </div>

          <div className="absolute top-1/2 -right-4 z-10 transform -translate-y-1/2">
            <Button
              variant="ghost"
              size="icon"
              className="w-12 h-12 rounded-full bg-white/90 dark:bg-charcoal/90 backdrop-blur-sm shadow-lg hover:bg-white dark:hover:bg-charcoal"
              onClick={() => instanceRef.current?.next()}
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          </div>

          {/* Slider */}
          <div ref={sliderRef} className="keen-slider overflow-visible">
            {testimonials.map((testimonial, idx) => (
              <motion.div
                key={idx}
                className="keen-slider__slide"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <Card className="h-[400px] bg-cream dark:bg-charcoal-gray border-none shadow-soft hover:shadow-medium transition-all duration-300">
                  <div className="p-6 h-full flex flex-col">
                    <div className="mb-4">
                      <Quote className="w-8 h-8 text-deep-teal dark:text-light-teal opacity-50" />
                    </div>

                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star 
                          key={i} 
                          className="w-4 h-4 text-deep-teal dark:text-light-teal fill-current" 
                        />
                      ))}
                    </div>

                    <div className="flex-grow overflow-y-auto scrollbar-thin scrollbar-thumb-deep-teal/20 scrollbar-track-transparent pr-2">
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                        {testimonial.content}
                      </p>
                    </div>

                    <div className="mt-4 pt-4 border-t border-deep-teal/10 dark:border-light-teal/10">
                      <p className="font-semibold text-deep-teal dark:text-light-teal">
                        {testimonial.name}
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {testimonial.type}
                      </p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;