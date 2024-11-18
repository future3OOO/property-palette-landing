import React, { useState } from 'react';
import { toast } from "sonner";
import Section from '@/components/shared/Section';

const ManagementAgreement = () => {
  const [expandedSections, setExpandedSections] = useState(['property-address']);

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Form submitted successfully!");
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
        <Section
          id="property-address"
          title="Property Address"
          expandedSections={expandedSections}
          setExpandedSections={setExpandedSections}
        >
          <p className="text-gray-600 dark:text-gray-300">
            Property address section coming soon...
          </p>
        </Section>

        {/* Placeholder sections - to be implemented */}
        <Section
          id="agent-details"
          title="Agent Details"
          expandedSections={expandedSections}
          setExpandedSections={setExpandedSections}
        >
          <p className="text-gray-600 dark:text-gray-300">
            Agent details section coming soon...
          </p>
        </Section>

        <div className="flex justify-end mt-8">
          <button
            type="submit"
            className="bg-deep-teal hover:bg-light-teal dark:bg-light-teal dark:hover:bg-deep-teal text-white dark:text-deep-teal font-semibold py-2 px-6 rounded-lg transition-colors"
          >
            Submit Agreement
          </button>
        </div>
      </form>
    </div>
  );
};

export default ManagementAgreement;