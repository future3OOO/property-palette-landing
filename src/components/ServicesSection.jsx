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
    color: "from-blue-500/20 to-blue-600/20"
  },
  {
    icon: Shield,
    title: "Tenant Selection",
    description: "Comprehensive tenant screening with thorough background and reference checks to find reliable tenants.",
    color: "from-green-500/20 to-green-600/20",
    link: "/faq?tab=tenancy"
  },
  {
    icon: ClipboardCheck,
    title: "Compliance Management",
    description: "Stay compliant with the latest regulations including Healthy Homes Standards and tenancy laws.",
    color: "from-yellow-500/20 to-yellow-600/20"
  },
  {
    icon: HeartHandshake,
    title: "Relationship Management",
    description: "Building positive relationships between landlords and tenants for long-term success.",
    color: "from-purple-500/20 to-purple-600/20"
  }
];

const ServicesSection = () => {
  return (
    <section className="py-24 bg-white dark:bg-charcoal-gray">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="text-deep-teal dark:text-soft-teal">Cutting-Edge </span>
            <span className="text-soft-teal dark:text-light-teal">Property Solutions</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg">
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
              <div className="absolute inset-0 bg-gradient-to-br dark:opacity-20 rounded-2xl transition-all duration-300 group-hover:scale-[0.98] -z-10"
                style={{ background: `linear-gradient(to bottom right, ${service.color})` }}
              />
              <div className="bg-white dark:bg-charcoal-gray border border-gray-100 dark:border-gray-800 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300">
                <div className="bg-deep-teal/10 dark:bg-light-teal/10 text-deep-teal dark:text-light-teal rounded-xl p-3 inline-block mb-4">
                  <service.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {service.description}
                </p>
                {service.link ? (
                  <Link to={service.link}>
                    <Button
                      variant="ghost"
                      className="text-deep-teal dark:text-light-teal hover:text-light-teal dark:hover:text-deep-teal group/button"
                    >
                      Learn more
                      <ArrowRight className="ml-2 w-4 h-4 group-hover/button:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                ) : (
                  <Button
                    variant="ghost"
                    className="text-deep-teal dark:text-light-teal hover:text-light-teal dark:hover:text-deep-teal group/button"
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
