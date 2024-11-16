import React from 'react';
import { useFormContext } from '@/context/FormContext';
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FileText, Upload } from "lucide-react";

const IssueDescriptionForm = () => {
  const { formState, handleChange, errors, previewUrls, removeImage } = useFormContext();

  return (
    <div className="space-y-6">
      <div>
        <Label htmlFor="issue" className="text-gray-700 dark:text-gray-200 text-base font-medium">
          Describe Your Issue <span className="text-red-500">*</span>
        </Label>
        <div className="mt-2 relative">
          <FileText className="absolute left-3 top-3 text-gray-400 h-5 w-5" />
          <Textarea
            id="issue"
            name="issue"
            value={formState.issue}
            onChange={handleChange}
            className="pl-10 min-h-[120px] border-soft-teal focus:border-deep-teal"
            placeholder="Describe your maintenance issue here"
          />
          {errors.issue && (
            <p className="mt-1 text-sm text-red-500">{errors.issue}</p>
          )}
        </div>
      </div>

      <div className="border-2 border-dashed border-soft-teal rounded-lg p-6">
        <Label className="text-gray-700 dark:text-gray-200 text-base font-medium">
          Upload Photos (Recommended)
        </Label>
        <p className="text-sm text-gray-600 mt-1">
          Adding photos helps us understand and address your issue more quickly. (Max 5 images, 30MB total)
        </p>
        
        <div className="mt-4">
          <div className="flex items-center justify-center w-full">
            <label className="w-full flex flex-col items-center justify-center px-4 py-6 bg-white dark:bg-gray-800 rounded-lg cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
              <Upload className="h-8 w-8 text-deep-teal mb-2" />
              <p className="text-sm text-gray-600 text-center">
                Drag 'n' drop some files here, or click to select files
              </p>
              <Input
                id="images"
                name="images"
                type="file"
                accept="image/*"
                multiple
                onChange={handleChange}
                className="hidden"
              />
            </label>
          </div>
        </div>
        
        {previewUrls.length > 0 && (
          <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3">
            {previewUrls.map((url, index) => (
              <div key={index} className="relative group">
                <img
                  src={url}
                  alt={`Preview ${index + 1}`}
                  className="w-full h-24 object-cover rounded-lg border border-soft-teal"
                />
                <button
                  type="button"
                  onClick={() => removeImage(index)}
                  className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  ×
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default IssueDescriptionForm;