import React from 'react';
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";

const EmergencyContact = ({ expandedSections, setExpandedSections }) => {
  return (
    <Card className="w-full">
      <CardContent className="p-6">
        <p className="text-sm text-gray-600 dark:text-gray-300 mb-6">
          If you are unreachable, you give authority for this person to authorize our company to take any required action to the tenancy.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="fullName">Full Name</Label>
            <Input id="fullName" placeholder="Enter full name" required />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="address">Physical Address for Service</Label>
            <Input id="address" placeholder="Enter physical address" required />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="email">Email Address for Service</Label>
            <Input id="email" type="email" placeholder="Enter email address" required />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="phone">Phone</Label>
            <Input id="phone" placeholder="Enter phone number" required />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="mobile">Mobile</Label>
            <Input id="mobile" placeholder="Enter mobile number" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default EmergencyContact;