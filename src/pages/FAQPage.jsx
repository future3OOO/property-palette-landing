import React from 'react';
import FAQHeader from '@/components/FAQ/FAQHeader';
import FAQAccordion from '@/components/FAQ/FAQAccordion';

const FAQPage = () => {
  return (
    <div className="min-h-screen pt-24">
      <FAQHeader />
      <FAQAccordion />
    </div>
  );
};

export default FAQPage;