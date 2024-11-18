import React from 'react';
import { Checkbox as ShadcnCheckbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

const Checkbox = ({ label, id, checked, onCheckedChange }) => (
  <div className="flex items-center space-x-2">
    <ShadcnCheckbox 
      id={id}
      checked={checked}
      onCheckedChange={onCheckedChange}
      className="border-soft-teal data-[state=checked]:bg-deep-teal data-[state=checked]:border-deep-teal dark:border-light-teal dark:data-[state=checked]:bg-light-teal dark:data-[state=checked]:border-light-teal"
    />
    <Label 
      htmlFor={id}
      className="text-gray-700 dark:text-gray-200 text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
    >
      {label}
    </Label>
  </div>
);

export default Checkbox;