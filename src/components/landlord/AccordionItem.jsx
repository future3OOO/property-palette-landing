import { motion } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

export const AccordionItem = ({ title, content, isOpen, onClick }) => (
  <motion.div 
    initial={false}
    animate={isOpen ? "open" : "closed"}
    className="border-b border-gray-200 dark:border-gray-700"
  >
    <button
      onClick={onClick}
      className="w-full flex justify-between items-center py-4 text-left group"
    >
      <span className="text-lg font-semibold text-deep-teal dark:text-light-teal group-hover:text-light-teal dark:group-hover:text-bright-teal transition-colors">
        {title}
      </span>
      {isOpen ? (
        <Minus className="h-5 w-5 text-deep-teal dark:text-light-teal group-hover:text-light-teal dark:group-hover:text-bright-teal transition-colors" />
      ) : (
        <Plus className="h-5 w-5 text-deep-teal dark:text-light-teal group-hover:text-light-teal dark:group-hover:text-bright-teal transition-colors" />
      )}
    </button>
    <motion.div 
      initial="collapsed"
      animate={isOpen ? "open" : "collapsed"}
      variants={{
        open: { opacity: 1, height: "auto", marginBottom: 16 },
        collapsed: { opacity: 0, height: 0, marginBottom: 0 }
      }}
      transition={{ duration: 0.3 }}
      className="overflow-hidden"
    >
      <p className="text-gray-600 dark:text-gray-300">{content}</p>
    </motion.div>
  </motion.div>
);