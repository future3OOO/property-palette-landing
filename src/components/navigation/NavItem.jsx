import React from 'react';
import { ChevronDown } from 'lucide-react';
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
  DropdownMenuLabel,
} from "@/components/ui/dropdown-menu";

const NavItem = ({ title, items }) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="flex items-center space-x-1 text-gray-700 dark:text-gray-100 hover:text-deep-teal dark:hover:text-bright-teal transition-colors">
          <span>{title}</span>
          <ChevronDown className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-64 bg-white dark:bg-dark-charcoal shadow-lg rounded-lg p-2">
        {items.map((section, index) => (
          <React.Fragment key={index}>
            {index > 0 && <DropdownMenuSeparator />}
            <DropdownMenuLabel className="text-deep-teal dark:text-light-teal font-medium px-2 py-1.5">
              {section.category}
            </DropdownMenuLabel>
            {section.items.map((item, itemIndex) => (
              <DropdownMenuItem 
                key={itemIndex} 
                className="text-gray-700 dark:text-gray-100 hover:bg-soft-gray dark:hover:bg-charcoal px-2 py-1.5"
              >
                {typeof item === 'string' ? item : item}
              </DropdownMenuItem>
            ))}
          </React.Fragment>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default NavItem;