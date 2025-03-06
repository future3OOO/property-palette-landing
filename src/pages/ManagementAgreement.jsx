
import React, { useState } from 'react';
import { toast } from "sonner";
import StepIndicator from '@/components/RentalAppraisal/StepIndicator';
import FormNavigation from '@/components/management-agreement/FormNavigation';
import FormSection from '@/components/management-agreement/FormSection';
import { validateAllSections } from '@/utils/formValidation';
import { formSections } from '@/data/formSections';

const ManagementAgreement = () => {
  const [currentSection, setCurrentSection] = useState(0);
  const [expandedSections, setExpandedSections] = useState([]);
  const [completedSections, setCompletedSections] = useState([]);
  const [formData, setFormData] = useState({});
  const [formErrors, setFormErrors] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const { isValid, errors } = validateAllSections(formData, formSections);
    
    if (!isValid) {
      setFormErrors(errors);
      toast.error("Please complete all required fields before submitting");
      return;
    }

    toast.success("Management agreement submitted successfully!");
  };

  const nextSection = () => {
    if (currentSection < formSections.length - 1) {
      setCurrentSection(prev => prev + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const prevSection = () => {
    if (currentSection > 0) {
      setCurrentSection(prev => prev - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleStepClick = (step) => {
    const targetSection = step - 1;
    setCurrentSection(targetSection);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-soft">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-deep-teal dark:text-light-teal mb-4">
            Management Agreement
          </h1>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8">
            Complete this form to establish a property management agreement. All fields marked with * are required.
          </p>

          <StepIndicator 
            currentStep={currentSection + 1}
            completedSteps={completedSections}
            onStepClick={handleStepClick}
          />
        </div>

        {formSections.map((section, index) => (
          <FormSection
            key={index}
            currentSection={currentSection}
            sectionIndex={index}
          >
            {section.components.map(({ Component, title, required }, compIndex) => (
              <div key={`${title}-${compIndex}`} className="relative">
                {formErrors[index]?.[title] && (
                  <div className="text-red-500 text-sm mb-2">
                    {formErrors[index][title]}
                  </div>
                )}
                <Component
                  expandedSections={expandedSections}
                  setExpandedSections={setExpandedSections}
                  required={required}
                  onChange={(data) => {
                    setFormData(prev => ({
                      ...prev,
                      [title.toLowerCase().replace(/\s+/g, '_')]: data
                    }));
                  }}
                  value={formData[title.toLowerCase().replace(/\s+/g, '_')]}
                />
              </div>
            ))}
            
            <FormNavigation
              currentSection={currentSection}
              totalSections={formSections.length}
              onPrevious={prevSection}
              onNext={nextSection}
              onSubmit={handleSubmit}
            />
          </FormSection>
        ))}

        <div className="text-center mt-6 text-sm text-gray-500 dark:text-gray-400">
          Step {currentSection + 1} of {formSections.length}: {formSections[currentSection].title}
        </div>
      </div>
    </div>
  );
};

export default ManagementAgreement;
