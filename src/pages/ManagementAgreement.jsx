import React, { useState } from 'react';
import { toast } from "sonner";
import { motion } from "framer-motion";
import { ChevronRight, ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import PropertyAddress from '@/components/management-agreement/PropertyAddress';
import AgentDetails from '@/components/management-agreement/AgentDetails';
import OwnerDetails from '@/components/management-agreement/OwnerDetails';
import BankDetails from '@/components/management-agreement/BankDetails';
import EmergencyContact from '@/components/management-agreement/EmergencyContact';
import ManagementSection from '@/components/management-agreement/ManagementSection';
import HealthyHomesExitClause from '@/components/management-agreement/HealthyHomesExitClause';
import RatesOfRemuneration from '@/components/management-agreement/RatesOfRemuneration';
import AvailabilityAndTerm from '@/components/management-agreement/AvailabilityAndTerm';
import RentAndBond from '@/components/management-agreement/RentAndBond';
import ComplianceInformation from '@/components/management-agreement/ComplianceInformation';
import StepIndicator from '@/components/RentalAppraisal/StepIndicator';

const formSections = [
  {
    title: "Property & Contact Details",
    components: [
      { Component: PropertyAddress, title: "Property Address", required: true },
      { Component: OwnerDetails, title: "Owner Details", required: true },
      { Component: EmergencyContact, title: "Emergency Contact", required: true },
    ]
  },
  {
    title: "Management Details",
    components: [
      { Component: AgentDetails, title: "Agent Details", required: true },
      { Component: ManagementSection, title: "Management Terms", required: true },
      { Component: HealthyHomesExitClause, title: "Healthy Homes Exit Clause", required: false },
      { Component: RatesOfRemuneration, title: "Rates of Remuneration", required: true },
    ]
  },
  {
    title: "Financial Details",
    components: [
      { Component: RentAndBond, title: "Rent and Bond", required: true },
      { Component: BankDetails, title: "Bank Details", required: true },
    ]
  },
  {
    title: "Additional Information",
    components: [
      { Component: AvailabilityAndTerm, title: "Availability and Term", required: true },
      { Component: ComplianceInformation, title: "Compliance Information", required: true },
    ]
  }
];

const ManagementAgreement = () => {
  const [currentSection, setCurrentSection] = useState(0);
  const [expandedSections, setExpandedSections] = useState([]);
  const [completedSections, setCompletedSections] = useState([]);
  const [formData, setFormData] = useState({});
  const [formErrors, setFormErrors] = useState({});

  const validateSection = (sectionIndex) => {
    const section = formSections[sectionIndex];
    const errors = {};
    let isValid = true;

    section.components.forEach(({ title, required }) => {
      if (required && !formData[title.toLowerCase().replace(/\s+/g, '_')]) {
        errors[title] = 'This section is required';
        isValid = false;
      }
    });

    setFormErrors(errors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate all sections before submission
    let isValid = true;
    formSections.forEach((_, index) => {
      if (!validateSection(index)) {
        isValid = false;
      }
    });

    if (!isValid) {
      toast.error("Please complete all required fields before submitting");
      return;
    }

    toast.success("Management agreement submitted successfully!");
  };

  const handleSectionComplete = (sectionIndex) => {
    if (!completedSections.includes(sectionIndex)) {
      setCompletedSections(prev => [...prev, sectionIndex]);
    }
  };

  const nextSection = () => {
    if (validateSection(currentSection)) {
      if (currentSection < formSections.length - 1) {
        handleSectionComplete(currentSection);
        setCurrentSection(prev => prev + 1);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    } else {
      toast.error("Please complete all required fields in this section");
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
    
    // Allow going back to any previous section
    if (targetSection < currentSection) {
      setCurrentSection(targetSection);
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    
    // For forward navigation, validate current section first
    if (validateSection(currentSection)) {
      if (targetSection <= Math.max(...completedSections, currentSection + 1)) {
        setCurrentSection(targetSection);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    } else {
      toast.error("Please complete all required fields in the current section");
    }
  };

  const handleFormDataChange = (sectionTitle, data) => {
    setFormData(prev => ({
      ...prev,
      [sectionTitle.toLowerCase().replace(/\s+/g, '_')]: data
    }));
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
            totalSteps={formSections.length}
            completedSteps={completedSections}
            onStepClick={handleStepClick}
            labels={formSections.map(section => section.title)}
          />
        </div>

        <motion.div
          key={currentSection}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
        >
          <Card className="p-6 shadow-medium">
            <form onSubmit={handleSubmit} className="space-y-6">
              {formSections[currentSection].components.map(({ Component, title, required }, index) => (
                <div key={`${title}-${index}`} className="relative">
                  {formErrors[title] && (
                    <div className="text-red-500 text-sm mb-2">
                      {formErrors[title]}
                    </div>
                  )}
                  <Component
                    expandedSections={expandedSections}
                    setExpandedSections={setExpandedSections}
                    required={required}
                    onChange={(data) => handleFormDataChange(title, data)}
                    value={formData[title.toLowerCase().replace(/\s+/g, '_')]}
                  />
                </div>
              ))}

              <div className="flex justify-between mt-8 pt-4 border-t border-gray-200 dark:border-gray-700">
                {currentSection > 0 && (
                  <Button
                    type="button"
                    variant="outline"
                    onClick={prevSection}
                    className="flex items-center gap-2"
                  >
                    <ChevronLeft className="h-4 w-4" /> Previous
                  </Button>
                )}
                
                {currentSection === formSections.length - 1 ? (
                  <Button
                    type="submit"
                    className="ml-auto bg-deep-teal hover:bg-light-teal dark:bg-light-teal dark:hover:bg-bright-teal text-white"
                  >
                    Submit Agreement
                  </Button>
                ) : (
                  <Button
                    type="button"
                    onClick={nextSection}
                    className="ml-auto bg-deep-teal hover:bg-light-teal dark:bg-light-teal dark:hover:bg-bright-teal text-white flex items-center gap-2"
                  >
                    Next <ChevronRight className="h-4 w-4" />
                  </Button>
                )}
              </div>
            </form>
          </Card>
        </motion.div>

        <div className="text-center mt-6 text-sm text-gray-500 dark:text-gray-400">
          Step {currentSection + 1} of {formSections.length}: {formSections[currentSection].title}
        </div>
      </div>
    </div>
  );
};

export default ManagementAgreement;