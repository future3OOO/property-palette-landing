import React, { memo, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const NavItem = ({ title, items }) => {
  const [isHovered, setIsHovered] = useState(false);

  // Prefetch content on mount
  React.useEffect(() => {
    const prefetchContent = () => {
      items.forEach(section => {
        section.items.forEach(item => {
          if (item.to) {
            const link = document.createElement('link');
            link.rel = 'prefetch';
            link.href = item.to;
            document.head.appendChild(link);
          }
        });
      });
    };

    // Prefetch after initial render
    requestIdleCallback(() => prefetchContent());
  }, [items]);

  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger 
            className="group h-10 px-4 py-2 text-gray-700 dark:text-gray-100 
                     hover:text-deep-teal dark:hover:text-bright-teal transition-colors 
                     bg-transparent hover:bg-transparent focus:bg-transparent 
                     data-[active]:bg-transparent data-[state=open]:bg-transparent
                     transform-gpu"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{
              willChange: 'transform, color',
              transform: 'translateZ(0)',
            }}
          >
            {title}
          </NavigationMenuTrigger>
          <NavigationMenuContent 
            className="min-w-[320px] bg-white dark:bg-dark-charcoal rounded-lg p-6 
                     shadow-medium transform-gpu"
            style={{
              willChange: 'transform, opacity',
              transform: 'translateZ(0)',
              backfaceVisibility: 'hidden',
              perspective: '1000px'
            }}
          >
            {items.map((section, index) => (
              <div 
                key={index} 
                className="mb-6 last:mb-0"
              >
                <h3 className="text-deep-teal dark:text-light-teal font-medium 
                             text-sm mb-2 uppercase tracking-wider">
                  {section.category}
                </h3>
                <div className="space-y-2">
                  {section.items.map((item, itemIndex) => (
                    <div
                      key={itemIndex}
                      className="text-gray-700 dark:text-gray-300 
                               hover:text-deep-teal dark:hover:text-bright-teal 
                               transition-colors text-sm py-1"
                    >
                      {item.to ? (
                        <Link 
                          to={item.to} 
                          className="block hover:translate-x-1 transition-transform transform-gpu"
                          style={{
                            willChange: 'transform',
                            transform: 'translateZ(0)'
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
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

// Prevent unnecessary re-renders
export default memo(NavItem, (prevProps, nextProps) => {
  return (
    prevProps.title === nextProps.title &&
    prevProps.items === nextProps.items
  );
});