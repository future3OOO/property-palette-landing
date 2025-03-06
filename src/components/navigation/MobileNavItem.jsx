
import React, { useState, memo, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import { Button } from "@/components/ui/button";

const MobileNavItem = memo(({ title, items }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  const handleToggle = useCallback(() => {
    setIsOpen(prev => !prev);
  }, []);

  return (
    <div className="w-full rounded-md overflow-hidden">
      <Button
        variant="ghost"
        className="w-full justify-between text-gray-700 dark:text-gray-200 
                 hover:text-deep-teal dark:hover:text-light-teal transition-colors 
                 px-3 py-3 h-auto text-base font-medium"
        onClick={handleToggle}
        aria-expanded={isOpen}
      >
        <span className="text-left">{title}</span>
        <ChevronDown 
          className={`h-4 w-4 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
          aria-hidden="true"
        />
      </Button>
      
      {isOpen && (
        <div className="ml-5 mt-2 space-y-3 pb-2">
          {items.map((section, index) => (
            <div key={index} className="space-y-2.5">
              <h3 className="text-deep-teal dark:text-light-teal font-semibold text-sm">
                {section.category}
              </h3>
              <div className="ml-2 space-y-2.5">
                {section.items.map((item, itemIndex) => (
                  <div 
                    key={itemIndex} 
                    className="text-gray-600 dark:text-gray-300 
                             hover:text-deep-teal dark:hover:text-light-teal 
                             transition-colors text-sm"
                  >
                    {item.to ? (
                      <Link 
                        to={item.to} 
                        className="block py-1.5 hover:translate-x-1 transition-transform duration-150 relative"
                      >
                        {item.label}
                      </Link>
                    ) : (
                      <span className="block py-1.5 cursor-pointer">{item.label}</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
});

MobileNavItem.displayName = 'MobileNavItem';

export default MobileNavItem;
