import React from 'react';
import { Input as ShadcnInput } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

const Input = ({ 
  label, 
  type = "text", 
  placeholder, 
  required = false, 
  className = "",
  ...props 
}) => (
  <div className={cn("space-y-2", className)}>
    <Label className="text-gray-700 dark:text-gray-200">
      {label} {required && <span className="text-accent-1">*</span>}
    </Label>
    <ShadcnInput
      type={type}
      placeholder={placeholder || `Enter ${label.toLowerCase()}`}
      required={required}
      className="border-soft-teal focus:border-deep-teal dark:border-light-teal dark:focus:border-bright-teal"
      {...props}
    />
  </div>
);

export default Input;