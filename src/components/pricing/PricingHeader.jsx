import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

const PricingHeader = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="text-center space-y-6"
  >
    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-deep-teal/10 dark:bg-light-teal/10 text-deep-teal dark:text-light-teal font-medium text-sm">
      <Sparkles className="w-4 h-4" />
      Everything included for 8% + GST
    </div>
    
    <h1 className="text-4xl md:text-5xl font-bold text-gradient">
      Simple, Transparent Pricing
    </h1>
    
    <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
      Everything you need for professional property management, without the extra costs
    </p>
  </motion.div>
);

export default PricingHeader;