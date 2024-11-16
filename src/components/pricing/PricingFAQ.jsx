import { motion } from "framer-motion";
import { HelpCircle } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const PricingFAQ = () => {
  const faqs = [
    {
      question: "What's included in the management fee?",
      answer: "Our all-inclusive management fee covers everything from tenant screening and rent collection to property maintenance and financial reporting. There are no hidden costs or additional charges."
    },
    {
      question: "How often will I receive updates about my property?",
      answer: "We provide weekly payments and statements, as well as quarterly inspection reports with photos. You'll always be up-to-date on your property's status."
    },
    {
      question: "What if I want to sell my property?",
      answer: "There's no fee if you decide to sell your property. We believe in flexibility and won't penalize you for changes in your investment strategy."
    },
    {
      question: "How do you handle maintenance and repairs?",
      answer: "We manage all maintenance and repairs without any markup on costs. Our team ensures that all work is carried out efficiently and cost-effectively."
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
      className="max-w-3xl mx-auto"
    >
      <div className="text-center mb-12">
        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-deep-teal/10 dark:bg-light-teal/10 text-deep-teal dark:text-light-teal font-medium text-sm mb-6">
          <HelpCircle className="w-4 h-4" />
          Frequently Asked Questions
        </span>
        <h2 className="text-3xl font-bold text-gradient">
          Got Questions? We've Got Answers
        </h2>
      </div>

      <Accordion type="single" collapsible className="space-y-4">
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <AccordionItem 
              value={`item-${index}`} 
              className="bg-white dark:bg-charcoal border border-gray-200/20 dark:border-gray-700/20 rounded-xl overflow-hidden shadow-soft hover:shadow-medium transition-all duration-300"
            >
              <AccordionTrigger className="px-6 py-4 hover:no-underline data-[state=open]:bg-cream dark:data-[state=open]:bg-gray-800 transition-colors">
                <span className="text-left font-semibold text-deep-teal dark:text-light-teal">
                  {faq.question}
                </span>
              </AccordionTrigger>
              <AccordionContent className="px-6 py-4 bg-cream/50 dark:bg-charcoal/50">
                <p className="text-gray-600 dark:text-gray-300">
                  {faq.answer}
                </p>
              </AccordionContent>
            </AccordionItem>
          </motion.div>
        ))}
      </Accordion>
    </motion.div>
  );
};

export default PricingFAQ;