import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const TermsSection = ({ title, content }) => (
  <Card className="mb-6 border-gray-200 dark:border-gray-800 bg-white dark:bg-charcoal">
    <CardHeader>
      <CardTitle className="text-lg font-medium text-deep-teal dark:text-light-teal">
        {title}
      </CardTitle>
    </CardHeader>
    <CardContent className="text-sm text-gray-700 dark:text-gray-300 space-y-2">
      {content}
    </CardContent>
  </Card>
);

export default TermsSection;