import React, { useState } from 'react';
import { toast } from "sonner";
import PropertyAddress from '@/components/management-agreement/PropertyAddress';
import AgentDetails from '@/components/management-agreement/AgentDetails';
import OwnerDetails from '@/components/management-agreement/OwnerDetails';
import { Button } from "@/components/ui/button";

const ManagementAgreement = () => {
  const [expandedSections, setExpandedSections] = useState([
    'propertyAddress',
    'agentDetails',
    'ownerDetails'
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Management agreement submitted successfully!");
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="mb-8 text-center">
        <h1 className="text-4xl font-bold text-deep-teal dark:text-light-teal mb-4">
          Management Agreement
        </h1>
        <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Complete this form to establish a property management agreement. All fields are required unless marked optional.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <PropertyAddress 
          expandedSections={expandedSections}
          setExpandedSections={setExpandedSections}
        />
        
        <AgentDetails 
          expandedSections={expandedSections}
          setExpandedSections={setExpandedSections}
        />
        
        <OwnerDetails 
          expandedSections={expandedSections}
          setExpandedSections={setExpandedSections}
        />

        <div className="flex justify-end mt-8">
          <Button
            type="submit"
            className="bg-deep-teal hover:bg-light-teal dark:bg-light-teal dark:hover:bg-deep-teal text-white dark:text-deep-teal font-semibold"
          >
            Submit Agreement
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ManagementAgreement;