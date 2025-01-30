import React, { memo } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { services } from '../constants/services';
import { ArrowRight } from 'lucide-react';

// Move animation variants outside
const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const ServiceCard = memo(({ service, index }) => (
  <motion.div
    key={index}
    variants={cardVariants}
    initial="hidden"
    whileInView="visible"
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="relative group"
  >
    <div className={`bg-gradient-to-br ${service.color} text-white rounded-xl p-3 inline-block mb-4`}>
      <service.icon className="w-6 h-6" />
    </div>
    <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
      {service.title}
    </h3>
    <p className="text-[#8E9196] dark:text-gray-300 mb-4">
      {service.description}
    </p>
    {service.link ? (
      <Link to={service.link}>
        <Button
          variant="ghost"
          className="text-[#8B5CF6] dark:text-[#F97316] hover:text-[#7C3AED] dark:hover:text-[#EA580C] group/button"
        >
          Learn more
          <ArrowRight className="ml-2 w-4 h-4 group-hover/button:translate-x-1 transition-transform" />
        </Button>
      </Link>
    ) : (
      <Button
        variant="ghost"
        className="text-[#8B5CF6] dark:text-[#F97316] hover:text-[#7C3AED] dark:hover:text-[#EA580C] group/button"
      >
        Learn more
        <ArrowRight className="ml-2 w-4 h-4 group-hover/button:translate-x-1 transition-transform" />
      </Button>
    )}
  </motion.div>
));

const ServicesSection = () => {
  return (
    <section className="py-24 bg-white dark:bg-charcoal">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="bg-gradient-to-r from-[#8B5CF6] to-[#F97316] bg-clip-text text-transparent">
              Modern Property Solutions
            </span>
          </h2>
          <p className="text-[#8E9196] dark:text-gray-300 text-lg">
            Discover our comprehensive suite of property management services designed to maximize your investment potential.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default memo(ServicesSection);