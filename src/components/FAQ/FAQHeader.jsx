import { motion } from 'framer-motion';
import { HelpCircle } from 'lucide-react';

const FAQHeader = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.2 }}
    className="text-center mb-16"
  >
    <div className="inline-flex items-center justify-center mb-6">
      <div className="bg-deep-teal/10 dark:bg-soft-teal/10 p-4 rounded-full">
        <HelpCircle className="w-8 h-8 text-deep-teal dark:text-soft-teal" />
      </div>
    </div>
    <h1 className="text-4xl md:text-5xl font-bold mb-6">
      <span className="text-deep-teal dark:text-soft-teal">Frequently </span>
      <span className="text-soft-teal dark:text-light-teal">Asked Questions</span>
    </h1>
    <p className="text-gray-600 dark:text-gray-300 text-lg font-normal leading-relaxed max-w-2xl mx-auto">
      Everything you need to know about our property management services. Can't find what you're looking for? Feel free to contact us.
    </p>
  </motion.div>
);

export default FAQHeader;