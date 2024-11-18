import React, { useState } from 'react';
import { toast } from "sonner";
import Section from '@/components/shared/Section';
import Input from '@/components/shared/Input';
import RadioGroup from '@/components/shared/RadioGroup';
import FeatureGroup from '@/components/shared/FeatureGroup';
import TermsSection from '@/components/shared/TermsSection';
import { Button } from "@/components/ui/button";

const ManagementAgreement = () => {
  const [expandedSections, setExpandedSections] = useState(['property-details']);
  const [selectedFeatures, setSelectedFeatures] = useState([]);

  const handleFeatureChange = (feature, checked) => {
    setSelectedFeatures(prev => 
      checked ? [...prev, feature] : prev.filter(f => f !== feature)
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Management agreement submitted successfully!");
  };

  const propertyFeatures = [
    "Garage",
    "Pool",
    "Garden",
    "Security System",
    "Central AC",
    "Furnished",
    "Pet Friendly",
    "Storage"
  ];

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
          id="property-details"
          title="Property Details"
          expandedSections={expandedSections}
          setExpandedSections={setExpandedSections}
        >
          <div className="space-y-4">
            <Input 
              label="Property Name"
              required
              placeholder="Enter property name"
            />
            <Input 
              label="Street Address"
              required
              placeholder="Enter street address"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input 
                label="City"
                required
                placeholder="Enter city"
              />
              <Input 
                label="Postal Code"
                required
                type="text"
                placeholder="Enter postal code"
              />
            </div>
          </div>
        </Section>

        <Section
          id="property-features"
          title="Property Features"
          expandedSections={expandedSections}
          setExpandedSections={setExpandedSections}
        >
          <FeatureGroup
            title="Available Features"
            features={propertyFeatures}
            selectedFeatures={selectedFeatures}
            onFeatureChange={handleFeatureChange}
          />
        </Section>

        <Section
          id="management-terms"
          title="Management Terms"
          expandedSections={expandedSections}
          setExpandedSections={setExpandedSections}
        >
          <div className="space-y-4">
            <RadioGroup
              name="management-term"
              label="Management Term Length"
              options={["6 Months", "12 Months", "24 Months"]}
              defaultValue="12 Months"
            />
            <TermsSection
              title="Terms & Conditions"
              content={
                <div>
                  <p>By submitting this form, you agree to:</p>
                  <ul className="list-disc pl-5 mt-2 space-y-1">
                    <li>Allow Property Partner to manage your property</li>
                    <li>Comply with all local property management regulations</li>
                    <li>Maintain proper insurance coverage</li>
                    <li>Provide accurate property information</li>
                  </ul>
                </div>
              }
            />
          </div>
        </Section>

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