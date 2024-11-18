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

const formSections = [
  {
    title: "Property & Contact Details",
    components: [
      { Component: PropertyAddress, title: "Property Address" },
      { Component: OwnerDetails, title: "Owner Details" },
      { Component: EmergencyContact, title: "Emergency Contact" },
    ]
  },
  {
    title: "Management Details",
    components: [
      { Component: AgentDetails, title: "Agent Details" },
      { Component: ManagementSection, title: "Management Terms" },
      { Component: HealthyHomesExitClause, title: "Healthy Homes Exit Clause" },
    ]
  },
  {
    title: "Financial Details",
    components: [
      { Component: RatesOfRemuneration, title: "Rates of Remuneration" },
      { Component: RentAndBond, title: "Rent and Bond" },
      { Component: BankDetails, title: "Bank Details" },
    ]
  },
  {
    title: "Additional Information",
    components: [
      { Component: AvailabilityAndTerm, title: "Availability and Term" },
      { Component: ComplianceInformation, title: "Compliance Information" },
    ]
  }
];

const ManagementAgreement = () => {
  const [currentSection, setCurrentSection] = useState(0);
  const [expandedSections, setExpandedSections] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
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

  return (
    <div className="min-h-screen bg-gradient-soft">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-deep-teal dark:text-light-teal mb-4">
            Management Agreement
          </h1>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8">
            Complete this form to establish a property management agreement. All fields are required unless marked optional.
          </p>

          {/* Progress Steps */}
          <div className="flex justify-between mb-8 relative">
            <div className="absolute top-1/2 h-0.5 w-full bg-gray-200 dark:bg-gray-700 -z-10" />
            {formSections.map((section, index) => (
              <div key={index} className="flex flex-col items-center">
                <div 
                  className={`w-8 h-8 rounded-full flex items-center justify-center mb-2 transition-colors
                    ${index <= currentSection 
                      ? 'bg-deep-teal dark:bg-light-teal text-white' 
                      : 'bg-gray-200 dark:bg-gray-700 text-gray-500'}`}
                >
                  {index + 1}
                </div>
                <span className="text-sm hidden md:block text-gray-600 dark:text-gray-300">
                  {section.title}
                </span>
              </div>
            ))}
          </div>
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
              {formSections[currentSection].components.map(({ Component, title }, index) => (
                <Component
                  key={index}
                  expandedSections={expandedSections}
                  setExpandedSections={setExpandedSections}
                />
              ))}

              <div className="flex justify-between mt-8 pt-4 border-t border-gray-200 dark:border-gray-700">
                <Button
                  type="button"
                  variant="outline"
                  onClick={prevSection}
                  disabled={currentSection === 0}
                  className="flex items-center gap-2"
                >
                  <ChevronLeft className="h-4 w-4" /> Previous
                </Button>
                
                {currentSection === formSections.length - 1 ? (
                  <Button
                    type="submit"
                    className="bg-deep-teal hover:bg-light-teal dark:bg-light-teal dark:hover:bg-bright-teal text-white"
                  >
                    Submit Agreement
                  </Button>
                ) : (
                  <Button
                    type="button"
                    onClick={nextSection}
                    className="bg-deep-teal hover:bg-light-teal dark:bg-light-teal dark:hover:bg-bright-teal text-white flex items-center gap-2"
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