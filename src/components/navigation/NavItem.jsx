
import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const NavItem = memo(({ title, items }) => {
  // Pre-compute menu content for performance - but no need for useState/useCallback
  const menuContent = (
    <>
      {items.map((section, index) => (
        <div key={index} className="mb-5 last:mb-0">
          <h3 className="text-deep-teal dark:text-light-teal font-medium text-sm mb-2 uppercase tracking-wider">
            {section.category}
          </h3>
          <div className="space-y-1.5">
            {section.items.map((item, itemIndex) => (
              <div
                key={itemIndex}
                className="text-gray-700 dark:text-gray-300 hover:text-deep-teal dark:hover:text-bright-teal transition-colors text-sm py-1"
              >
                {item.to ? (
                  <Link 
                    to={item.to} 
                    className="block hover:translate-x-1 transition-transform"
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
    </>
  );

  return (
    <NavigationMenu className="max-w-none">
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger 
            className="group h-auto px-3 py-2 text-gray-700 dark:text-gray-100 
                     hover:text-deep-teal dark:hover:text-bright-teal transition-colors 
                     bg-transparent hover:bg-transparent focus:bg-transparent 
                     data-[active]:bg-transparent data-[state=open]:bg-transparent"
          >
            {title}
          </NavigationMenuTrigger>
          <NavigationMenuContent 
            className="min-w-[280px] sm:min-w-[320px] max-h-[85vh] overflow-y-auto bg-white dark:bg-dark-charcoal rounded-lg p-4 sm:p-6 shadow-medium"
          >
            {menuContent}
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
});

NavItem.displayName = 'NavItem';

export default NavItem;
