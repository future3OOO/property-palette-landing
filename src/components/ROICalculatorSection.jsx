import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { motion } from 'framer-motion';
import { Calculator } from 'lucide-react';
import { toast } from "sonner";
import StepIndicator from './RentalAppraisal/StepIndicator';
import PersonalInfoForm from './RentalAppraisal/PersonalInfoForm';
import PropertyDetailsForm from './RentalAppraisal/PropertyDetailsForm';

const ROICalculatorSection = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: '',
    propertyAddress: '',
    email: '',
    contactNumber: '',
    bedrooms: '',
    bathrooms: '',
    garaging: '',
    offStreetParking: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentStep === 1) {
      setCurrentStep(2);
    } else {
      toast.success("Thank you! We'll be in touch with your rental appraisal soon.");
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const handleBack = () => {
    setCurrentStep(1);
  };

  return (
    <section className="py-24 bg-gradient-to-br from-soft-gray to-white dark:from-charcoal dark:to-deep-teal/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <div className="inline-block bg-deep-teal/10 dark:bg-light-teal/10 p-3 rounded-xl mb-4">
              <Calculator className="w-6 h-6 text-deep-teal dark:text-light-teal" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-deep-teal to-light-teal">
              Need a Rental Appraisal?
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-lg">
              Complete the form below to receive your free rental appraisal:
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white dark:bg-charcoal rounded-2xl shadow-xl p-8 md:p-12 border border-gray-100 dark:border-gray-800"
          >
            <StepIndicator currentStep={currentStep} />
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {currentStep === 1 ? (
                <PersonalInfoForm formData={formData} handleChange={handleChange} />
              ) : (
                <PropertyDetailsForm formData={formData} handleChange={handleChange} />
              )}

              <div className="flex gap-4 pt-6">
                {currentStep === 2 && (
                  <Button
                    type="button"
                    onClick={handleBack}
                    className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-white transition-all"
                  >
                    Back
                  </Button>
                )}
                <Button
                  type="submit"
                  className="flex-1 bg-deep-teal hover:bg-light-teal text-white dark:bg-light-teal dark:text-deep-teal dark:hover:bg-deep-teal dark:hover:text-white transition-all"
                >
                  {currentStep === 1 ? 'Next' : 'Submit Appraisal Request'}
                </Button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ROICalculatorSection;