import React from 'react';
import { motion } from 'framer-motion';
import { DollarSign, Camera, ClipboardCheck, Search, PhoneCall, UserCircle2, LayoutDashboard, LineChart } from 'lucide-react';
import { Card } from "@/components/ui/card";

const benefits = [
  {
    icon: DollarSign,
    title: "Transparent Pricing",
    description: "No hidden fees - transparent 8.5% management fee"
  },
  {
    icon: Camera,
    title: "Professional Media",
    description: "Professional photography included"
  },
  {
    icon: ClipboardCheck,
    title: "Detailed Reports",
    description: "Detailed property condition reports"
  },
  {
    icon: Search,
    title: "Regular Inspections",
    description: "Regular property inspections"
  },
  {
    icon: PhoneCall,
    title: "24/7 Support",
    description: "24/7 maintenance coordination"
  },
  {
    icon: UserCircle2,
    title: "Personal Manager",
    description: "Dedicated property manager"
  },
  {
    icon: LayoutDashboard,
    title: "Online Portal",
    description: "Online owner portal access"
  },
  {
    icon: LineChart,
    title: "Financial Reports",
    description: "Monthly financial reporting"
  }
];

const BenefitsSection = () => {
  return (
    <section className="py-24 bg-white dark:bg-charcoal-gray">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="text-deep-teal dark:text-soft-teal">Why Choose </span>
            <span className="text-soft-teal dark:text-light-teal">Property Partner?</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg">
            We make property management simple and stress-free with our comprehensive service offering
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full p-6 hover:shadow-lg transition-shadow duration-300 bg-white dark:bg-charcoal-gray border border-gray-100 dark:border-gray-800">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="p-3 rounded-full bg-gradient-to-br from-deep-teal/10 to-light-teal/10">
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;