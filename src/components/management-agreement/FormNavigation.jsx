import React from 'react';
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const FormNavigation = ({ 
  currentSection, 
  totalSections, 
  onPrevious, 
  onNext, 
  onSubmit 
}) => {
  return (
    <div className="flex justify-between mt-8 pt-4 border-t border-gray-200 dark:border-gray-700">
      {currentSection > 0 && (
        <Button
          type="button"
          variant="outline"
          onClick={onPrevious}
          className="flex items-center gap-2"
        >
          <ChevronLeft className="h-4 w-4" /> Previous
        </Button>
      )}
      
      {currentSection === totalSections - 1 ? (
        <Button
          type="submit"
          onClick={onSubmit}
          className="ml-auto bg-deep-teal hover:bg-light-teal dark:bg-light-teal dark:hover:bg-bright-teal text-white"
        >
          Submit Agreement
        </Button>
      ) : (
        <Button
          type="button"
          onClick={onNext}
          className="ml-auto bg-deep-teal hover:bg-light-teal dark:bg-light-teal dark:hover:bg-bright-teal text-white flex items-center gap-2"
        >
          Next <ChevronRight className="h-4 w-4" />
        </Button>
      )}
    </div>
  );
};

export default FormNavigation;