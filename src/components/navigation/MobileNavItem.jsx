import React, { useState, memo } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import { Button } from "@/components/ui/button";

const MobileNavItem = ({ title, items }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="transform-gpu" style={{ willChange: 'transform', transform: 'translateZ(0)' }}>
      <Button
        variant="ghost"
        className="w-full justify-between text-gray-700 dark:text-gray-300 
                 hover:text-deep-teal dark:hover:text-light-teal transition-colors"
        onClick={() => setIsOpen(!isOpen)}
        style={{
          willChange: 'transform, color',
          transform: 'translateZ(0)',
        }}
      >
        <span>{title}</span>
        <ChevronDown 
          className={`h-4 w-4 transition-transform duration-75 transform-gpu ${isOpen ? "rotate-180" : ""}`}
          style={{ willChange: 'transform' }}
        />
      </Button>
      {isOpen && (
        <div 
          className="ml-4 mt-2 space-y-4 transform-gpu"
          style={{
            willChange: 'transform, opacity',
            transform: 'translateZ(0)',
          }}
        >
          {items.map((section, index) => (
            <div key={index} className="space-y-2">
              <h3 className="text-deep-teal dark:text-light-teal font-medium">
                {section.category}
              </h3>
              <div className="ml-2 space-y-2">
                {section.items.map((item, itemIndex) => (
                  <div 
                    key={itemIndex} 
                    className="text-gray-600 dark:text-gray-300 
                             hover:text-deep-teal dark:hover:text-light-teal 
                             transition-colors transform-gpu"
                    style={{ willChange: 'transform, color' }}
                  >
                    {item.to ? (
                      <Link 
                        to={item.to} 
                        className="block hover:translate-x-1 transition-transform duration-75"
                        style={{
                          willChange: 'transform',
                          transform: 'translateZ(0)',
                        }}
                      >
                        {item.label}
                      </Link>
                    ) : (
                      <span className="cursor-pointer">{item.label}</span>
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
};

// Prevent unnecessary re-renders
export default memo(MobileNavItem, (prevProps, nextProps) => {
  return (
    prevProps.title === nextProps.title &&
    prevProps.items === nextProps.items
  );
});