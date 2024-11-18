import React from 'react';
import Section from '@/components/shared/Section';
import RadioGroup from '@/components/shared/RadioGroup';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const ComplianceInformation = ({ expandedSections, setExpandedSections }) => {
  const questions = [
    'Where there are two or more dwellings on one title, can either be lawfully rented independently from the other?',
    'Does the rental dwelling fully comply with Resource Management Act and/or town planning consents?',
    'Does the rental dwelling fully comply with all necessary building consents?',
    'Are there any/other matters which might adversely affect the management of the property we should know about?',
    'Do you as the owner/owners warrant that the agent can safely rent the rental dwelling?',
    'Does the property comply with all Health & Safety enactments as they apply to the premises?',
    'Has the property been tested for methamphetamine contamination?'
  ];

  return (
    <Section 
      title="Compliance Information" 
      id="compliance" 
      expandedSections={expandedSections} 
      setExpandedSections={setExpandedSections}
    >
      <div className="space-y-6">
        {questions.map((question, index) => (
          <div key={index} className="py-2 border-b border-gray-100 dark:border-gray-800 last:border-0">
            <RadioGroup
              name={`compliance_${index}`}
              label={question}
              options={['Yes', 'No']}
            />
          </div>
        ))}

        <div className="space-y-6 pt-4">
          <div>
            <Label htmlFor="methTestDate">If yes to meth testing, what was the test date?</Label>
            <Input 
              id="methTestDate"
              type="date"
              className="mt-1"
            />
          </div>

          <RadioGroup
            name="methTesting"
            label="Would you like the agent to have the property tested for methamphetamine?"
            options={['Yes', 'No']}
          />
          
          <RadioGroup
            name="methTestingBetweenTenancies"
            label="If yes, would you also like the property being tested between tenancies?"
            options={['Yes', 'No']}
          />
          
          <RadioGroup
            name="fireEscape"
            label="Does the property have a functioning fire escape system?"
            options={['Yes', 'No']}
          />
          
          <RadioGroup
            name="propertyForSale"
            label="Is the property on the market for sale?"
            options={['Yes', 'No']}
          />
          
          <RadioGroup
            name="section47Notice"
            label="If yes, has the tenant received a written notice under S.47?"
            options={['Yes', 'No']}
          />
        </div>
      </div>
    </Section>
  );
};

export default ComplianceInformation;