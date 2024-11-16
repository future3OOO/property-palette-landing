import { motion } from 'framer-motion';

export const ServiceCard = ({ icon, title, description }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    className="bg-white dark:bg-charcoal p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
  >
    <div className="bg-cream/50 dark:bg-gray-800/50 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
      {icon}
    </div>
    <h3 className="text-xl font-semibold text-deep-teal dark:text-light-teal mb-4">{title}</h3>
    <p className="text-gray-600 dark:text-gray-300">{description}</p>
  </motion.div>
);