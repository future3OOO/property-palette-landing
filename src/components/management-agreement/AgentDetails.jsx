import React from 'react';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const AgentDetails = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div>
        <Label htmlFor="company">Property management company</Label>
        <Input 
          id="company" 
          placeholder="Enter company name"
          className="mt-1"
        />
      </div>
      <div>
        <Label htmlFor="officePhone">Office phone</Label>
        <Input 
          id="officePhone" 
          placeholder="Enter office phone"
          className="mt-1"
        />
      </div>
      <div className="col-span-2">
        <Label htmlFor="businessAddress">Business address</Label>
        <Input 
          id="businessAddress" 
          placeholder="Enter business address"
          className="mt-1"
        />
      </div>
      <div>
        <Label htmlFor="managerName">Property manager's name</Label>
        <Input 
          id="managerName" 
          placeholder="Enter manager's name"
          className="mt-1"
        />
      </div>
      <div>
        <Label htmlFor="managerPhone">Phone</Label>
        <Input 
          id="managerPhone" 
          placeholder="Enter phone number"
          className="mt-1"
        />
      </div>
      <div>
        <Label htmlFor="managerMobile">Mobile</Label>
        <Input 
          id="managerMobile" 
          placeholder="Enter mobile number"
          className="mt-1"
        />
      </div>
      <div>
        <Label htmlFor="managerEmail">Email</Label>
        <Input 
          id="managerEmail" 
          type="email"
          placeholder="Enter email address"
          className="mt-1"
        />
      </div>
    </div>
  );
};

export default AgentDetails;