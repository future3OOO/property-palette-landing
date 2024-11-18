import React from 'react';
import Section from '@/components/shared/Section';
import RadioGroup from '@/components/shared/RadioGroup';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const AvailabilityAndTerm = ({ expandedSections, setExpandedSections }) => (
  <Section 
    title="Availability and Term" 
    id="availability" 
    expandedSections={expandedSections} 
    setExpandedSections={setExpandedSections}
  >
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <RadioGroup
          name="currentTenancy"
          label="Is this a current tenancy?"
          options={['Yes', 'No']}
        />
        <div className="space-y-2">
          <Label htmlFor="availableFrom">Tenancy available from</Label>
          <Input 
            id="availableFrom"
            type="date"
            required 
            className="mt-1"
          />
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-4 items-start md:items-end">
        <div className="flex-1">
          <Label htmlFor="minTerm">Minimum fixed term</Label>
          <Input 
            id="minTerm"
            className="mt-1"
          />
        </div>
        <span className="self-center">or until</span>
        <div className="flex-1">
          <Input 
            type="date"
            className="mt-1"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <RadioGroup
          name="bondForm"
          label="Change of agent bond form required?"
          options={['Yes', 'No']}
        />
        <RadioGroup
          name="tenancyType"
          label="Preferred tenancy type"
          options={['Periodic', 'Fixed']}
        />
      </div>
    </div>
  </Section>
);

export default AvailabilityAndTerm;