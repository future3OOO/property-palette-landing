
import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, FileText, ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";

const RentalApplication = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cream to-soft-gray dark:from-charcoal dark:to-dark-charcoal">      
      <main className="container mx-auto px-4 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center"
        >
          <div className="mb-12">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-deep-teal/10 dark:bg-light-teal/10 text-deep-teal dark:text-light-teal font-medium text-sm mb-6">
              <FileText className="w-4 h-4" />
              Online Application
            </span>
            <h1 className="text-4xl font-bold text-deep-teal dark:text-light-teal mb-6">
              Apply for a Property
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Ready to make one of our properties your new home? Complete our online application form to get started.
            </p>
          </div>

          <div className="bg-white dark:bg-charcoal rounded-2xl p-8 mb-8">
            <div className="max-w-xl mx-auto space-y-6">
              <h2 className="text-2xl font-semibold text-deep-teal dark:text-light-teal">
                What you'll need:
              </h2>
              <ul className="text-left space-y-4 text-gray-600 dark:text-gray-300">
                <li className="flex items-start gap-3">
                  <ArrowRight className="h-5 w-5 text-deep-teal dark:text-light-teal flex-shrink-0 mt-0.5" />
                  <span>Photo ID (Driver's License or Passport)</span>
                </li>
                <li className="flex items-start gap-3">
                  <ArrowRight className="h-5 w-5 text-deep-teal dark:text-light-teal flex-shrink-0 mt-0.5" />
                  <span>Proof of income (Recent payslips or bank statements)</span>
                </li>
                <li className="flex items-start gap-3">
                  <ArrowRight className="h-5 w-5 text-deep-teal dark:text-light-teal flex-shrink-0 mt-0.5" />
                  <span>References (Previous landlord and character references)</span>
                </li>
                <li className="flex items-start gap-3">
                  <ArrowRight className="h-5 w-5 text-deep-teal dark:text-light-teal flex-shrink-0 mt-0.5" />
                  <span>Current and previous address details</span>
                </li>
              </ul>
            </div>
          </div>

          <Button
            onClick={() => window.open('https://apply.tpsportal.co.nz/tps1205', '_blank')}
            size="lg"
            className="bg-deep-teal hover:bg-light-teal text-white dark:bg-light-teal dark:text-deep-teal dark:hover:bg-deep-teal dark:hover:text-white transition-all group px-8 py-6 h-auto"
          >
            Start Application
            <ExternalLink className="ml-2 h-5 w-5" />
          </Button>

          <p className="mt-6 text-sm text-gray-500 dark:text-gray-400">
            Having trouble with the application? Please <span className="text-deep-teal dark:text-light-teal">contact us</span> for assistance
          </p>
        </motion.div>
      </main>
    </div>
  );
};

export default RentalApplication;
