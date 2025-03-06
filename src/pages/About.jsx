
import React from 'react';
import { motion } from 'framer-motion';
import AboutHero from '@/components/about/AboutHero';
import AboutTimeline from '@/components/about/AboutTimeline';
import AboutPromise from '@/components/about/AboutPromise';
import AboutTransformation from '@/components/about/AboutTransformation';

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-soft">
      <main className="pt-20">
        <AboutHero />
        <AboutTimeline />
        <AboutTransformation />
        <AboutPromise />
      </main>
    </div>
  );
};

export default About;
