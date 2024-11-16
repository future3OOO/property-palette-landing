import React from 'react';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import AboutHero from '@/components/about/AboutHero';
import AboutTimeline from '@/components/about/AboutTimeline';
import AboutPromise from '@/components/about/AboutPromise';
import AboutTransformation from '@/components/about/AboutTransformation';

const About = () => {
  const [isDarkMode, setIsDarkMode] = React.useState(false);

  return (
    <div className="min-h-screen bg-gradient-soft">
      <Header isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      
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