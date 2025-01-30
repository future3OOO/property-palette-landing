import React from 'react';
import HeroSection from '@/components/landlord/HeroSection';
import CircularFlowchart from '@/components/landlord/CircularFlowchart';
import ServiceCard from '@/components/landlord/ServiceCard';

const LandlordServices = () => {
  return (
    <div className="min-h-screen pt-24">
      <HeroSection />
      <CircularFlowchart />
      <ServiceCard />
    </div>
  );
};

export default LandlordServices;