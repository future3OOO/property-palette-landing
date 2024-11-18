import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { cn } from "@/lib/utils";

const Section = ({ 
  title, 
  children, 
  id, 
  expandedSections, 
  setExpandedSections,
  className 
}) => {
  const isExpanded = expandedSections.includes(id);

  const toggleSection = () => {
    setExpandedSections(prev => 
      isExpanded 
        ? prev.filter(secId => secId !== id)
        : [...prev, id]
    );
  };

  return (
    <div className={cn(
      "rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-charcoal shadow-sm mb-4",
      className
    )}>
      <button
        onClick={toggleSection}
        className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50 dark:hover:bg-dark-charcoal rounded-t-lg transition-colors"
        aria-expanded={isExpanded}
      >
        <h3 className="text-lg font-semibold text-deep-teal dark:text-light-teal">
          {title}
        </h3>
        <motion.div
          animate={{ rotate: isExpanded ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronDown className="h-5 w-5 text-gray-500 dark:text-gray-400" />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="p-4 border-t border-gray-100 dark:border-gray-800">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Section;