import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Building2, Shield, Handshake, DollarSign, Clock, FileText, Cloud, UserCheck } from 'lucide-react';
import { Button } from "@/components/ui/button";
import Header from '@/components/Header';
import { ServiceCard } from '@/components/landlord/ServiceCard';
import { AccordionItem } from '@/components/landlord/AccordionItem';
import { HeroSection } from '@/components/landlord/HeroSection';
import CircularFlowchart from '@/components/landlord/CircularFlowchart';
import { Card } from "@/components/ui/card";

const LandlordServices = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [openSection, setOpenSection] = useState('management');

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? '' : section);
  };

  const features = [
    {
      icon: Cloud,
      title: "24/7 Online Access",
      description: "Access property documents, reports, and financials anytime through our cloud-based Property Tree portal."
    },
    {
      icon: DollarSign,
      title: "Transparent Pricing",
      description: "Simple 8% + GST flat rate with no hidden fees. All services included."
    },
    {
      icon: Clock,
      title: "Same-Day Maintenance",
      description: "Quick response to maintenance requests with our trusted trade network."
    },
    {
      icon: UserCheck,
      title: "Quality Tenants",
      description: "Thorough screening process including credit checks and reference verification."
    }
  ];

  const benefits = [
    {
      title: "Regular Property Care",
      description: "Quarterly inspections with detailed photo reports and maintenance recommendations.",
      icon: Building2
    },
    {
      title: "Owner-Operated Service",
      description: "Direct communication with business owners who are personally invested in your success.",
      icon: Handshake
    },
    {
      title: "Easy Transition",
      description: "Simple process to switch from your current property manager - we handle everything.",
      icon: Shield
    },
    {
      title: "Financial Support",
      description: "Annual rent reviews, tax documentation, and optional bill payment service.",
      icon: FileText
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-cream dark:bg-charcoal">
      <Header isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      <HeroSection />
      
      {/* Key Features Section */}
      <section className="py-20 bg-white dark:bg-charcoal-gray">
        <div className="container mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-deep-teal dark:text-light-teal mb-6">
              Modern Property Management Solutions
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Experience hassle-free property management with our comprehensive digital platform and dedicated service.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <ServiceCard
                key={index}
                icon={<feature.icon className="h-8 w-8 text-deep-teal" />}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Circular Flowchart Section */}
      <CircularFlowchart />

      {/* Benefits Grid Section */}
      <section className="py-20 bg-cream dark:bg-charcoal-gray">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-deep-teal dark:text-light-teal mb-8">
                Why Choose Property Partner?
              </h2>
              <div className="grid sm:grid-cols-2 gap-6">
                {benefits.map((benefit, index) => (
                  <Card key={index} className="p-6 bg-white dark:bg-charcoal border-none">
                    <benefit.icon className="h-8 w-8 text-deep-teal dark:text-light-teal mb-4" />
                    <h3 className="text-lg font-semibold text-deep-teal dark:text-light-teal mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      {benefit.description}
                    </p>
                  </Card>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <AccordionItem
                title="How do you handle maintenance?"
                isOpen={openSection === 'maintenance'}
                onClick={() => toggleSection('maintenance')}
                content="We work with a trusted network of licensed contractors who respond quickly to maintenance needs. Many issues are resolved same-day, and all work is quality-checked. You'll receive detailed reports and photos for transparency."
              />
              <AccordionItem
                title="What's included in the 8% fee?"
                isOpen={openSection === 'pricing'}
                onClick={() => toggleSection('pricing')}
                content="Everything! Property advertising, tenant screening, rent collection, maintenance coordination, inspections, financial reporting, and 24/7 support - all with no hidden charges."
              />
              <AccordionItem
                title="How do you find quality tenants?"
                isOpen={openSection === 'tenants'}
                onClick={() => toggleSection('tenants')}
                content="We use a comprehensive screening process including credit checks, reference verification, and background checks. Properties are marketed widely on TradeMe, Facebook, and Realestate.co.nz to attract the best candidates."
              />
              <AccordionItem
                title="How do I switch to Property Partner?"
                isOpen={openSection === 'switch'}
                onClick={() => toggleSection('switch')}
                content="Simply notify your current manager, and we'll handle everything else - including tenant communication, documentation transfer, and setting up your online portal access. The transition is smooth and hassle-free."
              />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandlordServices;