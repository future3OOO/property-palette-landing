import React from 'react';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Section from '@/components/shared/Section';

const OwnerDetails = ({ expandedSections, setExpandedSections }) => (
  <Section 
    title="Property Owner's Details - Principal/Landlord/PCBU" 
    id="ownerDetails" 
    expandedSections={expandedSections} 
    setExpandedSections={setExpandedSections}
  >
    <div className="space-y-4">
      <div>
        <Label htmlFor="companyTrust">Company/trust name (if applicable)</Label>
        <Input 
          id="companyTrust"
          placeholder="Enter company or trust name"
          className="mt-1"
        />
      </div>
      <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
        Where the property is owned by a company, provide the directors' details. Where the property is owned by a trust, provide the trustees' details.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="fullName">Full name</Label>
          <Input 
            id="fullName"
            placeholder="Enter full name"
            className="mt-1"
          />
        </div>
        <div>
          <Label htmlFor="serviceAddress">Physical address for service</Label>
          <Input 
            id="serviceAddress"
            placeholder="Enter physical address"
            className="mt-1"
          />
        </div>
        <div>
          <Label htmlFor="alternateAddress">Alternate address for service</Label>
          <Input 
            id="alternateAddress"
            placeholder="Enter alternate address"
            className="mt-1"
          />
        </div>
        <div>
          <Label htmlFor="phone">Phone</Label>
          <Input 
            id="phone"
            placeholder="Enter phone number"
            className="mt-1"
          />
        </div>
        <div>
          <Label htmlFor="emailService">Email address for service</Label>
          <Input 
            id="emailService"
            type="email"
            placeholder="Enter email address"
            className="mt-1"
          />
        </div>
        <div>
          <Label htmlFor="workPlace">Place of work</Label>
          <Input 
            id="workPlace"
            placeholder="Enter place of work"
            className="mt-1"
          />
        </div>
        <div>
          <Label htmlFor="workPhone">Work phone</Label>
          <Input 
            id="workPhone"
            placeholder="Enter work phone"
            className="mt-1"
          />
        </div>
        <div>
          <Label htmlFor="mobile">Mobile</Label>
          <Input 
            id="mobile"
            placeholder="Enter mobile number"
            className="mt-1"
          />
        </div>
      </div>
    </div>
  </Section>
);

export default OwnerDetails;