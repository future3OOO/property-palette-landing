import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from 'react-router-dom';

const PricingPackage = ({ features }) => {
  const navigate = useNavigate();

  const midPoint = Math.ceil(features.length / 2);
  const leftColumnFeatures = features.slice(0, midPoint);
  const rightColumnFeatures = features.slice(midPoint);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="bg-white dark:bg-charcoal rounded-2xl shadow-xl overflow-hidden flex flex-col border border-gray-100/10 dark:border-gray-800/50 h-[800px]"
    >
      <div className="p-8 border-b border-gray-100 dark:border-gray-800 bg-deep-teal dark:bg-light-teal">
        <h2 className="text-3xl font-bold text-white dark:text-deep-teal mb-6">
          Property Partner Package
        </h2>
        <div className="flex items-baseline gap-2 mb-4">
          <span className="text-5xl font-bold text-white dark:text-deep-teal">8%</span>
          <span className="text-lg text-white/90 dark:text-deep-teal/90">+GST</span>
        </div>
        <p className="text-lg text-white/90 dark:text-deep-teal/90">
          Management fee with no hidden costs
        </p>
      </div>

      <div className="flex-1 p-8 bg-white dark:bg-charcoal overflow-auto">
        <div className="grid grid-cols-2 gap-x-8 gap-y-4">
          <div className="space-y-4">
            {leftColumnFeatures.map((feature, index) => (
              <motion.div 
                key={`left-${index}`} 
                initial={{ opacity: 0, x: -10 }} 
                animate={{ opacity: 1, x: 0 }} 
                transition={{ duration: 0.3, delay: index * 0.05 }} 
                className="flex items-start gap-3"
              >
                <CheckCircle2 className="h-5 w-5 text-deep-teal dark:text-light-teal flex-shrink-0 mt-0.5" />
                <span className="text-base text-gray-700 dark:text-gray-200">{feature}</span>
              </motion.div>
            ))}
          </div>
          <div className="space-y-4">
            {rightColumnFeatures.map((feature, index) => (
              <motion.div 
                key={`right-${index}`} 
                initial={{ opacity: 0, x: 10 }} 
                animate={{ opacity: 1, x: 0 }} 
                transition={{ duration: 0.3, delay: (index + leftColumnFeatures.length) * 0.05 }} 
                className="flex items-start gap-3"
              >
                <CheckCircle2 className="h-5 w-5 text-deep-teal dark:text-light-teal flex-shrink-0 mt-0.5" />
                <span className="text-base text-gray-700 dark:text-gray-200">{feature}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <div className="p-8 mt-auto bg-deep-teal dark:bg-light-teal">
        <Button
          onClick={() => navigate('/contact')}
          className="w-full bg-white hover:bg-cream dark:bg-deep-teal dark:hover:bg-charcoal text-deep-teal dark:text-white font-medium text-lg py-6 rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg"
        >
          Get Started Now
          <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </div>
    </motion.div>
  );
};

export default PricingPackage;