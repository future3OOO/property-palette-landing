import React from 'react';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const NavItem = ({ title, items }) => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="group h-10 px-4 py-2 text-gray-700 dark:text-gray-100 hover:text-deep-teal dark:hover:text-bright-teal transition-colors bg-transparent hover:bg-transparent focus:bg-transparent data-[active]:bg-transparent data-[state=open]:bg-transparent">
            {title}
          </NavigationMenuTrigger>
          <NavigationMenuContent className="min-w-[320px] bg-white dark:bg-dark-charcoal rounded-lg p-6 shadow-medium">
            {items.map((section, index) => (
              <div key={index} className="mb-6 last:mb-0">
                <h3 className="text-deep-teal dark:text-light-teal font-medium text-sm mb-2 uppercase tracking-wider">
                  {section.category}
                </h3>
                <div className="space-y-2">
                  {section.items.map((item, itemIndex) => (
                    <div
                      key={itemIndex}
                      className="text-gray-700 dark:text-gray-300 hover:text-deep-teal dark:hover:text-bright-teal transition-colors text-sm py-1"
                    >
                      {typeof item === 'string' ? (
                        <span className="cursor-pointer">{item}</span>
                      ) : (
                        item
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default NavItem;