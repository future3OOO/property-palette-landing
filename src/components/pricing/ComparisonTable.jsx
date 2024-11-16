import { motion } from "framer-motion";
import { CheckCircle2, ShieldCheck, X, ShieldAlert } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const ComparisonTable = () => {
  const features = [
    {
      feature: "Management Fee",
      us: "8% + GST",
      others: "8% - 12% + GST",
      description: "Our competitive management fee covers all services with no hidden costs"
    },
    {
      feature: "Letting Fee",
      us: "No charge",
      others: "1-2 weeks rent + GST",
      description: "We don't charge any fees for finding and placing new tenants"
    },
    {
      feature: "Admin Fee",
      us: "No charge",
      others: "$5-10 per month",
      description: "No monthly administrative or statement fees"
    },
    {
      feature: "Inspection Fee",
      us: "No charge",
      others: "$50-100 per inspection",
      description: "Regular property inspections included at no extra cost"
    },
    {
      feature: "Maintenance Fee",
      us: "No charge",
      others: "7-10% of invoice",
      description: "No markup on maintenance and repair costs"
    },
    {
      feature: "Tribunal Representation",
      us: "No charge",
      others: "$150-200 per hour",
      description: "Free representation at Tenancy Tribunal hearings"
    },
    {
      feature: "Marketing Costs",
      us: "No charge",
      others: "$200-400",
      description: "Professional photography and advertising included"
    },
    {
      feature: "End of Year Statement",
      us: "No charge",
      others: "$25-50",
      description: "Comprehensive annual financial statements provided free"
    },
    {
      feature: "Property Condition Report",
      us: "No charge",
      others: "$150-200",
      description: "Detailed property condition reports included"
    },
    {
      feature: "Rental Appraisal",
      us: "No charge",
      others: "$50-100",
      description: "Free professional rental appraisals"
    },
    {
      feature: "Lease Renewal",
      us: "No charge",
      others: "$50-100",
      description: "No fees for lease renewals or extensions"
    },
    {
      feature: "After Hours Service",
      us: "Included",
      others: "Extra charge",
      description: "24/7 emergency response at no extra cost"
    },
    {
      feature: "Online Portal Access",
      us: "Included",
      others: "Often extra",
      description: "Free access to our comprehensive owner portal"
    },
    {
      feature: "Routine Maintenance Coordination",
      us: "No charge",
      others: "Often % based",
      description: "Free coordination of all maintenance and repairs"
    },
    {
      feature: "Insurance Claim Management",
      us: "No charge",
      others: "$100-200",
      description: "Free assistance with insurance claims"
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="bg-white dark:bg-charcoal rounded-3xl overflow-hidden h-[800px] flex flex-col border border-gray-100/10 dark:border-gray-800/50"
    >
      <div className="p-6 md:p-8 border-b border-gray-100 dark:border-gray-800">
        <h2 className="text-2xl md:text-3xl font-bold text-deep-teal dark:text-light-teal">
          How We Compare
        </h2>
      </div>

      <ScrollArea className="flex-1 px-4 md:px-6">
        <Table>
          <TableHeader>
            <TableRow className="border-b-0">
              <TableHead className="w-[180px] md:w-[300px] text-base">Feature</TableHead>
              <TableHead className="w-[120px] md:w-auto bg-cream/50 dark:bg-deep-teal/5 text-base">
                <div className="flex items-center gap-2 text-deep-teal dark:text-light-teal font-semibold">
                  <ShieldCheck className="h-5 w-5" />
                  Us
                </div>
              </TableHead>
              <TableHead className="w-[120px] md:w-auto bg-soft-coral/5 dark:bg-coral/5 text-base">
                <div className="flex items-center gap-2 text-coral dark:text-soft-coral font-semibold">
                  <ShieldAlert className="h-5 w-5" />
                  Others
                </div>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {features.map((item, index) => (
              <TableRow key={index} className="group">
                <TableCell className="font-medium py-4">
                  <div className="space-y-1">
                    <div className="font-semibold text-sm md:text-base text-deep-teal dark:text-light-teal">
                      {item.feature}
                    </div>
                    <div className="text-xs md:text-sm text-gray-600 dark:text-gray-400">
                      {item.description}
                    </div>
                  </div>
                </TableCell>
                <TableCell className="bg-cream/50 dark:bg-deep-teal/5 group-hover:bg-cream/80 dark:group-hover:bg-deep-teal/10 transition-colors py-4">
                  <div className="flex items-center gap-1 md:gap-2">
                    <CheckCircle2 className="h-4 w-4 text-deep-teal dark:text-light-teal flex-shrink-0" />
                    <span className="text-sm font-medium text-deep-teal dark:text-light-teal">
                      {item.us}
                    </span>
                  </div>
                </TableCell>
                <TableCell className="bg-soft-coral/5 dark:bg-coral/5 group-hover:bg-soft-coral/10 dark:group-hover:bg-coral/10 transition-colors py-4">
                  <div className="flex items-center gap-1 md:gap-2">
                    <X className="h-4 w-4 text-coral dark:text-soft-coral flex-shrink-0" />
                    <span className="text-sm text-gray-600 dark:text-gray-300">
                      {item.others}
                    </span>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </ScrollArea>
    </motion.div>
  );
};

export default ComparisonTable;