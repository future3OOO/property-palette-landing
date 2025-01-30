import React from 'react';
import { DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";

const ContactDialogHeader = () => {
  return (
    <DialogHeader className="space-y-3">
      <DialogTitle className="text-2xl font-bold text-deep-teal dark:text-light-teal">
        Get in Touch
      </DialogTitle>
      <DialogDescription className="text-gray-600 dark:text-gray-300">
        Have a question or need assistance? We're here to help! Fill out the form below and we'll get back to you shortly.
      </DialogDescription>
    </DialogHeader>
  );
};

export default React.memo(ContactDialogHeader);