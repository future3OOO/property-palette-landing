import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from 'react-router-dom';

const PricingTiers = () => {
  const navigate = useNavigate();
  
  const features = [
    "Professional listing photos + Trademe base listing",
    "Tenant background & credit checks",
    "Healthy homes assessment",
    "Full Compliance management",
    "Quarterly property inspections",
    "Online owner portal access",
    "Weekly Landlord payments",
    "Lease preparation & renewal",
    "Maintenance coordination",
    "24/7 maintenance coordination",
    "Regular property inspections",
    "Legal compliance management"
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="bg-white dark:bg-charcoal rounded-3xl overflow-hidden flex flex-col h-[800px]"
    >
      <div className="p-8 border-b border-gray-100 dark:border-gray-800 bg-gradient-to-br from-deep-teal to-light-teal dark:from-light-teal dark:to-bright-teal">
        <h2 className="text-3xl font-bold text-white dark:text-deep-teal mb-6">
          Professional Package
        </h2>
        <div className="flex items-baseline gap-2 mb-4">
          <span className="text-5xl font-bold text-white dark:text-deep-teal">8%</span>
          <span className="text-xl text-white/90 dark:text-deep-teal/90">+GST</span>
        </div>
        <p className="text-lg text-white/90 dark:text-deep-teal/90">
          All-inclusive management fee
        </p>
      </div>

      <div className="flex-1 p-8 overflow-auto">
        <div className="grid grid-cols-1 gap-4">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="flex items-center gap-3"
            >
              <CheckCircle2 className="h-5 w-5 text-deep-teal dark:text-light-teal flex-shrink-0" />
              <span className="text-gray-700 dark:text-gray-200">{feature}</span>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="p-8 mt-auto bg-gradient-to-br from-deep-teal to-light-teal dark:from-light-teal dark:to-bright-teal">
        <Button
          onClick={() => navigate('/contact')}
          className="w-full bg-white hover:bg-cream dark:bg-deep-teal dark:hover:bg-charcoal text-deep-teal dark:text-white font-medium text-lg py-6 h-auto rounded-xl transition-all duration-300 group"
        >
          Get Started Now
          <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
        </Button>
      </div>
    </motion.div>
  );
};

export default PricingTiers;