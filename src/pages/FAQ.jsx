
import React, { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import FAQHeader from '@/components/FAQ/FAQHeader';
import FAQAccordion from '@/components/FAQ/FAQAccordion';
import { faqCategories } from '@/data/faqData';

const FAQ = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const defaultTab = searchParams.get('tab') || 'general';

  useEffect(() => {
    if (searchParams.get('tab') && Object.keys(faqCategories).includes(searchParams.get('tab'))) {
      setSearchParams({ tab: searchParams.get('tab') });
    } else {
      setSearchParams({ tab: 'general' });
    }
  }, []);

  const handleTabChange = (value) => {
    setSearchParams({ tab: value });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-cream to-white dark:from-charcoal dark:to-gray-900">
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="py-24"
      >
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <FAQHeader />

            <div className="bg-white dark:bg-charcoal rounded-2xl shadow-lg p-6">
              <Tabs defaultValue={defaultTab} onValueChange={handleTabChange} className="space-y-8">
                <TabsList className="w-full justify-start overflow-x-auto flex-wrap gap-2 h-auto p-2 bg-cream/50 dark:bg-gray-800/50 rounded-xl">
                  {Object.entries(faqCategories).map(([key, category]) => (
                    <TabsTrigger 
                      key={key} 
                      value={key}
                      className="px-4 py-2 whitespace-nowrap data-[state=active]:bg-deep-teal data-[state=active]:text-white dark:data-[state=active]:bg-soft-teal font-medium rounded-lg transition-all duration-200 hover:bg-gray-200 dark:hover:bg-gray-700"
                    >
                      {category.title}
                    </TabsTrigger>
                  ))}
                </TabsList>

                {Object.entries(faqCategories).map(([key, category]) => (
                  <TabsContent key={key} value={key} className="mt-6">
                    <FAQAccordion items={category.items} categoryKey={key} />
                  </TabsContent>
                ))}
              </Tabs>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default FAQ;
