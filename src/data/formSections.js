import PropertyAddress from '@/components/management-agreement/PropertyAddress';
import AgentDetails from '@/components/management-agreement/AgentDetails';
import OwnerDetails from '@/components/management-agreement/OwnerDetails';
import BankDetails from '@/components/management-agreement/BankDetails';
import EmergencyContact from '@/components/management-agreement/EmergencyContact';
import ManagementSection from '@/components/management-agreement/ManagementSection';
import HealthyHomesExitClause from '@/components/management-agreement/HealthyHomesExitClause';
import RatesOfRemuneration from '@/components/management-agreement/RatesOfRemuneration';
import AvailabilityAndTerm from '@/components/management-agreement/AvailabilityAndTerm';
import RentAndBond from '@/components/management-agreement/RentAndBond';
import ComplianceInformation from '@/components/management-agreement/ComplianceInformation';

export const formSections = [
  {
    title: "Property & Contact Details",
    components: [
      { Component: PropertyAddress, title: "Property Address", required: true },
      { Component: OwnerDetails, title: "Owner Details", required: true },
      { Component: EmergencyContact, title: "Emergency Contact", required: true },
    ]
  },
  {
    title: "Management Details",
    components: [
      { Component: AgentDetails, title: "Agent Details", required: true },
      { Component: ManagementSection, title: "Management Terms", required: true },
      { Component: HealthyHomesExitClause, title: "Healthy Homes Exit Clause", required: false },
      { Component: RatesOfRemuneration, title: "Rates of Remuneration", required: true },
    ]
  },
  {
    title: "Financial Details",
    components: [
      { Component: RentAndBond, title: "Rent and Bond", required: true },
      { Component: BankDetails, title: "Bank Details", required: true },
    ]
  },
  {
    title: "Additional Information",
    components: [
      { Component: AvailabilityAndTerm, title: "Availability and Term", required: true },
      { Component: ComplianceInformation, title: "Compliance Information", required: true },
    ]
  }
];