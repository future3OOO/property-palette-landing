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
        <div className="space-y-2">
          <Label htmlFor="rate-0">% + GST on all rents collected</Label>
          <Input 
            id="rate-0"
            type="number"
            value="8"
            readOnly
            className="mt-1 bg-gray-100 dark:bg-gray-800"
          />
        </div>
        {[
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
            <Label htmlFor={`rate-${index + 1}`}>{label}</Label>
            <Input 
              id={`rate-${index + 1}`}
              type="number"
              value="0"
              readOnly
              className="mt-1 bg-gray-100 dark:bg-gray-800"
            />
          </div>
        ))}
        <div className="col-span-2">
          <Label htmlFor="letting-fees">Letting Fees</Label>
          <Input 
            id="letting-fees"
            value="0"
            readOnly
            className="mt-1 bg-gray-100 dark:bg-gray-800"
          />
        </div>
      </div>
    </div>
  </Section>
);

export default RatesOfRemuneration;