import { motion } from 'framer-motion';

const StepIndicator = ({ currentStep }) => (
  <div className="flex justify-center mb-8">
    <div className="flex items-center space-x-4">
      <motion.div
        initial={{ scale: 0.8 }}
        animate={{ scale: currentStep === 1 ? 1 : 0.8 }}
        className={`w-10 h-10 rounded-full flex items-center justify-center border-2 transition-colors ${
          currentStep === 1 
            ? 'border-deep-teal bg-deep-teal text-white dark:border-light-teal dark:bg-light-teal' 
            : 'border-gray-300 dark:border-gray-600'
        }`}
      >
        1
      </motion.div>
      <div className="w-20 h-1 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: currentStep === 2 ? '100%' : '0%' }}
          transition={{ duration: 0.3 }}
          className="h-full bg-deep-teal dark:bg-light-teal"
        />
      </div>
      <motion.div
        initial={{ scale: 0.8 }}
        animate={{ scale: currentStep === 2 ? 1 : 0.8 }}
        className={`w-10 h-10 rounded-full flex items-center justify-center border-2 transition-colors ${
          currentStep === 2 
            ? 'border-deep-teal bg-deep-teal text-white dark:border-light-teal dark:bg-light-teal' 
            : 'border-gray-300 dark:border-gray-600'
        }`}
      >
        2
      </motion.div>
    </div>
  </div>
);

export default StepIndicator;