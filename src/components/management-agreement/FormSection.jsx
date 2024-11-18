import React from 'react';
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";

const FormSection = ({ children, currentSection, sectionIndex }) => {
  if (currentSection !== sectionIndex) return null;

  return (
    <motion.div
      key={sectionIndex}
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.3 }}
    >
      <Card className="p-6 shadow-medium">
        <form className="space-y-6">
          {children}
        </form>
      </Card>
    </motion.div>
  );
};

export default FormSection;