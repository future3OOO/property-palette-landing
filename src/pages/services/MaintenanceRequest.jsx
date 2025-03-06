
import React, { useState } from 'react';
import { FormProvider } from '@/context/FormContext';
import PersonalInfoForm from '@/components/maintenance/PersonalInfoForm';
import PropertyDetailsForm from '@/components/maintenance/PropertyDetailsForm';
import IssueDescriptionForm from '@/components/maintenance/IssueDescriptionForm';
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { ChevronRight, ChevronLeft, Send } from "lucide-react";

const MaintenanceRequest = () => {
  const [step, setStep] = useState(1);

  const renderStep = () => {
    switch (step) {
      case 1:
        return <PersonalInfoForm />;
      case 2:
        return <PropertyDetailsForm />;
      case 3:
        return <IssueDescriptionForm />;
      default:
        return null;
    }
  };

  const handleNext = () => {
    if (step < 3) setStep(step + 1);
  };

  const handlePrevious = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    toast.success("Maintenance request submitted successfully!");
  };

  return (
    <FormProvider>
      <div className="min-h-screen flex flex-col bg-gradient-to-br from-cream to-soft-gray dark:from-charcoal dark:to-dark-charcoal">
        <div className="flex-1 py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto bg-white dark:bg-charcoal rounded-xl shadow-xl p-8">
            <div className="text-center mb-8">
              <h1 className="text-2xl font-bold text-deep-teal dark:text-light-teal mb-2">
                Maintenance Request
              </h1>
              <p className="text-gray-600 dark:text-gray-300">
                Let's get your issue resolved quickly and efficiently!
              </p>
            </div>

            <div className="mb-8">
              <div className="relative">
                <div className="flex justify-between items-center">
                  {[1, 2, 3].map((number) => (
                    <div key={number} className="flex items-center flex-1 last:flex-none">
                      <div
                        className={`w-10 h-10 rounded-full flex items-center justify-center ${
                          step >= number
                            ? 'bg-deep-teal dark:bg-light-teal text-white'
                            : 'bg-gray-200 dark:bg-gray-700 text-gray-500'
                        }`}
                      >
                        {number}
                      </div>
                      {number < 3 && (
                        <div
                          className={`flex-1 h-1 mx-4 ${
                            step > number 
                              ? 'bg-deep-teal dark:bg-light-teal' 
                              : 'bg-gray-200 dark:bg-gray-700'
                          }`}
                        />
                      )}
                    </div>
                  ))}
                </div>
                <div className="flex justify-between mt-2 text-sm">
                  <span className={step >= 1 ? 'text-deep-teal dark:text-light-teal' : 'text-gray-500'}>Personal</span>
                  <span className={step >= 2 ? 'text-deep-teal dark:text-light-teal' : 'text-gray-500'}>Property</span>
                  <span className={step >= 3 ? 'text-deep-teal dark:text-light-teal' : 'text-gray-500'}>Issue</span>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {renderStep()}

              <div className="flex justify-between mt-8">
                {step > 1 && (
                  <Button
                    type="button"
                    variant="outline"
                    onClick={handlePrevious}
                    className="flex items-center gap-2"
                  >
                    <ChevronLeft className="h-4 w-4" /> Previous
                  </Button>
                )}
                {step < 3 ? (
                  <Button
                    type="button"
                    onClick={handleNext}
                    className="ml-auto flex items-center gap-2 bg-deep-teal hover:bg-light-teal dark:bg-light-teal dark:hover:bg-bright-teal"
                  >
                    Next <ChevronRight className="h-4 w-4" />
                  </Button>
                ) : (
                  <Button
                    type="submit"
                    className="ml-auto flex items-center gap-2 bg-deep-teal hover:bg-light-teal dark:bg-light-teal dark:hover:bg-bright-teal"
                  >
                    Submit Request <Send className="h-4 w-4" />
                  </Button>
                )}
              </div>
            </form>

            <div className="text-center mt-6 text-sm text-gray-500 dark:text-gray-400">
              Powered by <span className="text-deep-teal dark:text-light-teal">Property Partner</span>
            </div>
          </div>
        </div>
      </div>
    </FormProvider>
  );
};

export default MaintenanceRequest;
