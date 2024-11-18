import React from 'react';
import Section from '@/components/shared/Section';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Checkbox from '@/components/shared/Checkbox';

const RentAndBond = ({ expandedSections, setExpandedSections }) => (
  <Section 
    title="Rent and Bond" 
    id="rentBond" 
    expandedSections={expandedSections} 
    setExpandedSections={setExpandedSections}
  >
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex items-center gap-2">
          <div className="flex-1">
            <Label htmlFor="rent">Rent ($)</Label>
            <Input 
              id="rent"
              type="number"
              required
              className="mt-1"
            />
          </div>
          <span className="mt-8">per week</span>
        </div>
        
        <div className="flex items-center gap-2">
          <div className="flex-1">
            <Label htmlFor="bond">Bond ($)</Label>
            <Input 
              id="bond"
              type="number"
              required
              className="mt-1"
            />
          </div>
          <span className="mt-8">being</span>
          <div className="w-24">
            <Input 
              type="number"
              className="mt-1"
            />
          </div>
          <span className="mt-8">weeks rent</span>
        </div>
      </div>

      <div>
        <h4 className="font-medium text-gray-700 dark:text-gray-300 mb-3">
          Tenant rent payment frequency
        </h4>
        <div className="flex flex-wrap gap-6">
          <Checkbox label="Weekly" id="weekly" />
          <Checkbox label="Fortnightly" id="fortnightly" />
          <Checkbox label="Monthly" id="monthlyFrequency" />
          <Checkbox label="Other" id="otherFrequency" />
        </div>
      </div>
    </div>
  </Section>
);

export default RentAndBond;