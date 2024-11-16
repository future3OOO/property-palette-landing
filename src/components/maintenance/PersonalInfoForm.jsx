import React from 'react';
import { useFormContext } from '@/context/FormContext';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { User2, Mail } from "lucide-react";

const PersonalInfoForm = () => {
  const { formState, handleChange, errors } = useFormContext();

  return (
    <div className="space-y-6">
      <div>
        <Label htmlFor="full_name" className="text-gray-700 dark:text-gray-200 text-base font-medium">
          Full Name <span className="text-red-500">*</span>
        </Label>
        <div className="mt-2 relative">
          <User2 className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
          <Input
            id="full_name"
            name="full_name"
            type="text"
            value={formState.full_name}
            onChange={handleChange}
            className="pl-10 border-soft-teal focus:border-deep-teal"
            placeholder="John Doe"
          />
          {errors.full_name && (
            <p className="mt-1 text-sm text-red-500">{errors.full_name}</p>
          )}
        </div>
      </div>

      <div>
        <Label htmlFor="email" className="text-gray-700 dark:text-gray-200 text-base font-medium">
          Email <span className="text-red-500">*</span>
        </Label>
        <div className="mt-2 relative">
          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
          <Input
            id="email"
            name="email"
            type="email"
            value={formState.email}
            onChange={handleChange}
            className="pl-10 border-soft-teal focus:border-deep-teal"
            placeholder="john@example.com"
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-500">{errors.email}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default PersonalInfoForm;