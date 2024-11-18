import React from 'react';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const PropertyAddress = () => {
  return (
    <div className="space-y-4">
      <div>
        <Label htmlFor="street">Street Address</Label>
        <Input 
          id="street" 
          placeholder="Enter street address"
          className="mt-1"
        />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <Label htmlFor="suburb">Suburb</Label>
          <Input 
            id="suburb" 
            placeholder="Enter suburb"
            className="mt-1"
          />
        </div>
        <div>
          <Label htmlFor="city">City</Label>
          <Input 
            id="city" 
            placeholder="Enter city"
            className="mt-1"
          />
        </div>
      </div>
      <div>
        <Label htmlFor="postcode">Postcode</Label>
        <Input 
          id="postcode" 
          placeholder="Enter postcode"
          className="mt-1"
          type="number"
        />
      </div>
    </div>
  );
};

export default PropertyAddress;