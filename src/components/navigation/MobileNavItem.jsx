import React, { useState, memo } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import { Button } from "@/components/ui/button";

const MobileNavItem = ({ title, items }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div>
      <Button
        variant="ghost"
        className="w-full justify-between text-gray-700 dark:text-gray-300 hover:text-deep-teal dark:hover:text-light-teal transition-colors"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{title}</span>
        <ChevronDown className={`h-4 w-4 transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </Button>
      {isOpen && (
        <div className="ml-4 mt-2 space-y-4">
          {items.map((section, index) => (
            <div key={index} className="space-y-2">
              <h3 className="text-deep-teal dark:text-light-teal font-medium">{section.category}</h3>
              <div className="ml-2 space-y-2">
                {section.items.map((item, itemIndex) => (
                  <div 
                    key={itemIndex} 
                    className="text-gray-600 dark:text-gray-300 hover:text-deep-teal dark:hover:text-light-teal transition-colors"
                  >
                    {item.to ? (
                      <Link to={item.to} className="block">
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

export default memo(MobileNavItem);