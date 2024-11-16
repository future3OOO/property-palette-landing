import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Users, Home } from 'lucide-react';

const AboutPromise = () => {
  return (
    <section className="py-24 bg-white dark:bg-charcoal">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-16">
            <span className="text-deep-teal dark:text-soft-teal">The Property Partner </span>
            <span className="text-soft-teal dark:text-light-teal">Promise</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <PromiseCard
              icon={Users}
              title="Best Tenant Selection"
              description="We start by selecting the right tenants from day one, as this is the primary component of a good tenancy."
            />
            <PromiseCard
              icon={Shield}
              title="Guaranteed Rent"
              description="We're so confident in our selection process that we guarantee rent will be paid for the duration of fixed-term tenancies."
            />
            <PromiseCard
              icon={Home}
              title="True Partnership"
              description="When we work together as true partners, everybody wins - both landlords and tenants."
            />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-16 p-8 bg-cream dark:bg-charcoal-gray rounded-2xl"
          >
            <p className="text-xl text-deep-teal dark:text-light-teal font-semibold">
              Think of us as your Property Partner, because when we work together, everybody wins.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

const PromiseCard = ({ icon: Icon, title, description }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    className="bg-cream dark:bg-charcoal-gray p-6 rounded-xl shadow-soft hover:shadow-medium transition-all duration-300"
  >
    <div className="bg-deep-teal/10 dark:bg-light-teal/10 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
      <Icon className="w-6 h-6 text-deep-teal dark:text-light-teal" />
    </div>
    <h3 className="text-lg font-semibold text-deep-teal dark:text-light-teal mb-2">{title}</h3>
    <p className="text-gray-600 dark:text-gray-300">{description}</p>
  </motion.div>
);

export default AboutPromise;