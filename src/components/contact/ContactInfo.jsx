import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const ContactInfo = () => (
  <div className="space-y-6">
    <p className="text-white/90 dark:text-deep-teal/90">
      Get in touch with our team. We're here to help with any questions about our property management services.
    </p>
    
    <div className="space-y-4 mt-8">
      <div className="flex items-center space-x-3">
        <Mail className="h-5 w-5" />
        <a href="mailto:mckenzie@propertypartner.co.nz" className="hover:underline">
          mckenzie@propertypartner.co.nz
        </a>
      </div>
      <div className="flex items-center space-x-3">
        <Phone className="h-5 w-5" />
        <span>+64 123 456 789</span>
      </div>
      <div className="flex items-center space-x-3">
        <MapPin className="h-5 w-5" />
        <span>123 Property Lane, Christchurch</span>
      </div>
    </div>
  </div>
);

export default React.memo(ContactInfo);