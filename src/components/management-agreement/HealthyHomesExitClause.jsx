import React from 'react';
import Section from '@/components/shared/Section';
import Checkbox from '@/components/shared/Checkbox';

const HealthyHomesExitClause = ({ expandedSections, setExpandedSections }) => (
  <Section 
    title="Healthy Homes Exit Clause" 
    id="healthyHomes" 
    expandedSections={expandedSections} 
    setExpandedSections={setExpandedSections}
  >
    <div className="space-y-4">
      <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
        IMPORTANT: Please read the Healthy Homes Exit Clause below carefully and tick the checkbox to show you have read and understand the clause.
      </p>
      <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
          From and after the 28/08/2022 all new and renewed rental properties shall be subject to Healthy Homes compliance within 120 days. Prior to this, all new and renewed tenancies from 01/07/2021 had 90 days to comply with the Healthy Homes Standards. Where the manager becomes aware that the rental property is not compliant with the Healthy Homes Regulations and is unlikely to be so before the expiry of 120 days, the manager may at the manager's sole discretion terminate the management on days notice in writing, served by the manager on the owner at the owner's address for service, set out in the management agreement.
        </p>
        <Checkbox 
          label="I have read and understand the Healthy Homes Exit Clause" 
          id="healthyHomesConfirm"
        />
      </div>
    </div>
  </Section>
);

export default HealthyHomesExitClause;