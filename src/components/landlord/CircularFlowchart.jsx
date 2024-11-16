import React from 'react';
import { motion } from 'framer-motion';
import { Card } from "@/components/ui/card";

const CircularFlowchart = () => {
  const items = [
    {
      title: "Tenant Relations",
      description: "Professional tenant communication and relationship management",
      gradient: "from-deep-teal/5 to-light-teal/5 dark:from-light-teal/5 dark:to-bright-teal/5"
    },
    {
      title: "Market Analysis",
      description: "Regular rent reviews & market updates",
      gradient: "from-deep-teal/5 to-light-teal/5 dark:from-light-teal/5 dark:to-bright-teal/5"
    },
    {
      title: "Compliance Management",
      description: "Healthy homes standards & risk management",
      gradient: "from-deep-teal/5 to-light-teal/5 dark:from-light-teal/5 dark:to-bright-teal/5"
    },
    {
      title: "Marketing & Leasing",
      description: "Professional advertising & tenant screening",
      gradient: "from-deep-teal/5 to-light-teal/5 dark:from-light-teal/5 dark:to-bright-teal/5"
    },
    {
      title: "Property Inspections",
      description: "Regular inspections with detailed reports",
      gradient: "from-deep-teal/5 to-light-teal/5 dark:from-light-teal/5 dark:to-bright-teal/5"
    },
    {
      title: "Maintenance Care",
      description: "24/7 maintenance coordination",
      gradient: "from-deep-teal/5 to-light-teal/5 dark:from-light-teal/5 dark:to-bright-teal/5"
    },
    {
      title: "Financial Control",
      description: "Rent collection & expense management",
      gradient: "from-deep-teal/5 to-light-teal/5 dark:from-light-teal/5 dark:to-bright-teal/5"
    }
  ];

  const radius = 260;
  const centerX = 400;
  const centerY = 400;
  const startAngle = -Math.PI / 2;
  const angleStep = (2 * Math.PI) / items.length;

  const getPosition = (index) => {
    const angle = startAngle + angleStep * index;
    return {
      x: centerX + radius * Math.cos(angle),
      y: centerY + radius * Math.sin(angle),
      angle: (angle * 180) / Math.PI
    };
  };

  return (
    <section className="py-24 bg-gradient-soft relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-black/[0.02] dark:bg-grid-white/[0.02]" />
      
      <div className="container mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="text-deep-teal dark:text-soft-teal">What does a </span>
            <span className="text-soft-teal dark:text-light-teal">good property manager do?</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto">
            Our comprehensive property management services cover every aspect of your investment
          </p>
        </motion.div>

        <div className="relative max-w-[900px] mx-auto">
          <Card className="relative aspect-square bg-transparent border-none shadow-none overflow-visible">
            <svg 
              viewBox="0 0 800 800" 
              className="w-full h-full"
            >
              <circle
                cx={centerX}
                cy={centerY}
                r={radius + 40}
                className="fill-none stroke-deep-teal/5 dark:stroke-light-teal/5"
                strokeWidth="60"
              />
              
              <circle
                cx={centerX}
                cy={centerY}
                r={radius}
                className="fill-none stroke-deep-teal/10 dark:stroke-light-teal/10 animate-pulse-slow"
                strokeWidth="2"
                strokeDasharray="4 4"
              />

              <g>
                <circle
                  cx={centerX}
                  cy={centerY}
                  r="100"
                  className="fill-deep-teal/5 dark:fill-light-teal/5 blur-sm"
                />
                
                <circle
                  cx={centerX}
                  cy={centerY}
                  r="90"
                  className="fill-gradient-to-br from-deep-teal to-light-teal dark:from-light-teal dark:to-bright-teal opacity-10"
                />
                
                <circle
                  cx={centerX}
                  cy={centerY}
                  r="80"
                  className="fill-white dark:fill-charcoal shadow-lg"
                />

                <g className="drop-shadow-sm">
                  <text
                    x={centerX}
                    y={centerY - 15}
                    textAnchor="middle"
                    className="text-deep-teal dark:text-light-teal font-bold text-3xl fill-current"
                  >
                    Property
                  </text>
                  <text
                    x={centerX}
                    y={centerY + 20}
                    textAnchor="middle"
                    className="text-deep-teal dark:text-light-teal font-bold text-3xl fill-current"
                  >
                    Partner
                  </text>
                </g>
              </g>

              {items.map((item, index) => {
                const pos = getPosition(index);
                const isLeftSide = pos.x < centerX;
                const isTopHalf = pos.y < centerY;

                return (
                  <motion.g
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <line
                      x1={centerX + (radius - 90) * Math.cos(startAngle + angleStep * index)}
                      y1={centerY + (radius - 90) * Math.sin(startAngle + angleStep * index)}
                      x2={pos.x}
                      y2={pos.y}
                      className="stroke-deep-teal/10 dark:stroke-light-teal/10"
                      strokeWidth="2"
                      strokeDasharray="6 6"
                    />

                    <circle
                      cx={pos.x}
                      cy={pos.y}
                      r="12"
                      className="fill-deep-teal/10 dark:fill-light-teal/10 animate-pulse-slow"
                    />
                    <circle
                      cx={pos.x}
                      cy={pos.y}
                      r="6"
                      className="fill-deep-teal dark:fill-light-teal"
                    />

                    <foreignObject
                      x={isLeftSide ? pos.x - 220 : pos.x + 20}
                      y={isTopHalf ? pos.y - 50 : pos.y}
                      width="200"
                      height="100"
                      className="overflow-visible"
                    >
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        className={`bg-gradient-to-br ${item.gradient} backdrop-blur-sm p-4 rounded-xl border border-deep-teal/10 dark:border-light-teal/10 shadow-sm hover:shadow-md transition-all duration-300`}
                      >
                        <p className="text-deep-teal dark:text-light-teal font-semibold text-sm mb-2">
                          {item.title}
                        </p>
                        <p className="text-xs text-deep-teal/70 dark:text-light-teal/70">
                          {item.description}
                        </p>
                      </motion.div>
                    </foreignObject>
                  </motion.g>
                );
              })}
            </svg>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CircularFlowchart;