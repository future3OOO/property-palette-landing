import React from 'react';
import { Label } from "@/components/ui/label";
import { RadioGroup as ShadcnRadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const RadioGroup = ({ name, label, options, defaultValue, onChange }) => (
  <div className="space-y-2">
    <Label className="text-gray-700 dark:text-gray-200">{label}</Label>
    <ShadcnRadioGroup
      defaultValue={defaultValue}
      onValueChange={onChange}
      className="flex gap-4"
    >
      {options.map((option) => (
        <div key={option} className="flex items-center space-x-2">
          <RadioGroupItem value={option} id={`${name}-${option}`} />
          <Label 
            htmlFor={`${name}-${option}`}
            className="text-gray-600 dark:text-gray-300"
          >
            {option}
          </Label>
        </div>
      ))}
    </ShadcnRadioGroup>
  </div>
);

export default RadioGroup;