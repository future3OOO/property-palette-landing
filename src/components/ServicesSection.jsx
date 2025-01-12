import React from 'react';
import { motion } from 'framer-motion';
import { Home, Shield, ClipboardCheck, HeartHandshake, ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

const services = [
  {
    icon: Home,
    title: "Property Management",
    description: "Full-service property management including rent collection, maintenance coordination, and regular inspections.",
    color: "from-[#8B5CF6] to-[#7C3AED]"
  },
  {
    icon: Shield,
    title: "Tenant Selection",
    description: "Comprehensive tenant screening with thorough background and reference checks to find reliable tenants.",
    color: "from-[#F97316] to-[#EA580C]",
    link: "/faq?tab=tenancy"
  },
  {
    icon: ClipboardCheck,
    title: "Compliance Management",
    description: "Stay compliant with the latest regulations including Healthy Homes Standards and tenancy laws.",
    color: "from-[#8B5CF6] to-[#7C3AED]"
  },
  {
    icon: HeartHandshake,
    title: "Relationship Management",
    description: "Building positive relationships between landlords and tenants for long-term success.",
    color: "from-[#F97316] to-[#EA580C]"
  }
];

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
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
            >
              <div className="bg-white dark:bg-charcoal border border-gray-100 dark:border-gray-800 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300">
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
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;