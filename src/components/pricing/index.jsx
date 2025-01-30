import { PricingHeader, PricingTiers, ComparisonTable, PricingFAQ } from './components';

const PricingComponent = () => {
  return (
    <div className="container mx-auto px-4 py-16 space-y-24">
      <PricingHeader />
      <div className="grid lg:grid-cols-2 gap-8">
        <PricingTiers />
        <ComparisonTable />
      </div>
      <PricingFAQ />
    </div>
  );
};

export default PricingComponent;
export { PricingHeader, PricingTiers, ComparisonTable, PricingFAQ };