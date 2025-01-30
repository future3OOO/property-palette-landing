import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import ContactInfo from './contact/ContactInfo';
import ContactForm from './contact/ContactForm';

const ContactDialog = ({ children }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const handleSubmitSuccess = React.useCallback(() => {
    setIsOpen(false);
  }, []);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[900px] p-0 bg-white dark:bg-charcoal overflow-hidden">
        <div className="grid md:grid-cols-5 h-full">
          {/* Contact Information Sidebar */}
          <div className="md:col-span-2 bg-gradient-to-br from-deep-teal to-light-teal dark:from-light-teal dark:to-bright-teal p-8 text-white dark:text-deep-teal">
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold text-white dark:text-deep-teal mb-6">
                Contact Us
              </DialogTitle>
            </DialogHeader>
            <ContactInfo />
          </div>

          {/* Contact Form */}
          <div className="md:col-span-3 p-8">
            <ContactForm onSubmitSuccess={handleSubmitSuccess} />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default React.memo(ContactDialog);