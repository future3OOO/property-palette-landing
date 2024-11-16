import React from 'react';
import { useFormContext } from '@/context/FormContext';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { MapPin } from "lucide-react";

const PropertyDetailsForm = () => {
  const { formState, handleChange, errors } = useFormContext();

  return (
    <div className="space-y-6">
      <div>
        <Label htmlFor="address" className="text-gray-700 dark:text-gray-200 text-base font-medium">
          Address <span className="text-red-500">*</span>
        </Label>
        <div className="mt-2 relative">
          <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
          <Input
            id="address"
            name="address"
            type="text"
            value={formState.address}
            onChange={handleChange}
            className="pl-10 border-soft-teal focus:border-deep-teal"
            placeholder="Enter a New Zealand address"
          />
          {errors.address && (
            <p className="mt-1 text-sm text-red-500">{errors.address}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default PropertyDetailsForm;