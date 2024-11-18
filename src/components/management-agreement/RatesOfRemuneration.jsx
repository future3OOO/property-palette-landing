import React from 'react';
import Section from '@/components/shared/Section';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const RatesOfRemuneration = ({ expandedSections, setExpandedSections }) => (
  <Section 
    title="Rates of Remuneration" 
    id="remuneration" 
    expandedSections={expandedSections} 
    setExpandedSections={setExpandedSections}
  >
    <div className="space-y-4">
      <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
        It is agreed the agent shall be paid in consideration for managing the property(s). Standard rates below (if applicable):
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {[
          '% + GST on all rents collected',
          '% + GST of the cost of arranging and/or supervising, repairs, maintenance or renovations',
          '% + GST on all project management',
          'for each award of exemplary damages against the tenant(s)',
          '% + GST miscellaneous rate',
          '$ + GST on attending mediations or hearings',
          '$ + GST on credit check fee per tenant',
          '$ + GST advertising fee per tenancy',
          '$ + GST monthly admin fee',
          '$ + GST initial detailed Property Condition Report',
          '$ + GST inspection fee',
          '$ + GST insurance claim fee',
          '$ + GST EoYF statement fee',
          '$ + GST Inventory list fee (semi/fully furnished)'
        ].map((label, index) => (
          <div key={index} className="space-y-2">
            <Label htmlFor={`rate-${index}`}>{label}</Label>
            <Input 
              id={`rate-${index}`}
              type="number"
              className="mt-1"
            />
          </div>
        ))}
        <div className="col-span-2">
          <Label htmlFor="letting-fees">Letting Fees</Label>
          <Input 
            id="letting-fees"
            className="mt-1"
          />
        </div>
      </div>
    </div>
  </Section>
);

export default RatesOfRemuneration;