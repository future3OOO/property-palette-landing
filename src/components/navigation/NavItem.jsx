
import React, { memo, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const NavItem = memo(({ title, items }) => {
  // Use a state for lazy loading dropdown content
  const [isHovered, setIsHovered] = useState(false);
  
  // Only render dropdown content when needed (performance optimization)
  const handleMouseEnter = () => setIsHovered(true);
  
  const menuContent = isHovered ? (
    <div className="grid gap-6 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[repeat(auto-fit,minmax(180px,1fr))]">
      {items.map((section, index) => (
        <div key={index} className="space-y-3">
          <h3 className="text-deep-teal dark:text-light-teal font-semibold text-sm uppercase tracking-wide">
            {section.category}
          </h3>
          <div className="space-y-2">
            {section.items.map((item, itemIndex) => (
              <div
                key={itemIndex}
                className="text-gray-700 dark:text-gray-300 hover:text-deep-teal dark:hover:text-bright-teal transition-colors text-sm group"
              >
                {item.to ? (
                  <Link 
                    to={item.to} 
                    className="block py-1.5 group-hover:translate-x-1 transition-transform duration-150 relative"
                  >
                    {item.label}
                    <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-deep-teal dark:bg-bright-teal transition-all duration-200 group-hover:w-full"></span>
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
  ) : null;

  return (
    <NavigationMenu className="max-w-none">
      <NavigationMenuList>
        <NavigationMenuItem onMouseEnter={handleMouseEnter}>
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
            className="min-w-[280px] sm:min-w-[320px] max-h-[85vh] overflow-y-auto bg-white dark:bg-dark-charcoal rounded-lg shadow-medium border border-gray-100 dark:border-gray-800 animate-fade-in"
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
