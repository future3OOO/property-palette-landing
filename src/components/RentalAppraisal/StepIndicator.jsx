import { motion } from 'framer-motion';

const StepIndicator = ({ currentStep, completedSteps = [], onStepClick }) => (
  <div className="flex justify-center mb-8">
    <div className="flex items-center space-x-4">
      <motion.button
        onClick={() => onStepClick(1)}
        initial={{ scale: 0.8 }}
        animate={{ scale: currentStep === 1 ? 1 : 0.8 }}
        className={`w-10 h-10 rounded-full flex items-center justify-center border-2 transition-colors cursor-pointer hover:opacity-80 ${
          completedSteps.includes(1)
            ? 'bg-green-500 border-green-500 text-white dark:bg-green-600 dark:border-green-600'
            : currentStep === 1 
              ? 'border-deep-teal bg-deep-teal text-white dark:border-light-teal dark:bg-light-teal' 
              : 'border-gray-300 dark:border-gray-600'
        }`}
      >
        {completedSteps.includes(1) ? '✓' : '1'}
      </motion.button>
      <div className="w-20 h-1 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ 
            width: completedSteps.includes(1) 
              ? '100%' 
              : currentStep === 2 
                ? '100%' 
                : '0%' 
          }}
          transition={{ duration: 0.3 }}
          className={`h-full ${
            completedSteps.includes(1) 
              ? 'bg-green-500 dark:bg-green-600'
              : 'bg-deep-teal dark:bg-light-teal'
          }`}
        />
      </div>
      <motion.button
        onClick={() => onStepClick(2)}
        initial={{ scale: 0.8 }}
        animate={{ scale: currentStep === 2 ? 1 : 0.8 }}
        className={`w-10 h-10 rounded-full flex items-center justify-center border-2 transition-colors cursor-pointer hover:opacity-80 ${
          completedSteps.includes(2)
            ? 'bg-green-500 border-green-500 text-white dark:bg-green-600 dark:border-green-600'
            : currentStep === 2 
              ? 'border-deep-teal bg-deep-teal text-white dark:border-light-teal dark:bg-light-teal' 
              : 'border-gray-300 dark:border-gray-600'
        }`}
      >
        {completedSteps.includes(2) ? '✓' : '2'}
      </motion.button>
    </div>
  </div>
);

export default StepIndicator;