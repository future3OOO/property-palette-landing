import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Card } from "@/components/ui/card";

const AboutTransformation = () => {
  return (
    <section className="py-24 bg-cream dark:bg-charcoal-gray">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Card className="p-8 bg-white dark:bg-charcoal border-none shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="text-center space-y-4">
                  <h3 className="text-2xl font-bold text-deep-teal dark:text-light-teal">Then</h3>
                  <p className="text-xl text-gray-600 dark:text-gray-300">David Lawrence Real Estate</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Est. 1980s</p>
                </div>
              </Card>
              <div className="hidden md:block relative h-8">
                <ArrowRight className="absolute right-0 top-1/2 transform -translate-y-1/2 w-8 h-8 text-deep-teal dark:text-light-teal" />
              </div>
            </div>

            <div className="space-y-6">
              <Card className="p-8 bg-white dark:bg-charcoal border-none shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="text-center space-y-4">
                  <h3 className="text-2xl font-bold text-deep-teal dark:text-light-teal">Now</h3>
                  <p className="text-xl text-gray-600 dark:text-gray-300">Property Partner</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Since 2015</p>
                </div>
              </Card>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-16 text-center"
          >
            <Card className="p-8 bg-white/50 dark:bg-charcoal/50 border-none">
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                "Property Manager" is an old-school term that doesn't really capture what we do anymore. We're not just managing properties; we're partnering with you to make sure you get the most out of your investment and that tenants get the most out of their home.
              </p>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutTransformation;