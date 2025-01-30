import { Home, Shield, ClipboardCheck, HeartHandshake } from 'lucide-react';

export const services = [
  {
    icon: Home,
    title: "Property Management",
    description: "Full-service property management including rent collection, maintenance coordination, and regular inspections.",
    color: "from-[#8B5CF6] to-[#7C3AED]"
  },
  {
    icon: Shield,
    title: "Tenant Selection",
    description: "Comprehensive tenant screening with thorough background and reference checks to find reliable tenants.",
    color: "from-[#F97316] to-[#EA580C]",
    link: "/faq?tab=tenancy"
  },
  {
    icon: ClipboardCheck,
    title: "Compliance Management",
    description: "Stay compliant with the latest regulations including Healthy Homes Standards and tenancy laws.",
    color: "from-[#8B5CF6] to-[#7C3AED]"
  },
  {
    icon: HeartHandshake,
    title: "Relationship Management",
    description: "Building positive relationships between landlords and tenants for long-term success.",
    color: "from-[#F97316] to-[#EA580C]"
  }
];