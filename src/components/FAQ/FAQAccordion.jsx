import { motion } from 'framer-motion';
import { Info } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQAccordion = ({ items, categoryKey }) => (
  <Accordion type="single" collapsible className="space-y-4">
    {items.map((item, index) => (
      <motion.div
        key={index}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.1 }}
      >
        <AccordionItem 
          value={`${categoryKey}-item-${index}`} 
          className="group bg-white dark:bg-charcoal border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
        >
          <AccordionTrigger className="px-6 py-4 hover:no-underline data-[state=open]:bg-cream dark:data-[state=open]:bg-gray-800 transition-colors group">
            <div className="flex items-start gap-4 text-left">
              <div className="mt-1">
                <Info className="w-5 h-5 text-deep-teal dark:text-soft-teal opacity-75 group-hover:opacity-100 transition-opacity" />
              </div>
              <span className="flex-1 font-semibold text-lg text-charcoal dark:text-white leading-tight">
                {item.question}
              </span>
            </div>
          </AccordionTrigger>
          <AccordionContent className="px-6 py-4 bg-white dark:bg-charcoal data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up">
            <div className="prose prose-gray dark:prose-invert max-w-none">
              <div className="text-gray-600 dark:text-gray-300 leading-relaxed space-y-4 pl-9">
                {item.answer}
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </motion.div>
    ))}
  </Accordion>
);

export default FAQAccordion;