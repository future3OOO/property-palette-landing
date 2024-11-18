import { HomeIcon, DollarSignIcon, HelpCircleIcon, WrenchIcon, Building2Icon, FileText, History, ClipboardSignature } from 'lucide-react';
import Index from "./pages/Index.jsx";
import Pricing from "./pages/Pricing.jsx";
import FAQ from "./pages/FAQ.jsx";
import MaintenanceRequest from "./pages/services/MaintenanceRequest.jsx";
import TenantServices from "./pages/TenantServices.jsx";
import LandlordServices from "./pages/LandlordServices.jsx";
import RentalApplication from "./pages/RentalApplication.jsx";
import About from "./pages/About.jsx";
import ManagementAgreement from "./pages/ManagementAgreement.jsx";

export const navItems = [
  {
    title: "Home",
    to: "/",
    icon: <HomeIcon className="h-4 w-4" />,
    page: <Index />,
  },
  {
    title: "For Owners",
    to: "/landlord-services",
    icon: <Building2Icon className="h-4 w-4" />,
    page: <LandlordServices />,
  },
  {
    title: "Pricing",
    to: "/pricing",
    icon: <DollarSignIcon className="h-4 w-4" />,
    page: <Pricing />,
  },
  {
    title: "Resources",
    to: "/faq",
    icon: <HelpCircleIcon className="h-4 w-4" />,
    page: <FAQ />,
  },
  {
    title: "About",
    to: "/about",
    icon: <History className="h-4 w-4" />,
    page: <About />,
  },
  {
    title: "Maintenance Request",
    to: "/services/maintenance",
    icon: <WrenchIcon className="h-4 w-4" />,
    page: <MaintenanceRequest />,
  },
  {
    title: "Tenant Services",
    to: "/tenant-services",
    icon: <HomeIcon className="h-4 w-4" />,
    page: <TenantServices />,
  },
  {
    title: "Rental Application",
    to: "/rental-application",
    icon: <FileText className="h-4 w-4" />,
    page: <RentalApplication />,
  },
  {
    title: "Management Agreement",
    to: "/management-agreement",
    icon: <ClipboardSignature className="h-4 w-4" />,
    page: <ManagementAgreement />,
  },
];
