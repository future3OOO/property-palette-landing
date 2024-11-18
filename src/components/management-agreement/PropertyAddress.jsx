import React from 'react';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Section from '@/components/shared/Section';

const PropertyAddress = ({ expandedSections, setExpandedSections }) => (
  <Section 
    title="Property Address" 
    id="propertyAddress" 
    expandedSections={expandedSections} 
    setExpandedSections={setExpandedSections}
  >
    <div className="space-y-4">
      <div>
        <Label htmlFor="propertyAddress">Rental property address</Label>
        <Input 
          id="propertyAddress"
          placeholder="Enter rental property address"
          className="mt-1"
        />
      </div>
      <p className="text-sm text-gray-600 dark:text-gray-400">
        To be exclusively managed by the Property Management company referred to on page 2, of the Management Agreement. The address of the property is considered "the workplace" and "same matter" under section 34 of the Health and Safety at Work Act 2015.
      </p>
    </div>
  </Section>
);

export default PropertyAddress;