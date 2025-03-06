
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
        <div key={index} className="mb-6 last:mb-0">
          <h3 className="text-deep-teal dark:text-light-teal font-semibold text-sm mb-3 uppercase tracking-wider">
            {section.category}
          </h3>
          <div className="space-y-2.5">
            {section.items.map((item, itemIndex) => (
              <div
                key={itemIndex}
                className="text-gray-700 dark:text-gray-300 hover:text-deep-teal dark:hover:text-bright-teal transition-colors text-sm py-1"
              >
                {item.to ? (
                  <Link 
                    to={item.to} 
                    className="block hover:translate-x-1 transition-transform relative group"
                  >
                    {item.label}
                    <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-deep-teal dark:bg-bright-teal transition-all duration-300 group-hover:w-full"></span>
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
            className="group h-auto px-4 py-2.5 text-base font-medium text-gray-700 dark:text-gray-100 
                     hover:text-deep-teal dark:hover:text-bright-teal transition-colors 
                     bg-transparent hover:bg-transparent focus:bg-transparent 
                     data-[active]:bg-transparent data-[state=open]:bg-transparent
                     aria-[expanded=true]:text-deep-teal dark:aria-[expanded=true]:text-bright-teal"
          >
            {title}
          </NavigationMenuTrigger>
          <NavigationMenuContent 
            className="min-w-[280px] sm:min-w-[320px] max-h-[85vh] overflow-y-auto bg-white dark:bg-dark-charcoal rounded-lg p-5 sm:p-6 shadow-medium border border-gray-100 dark:border-gray-800"
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
