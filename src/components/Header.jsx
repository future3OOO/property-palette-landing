
import React, { useCallback, memo, useState, useEffect } from 'react';
import { Menu, Sun, Moon } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Link } from 'react-router-dom';
import { useTheme } from 'next-themes';
import NavItem from './navigation/NavItem';
import MobileNavItem from './navigation/MobileNavItem';
import ContactDialog from './ContactDialog';
import { navigationConfig } from '../constants/navigationConfig';

const navigationSections = {
  forOwners: navigationConfig.forOwners,
  forTenants: navigationConfig.forTenants,
  resources: navigationConfig.resources,
  about: navigationConfig.about,
};

const Header = memo(() => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  
  // After mounting, we can access the theme
  useEffect(() => {
    setMounted(true);
    
    // Add scroll listener
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDarkModeChange = useCallback((checked) => {
    setTheme(checked ? 'dark' : 'light');
  }, [setTheme]);

  // Memoized navigation items to prevent re-renders
  const navItems = useCallback(() => (
    <>
      <NavItem title="For Owners" items={navigationSections.forOwners} />
      <NavItem title="For Tenants" items={navigationSections.forTenants} />
      <NavItem title="Resources" items={navigationSections.resources} />
      <NavItem title="About" items={navigationSections.about} />
    </>
  ), []);

  // Use the mounted check to avoid hydration mismatch
  if (!mounted) {
    return null; // Render nothing until mounted to prevent hydration mismatch
  }

  return (
    <header className={`sticky top-0 bg-white/95 dark:bg-charcoal/95 backdrop-blur-md z-50 transition-all duration-200 ease-in-out border-b ${scrolled ? 'shadow-sm border-gray-100 dark:border-gray-800' : 'border-transparent'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1400px]">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link 
            to="/" 
            className="flex items-center shrink-0 hover:opacity-90 transition-opacity"
            aria-label="Property Partner Home"
          >
            <svg 
              width="40" 
              height="40" 
              viewBox="0 0 334 568" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 dark:invert"
              aria-hidden="true"
            >
              <g>
                <path 
                  fill="#05c1b7" 
                  strokeWidth="2"
                  d="M186.09,325.17c0-39.32-31.99-71.32-71.32-71.32s-71.25,31.93-71.31,71.21c0,0,0,.02,0,.03v190.41c0,5.6,4.54,10.14,10.14,10.14s10.14-4.54,10.14-10.14v-140.59c12.96,13.3,31.05,21.57,51.04,21.57,39.32,0,71.32-31.99,71.32-71.32Z"
                />
                <path 
                  fill="#ffffff" 
                  strokeWidth="2"
                  d="M63.74,325.17c0-28.14,22.9-51.04,51.04-51.04s51.04,22.9,51.04,51.04-22.9,51.04-51.04,51.04-51.04-22.9-51.04-51.04Z"
                />
              </g>
              <path 
                fill="#294c4b" 
                strokeWidth="2"
                d="M318.57,182.68L152.78,15.82C142.65,5.62,129.15,0,114.77,0h-.02c-14.37,0-27.87,5.61-38,15.8L3.12,89.84c-3.95,3.97-3.93,10.39.04,14.34,3.97,3.95,10.39,3.93,14.34-.04L91.14,30.1c6.3-6.33,14.69-9.82,23.62-9.82h0c8.94,0,17.33,3.5,23.62,9.83l165.78,166.85c6.24,6.31,9.66,14.67,9.64,23.57v293.97c0,18.37-14.95,33.32-33.32,33.32H53.6c-18.37,0-33.32-14.95-33.32-33.32v-187.33c0-51.91,42.93-96.1,93.74-96.5,26.33-.24,51.88,10.76,69.89,30.07,18.26,19.59,27.16,45.17,25.06,72.04-3.53,45.23-40.24,82.4-85.39,86.47-8.26.74-16.53.44-24.56-.91-5.52-.94-10.75,2.8-11.68,8.32-.93,5.52,2.8,10.75,8.32,11.68,9.74,1.64,19.75,2.01,29.73,1.1,54.87-4.95,99.49-50.13,103.78-105.09,2.55-32.6-8.26-63.65-30.44-87.44-21.87-23.46-52.77-36.68-84.88-36.53-61.72.48-113.86,53.96-113.86,116.78v187.33c0,29.55,24.04,53.6,53.6,53.6h226.89c29.55,0,53.6-24.04,53.6-53.6V220.56c.05-14.27-5.46-27.72-15.52-37.88Z"
              />
            </svg>
            <span className="ml-2 sm:ml-3 text-base sm:text-lg md:text-xl font-bold">
              <span className="text-deep-teal dark:text-light-teal">Property</span>
              <span className="text-soft-teal dark:text-bright-teal">Partner</span>
            </span>
          </Link>

          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8 flex-1 justify-center transform-gpu" 
               aria-label="Main navigation"
               style={{
                 willChange: 'transform',
                 transform: 'translateZ(0)',
               }}>
            {navItems()}
            <Link 
              to="/pricing" 
              className="text-gray-700 dark:text-gray-300 hover:text-deep-teal dark:hover:text-bright-teal transition-colors font-medium"
            >
              Pricing
            </Link>
            <ContactDialog>
              <Button variant="ghost" className="text-gray-700 dark:text-gray-300 hover:text-deep-teal dark:hover:text-bright-teal transition-colors font-medium">
                Contact
              </Button>
            </ContactDialog>
          </nav>

          <div className="flex items-center gap-3 sm:gap-6">
            <div className="hidden sm:flex items-center gap-2 sm:gap-3">
              <Sun className="h-3 w-3 sm:h-4 sm:w-4 text-gray-600 dark:text-gray-400" />
              <Switch
                checked={theme === 'dark'}
                onCheckedChange={handleDarkModeChange}
                className="data-[state=checked]:bg-light-teal"
                aria-label="Toggle dark mode"
              />
              <Moon className="h-3 w-3 sm:h-4 sm:w-4 text-gray-600 dark:text-gray-400" />
            </div>

            <Button
              variant="outline"
              className="hidden lg:inline-flex border-deep-teal text-deep-teal hover:bg-deep-teal hover:text-white dark:border-light-teal dark:text-light-teal dark:hover:bg-light-teal dark:hover:text-dark-charcoal transition-all font-medium text-sm h-9"
            >
              Sign In
            </Button>

            <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
              <SheetTrigger asChild>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="lg:hidden hover:bg-gray-100 dark:hover:bg-charcoal-gray h-9 w-9"
                  aria-label="Open menu"
                >
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent 
                side="right" 
                className="w-[280px] sm:w-80 bg-white dark:bg-charcoal p-0 overflow-y-auto"
              >
                <nav className="flex flex-col space-y-4 mt-8 p-4">
                  <div className="sm:hidden flex items-center justify-center gap-2 mb-4 pb-4 border-b border-gray-100 dark:border-gray-800">
                    <Sun className="h-4 w-4 text-gray-600 dark:text-gray-400" />
                    <Switch
                      checked={theme === 'dark'}
                      onCheckedChange={handleDarkModeChange}
                      className="data-[state=checked]:bg-light-teal"
                      aria-label="Toggle dark mode"
                    />
                    <Moon className="h-4 w-4 text-gray-600 dark:text-gray-400" />
                  </div>
                  <MobileNavItem title="For Owners" items={navigationSections.forOwners} />
                  <MobileNavItem title="For Tenants" items={navigationSections.forTenants} />
                  <MobileNavItem title="Resources" items={navigationSections.resources} />
                  <MobileNavItem title="About" items={navigationSections.about} />
                  <Link 
                    to="/pricing" 
                    className="block text-lg text-gray-700 dark:text-gray-300 hover:text-deep-teal dark:hover:text-light-teal px-2 py-2"
                  >
                    Pricing
                  </Link>
                  <ContactDialog>
                    <Button variant="ghost" className="w-full justify-start text-lg text-gray-700 dark:text-gray-300 hover:text-deep-teal dark:hover:text-light-teal">
                      Contact
                    </Button>
                  </ContactDialog>
                  <Button className="w-full bg-deep-teal text-white hover:bg-light-teal dark:bg-light-teal dark:text-deep-teal dark:hover:bg-deep-teal dark:hover:text-white mt-2">
                    Sign In
                  </Button>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
});

Header.displayName = 'Header';

export default Header;
