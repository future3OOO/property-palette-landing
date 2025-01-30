import React, { useState, useEffect, useCallback } from 'react';
import { debounce } from 'lodash';
import ProgressBar from './ProgressBar';

const ScrollProgress = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  const handleScroll = useCallback(
    debounce(() => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.pageYOffset;
      setScrollProgress((currentScroll / totalScroll) * 100);
    }, 100),
    []
  );

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      handleScroll.cancel();
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  return <ProgressBar scrollProgress={scrollProgress} />;
};

export default ScrollProgress;