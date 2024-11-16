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
    content: "McKenzie was experienced and knowledgeable. Great communication, also great modern systems and processes to create smooth communication between tenant, landlord and property manager. Highly recommend using his service"
  },
  {
    name: "Zach Mckay",
    type: "Former Tenant",
    content: "While searching for a house to purchase, we leased a property from McKenzie. Throughout our time there, we encountered no problems at all. I highly recommend contacting Property Partners if you're seeking a reliable agent."
  },
  {
    name: "Peter Malthus",
    type: "Current Tenant",
    content: "McKenzie has been fantastic to deal with. Any issue that has arisen, whilst renting this property, has been resolved swiftly and painlessly. My children and I greatly appreciate the hassle-free nature of working with Property Partner."
  },
  {
    name: "Qing Xu",
    type: "Property Owner",
    content: "My house was rented out by McKenzie last week. I am very lucky to choose McKenzie as my rental agent. Because this is my first time renting my house, McKenzie proved to be the most professional and responsible agent. Every step was perfect, from healthy home assessment to finding tenants. Highly recommend."
  },
  {
    name: "Lynette Stevenson",
    type: "Property Owner",
    content: "McKenzie was easy to communicate with, quick to follow up if any issues arose around the rental property. I found McKenzie to be a great property manager and would highly recommend his services."
  },
  {
    name: "Brendan Stafford",
    type: "Property Owner",
    content: "Great communication, great support and a straightforward way to help me get my tricky property ready for renting. Highly recommend Mckenzie and the property partners team."
  },
  {
    name: "Sean Dudson",
    type: "Property Owner",
    content: "McKenzie outperformed in terms of the rental income we asked to the point where he covered his own fee. I have recommended Property Partner to clients and friends and all have been blown away by the service provided."
  },
  {
    name: "Leith Skinner",
    type: "Former Tenant",
    content: "As a tenant, I found Property Partner very professional and personable to deal with. Any concerns/questions were addressed in a prompt and respectful manner ensuring that the tenant felt supported."
  },
  {
    name: "Jake Mitchell",
    type: "Property Owner",
    content: "Property Partner has managed my rental property for the past 2 years and during that 2 years they've done an amazing job. McKenzie has been fantastic to deal with and someone I can trust and turn to if I have any questions."
  },
  {
    name: "Anna Shevchenko",
    type: "Former Tenant",
    content: "I had a pleasure to be McKenzie's tenant for one and a half years. He was very professional, supportive and fair. He replied immediately when I had a concern and resolved the issues straight away. Definitely the best property manager I've had."
  },
  {
    name: "Gavvy Dhillon",
    type: "Former Tenant",
    content: "It was fantastic experience with property management. Very reliable and helpful people even after leaving the rental property. Always refer them if someone looking for property."
  }
];

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
            onClick={() => instanceRef.current?.prev()}
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="absolute top-1/2 -right-4 z-10 transform -translate-y-1/2 w-12 h-12 rounded-full bg-white/90 dark:bg-charcoal/90 backdrop-blur-sm shadow-lg hover:bg-white dark:hover:bg-charcoal transition-all duration-300"
            onClick={() => instanceRef.current?.next()}
          >
            <ChevronRight className="h-6 w-6" />
          </Button>

          <div ref={sliderRef} className="keen-slider overflow-visible">
            {testimonials.map((testimonial, idx) => (
              <motion.div
                key={idx}
                className="keen-slider__slide"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
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
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;