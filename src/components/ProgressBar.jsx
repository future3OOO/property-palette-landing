import React from 'react';
import { motion } from 'framer-motion';

const ProgressBar = ({ scrollProgress }) => {
  return (
    <motion.div className="fixed top-0 left-0 right-0 z-50 h-1 bg-soft-gray dark:bg-charcoal-gray">
      <motion.div
        className="h-full bg-deep-teal dark:bg-deep-teal"
        style={{ width: `${scrollProgress}%` }}
        initial={{ width: 0 }}
        animate={{ width: `${scrollProgress}%` }}
        transition={{ ease: "linear", duration: 0.2 }}
      />
    </motion.div>
  );
};

export default ProgressBar;