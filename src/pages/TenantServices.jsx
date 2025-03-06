
import React from 'react';
import { 
  Building2, 
  FileText, 
  WrenchIcon, 
  CreditCard, 
  Clipboard, 
  MessageSquare, 
  CalendarCheck 
} from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const TenantServices = () => {
  const services = [
    {
      title: 'Rental Applications',
      description: 'Submit and track your rental application online.',
      icon: <FileText className="h-6 w-6 text-deep-teal dark:text-light-teal" />,
      link: '/rental-application'
    },
    {
      title: 'Maintenance Requests',
      description: 'Report maintenance issues and track resolution status.',
      icon: <WrenchIcon className="h-6 w-6 text-deep-teal dark:text-light-teal" />,
      link: '/services/maintenance'
    },
    {
      title: 'Rent Payments',
      description: 'Make rent payments securely online.',
      icon: <CreditCard className="h-6 w-6 text-deep-teal dark:text-light-teal" />,
      link: '#'
    },
    {
      title: 'Lease Documents',
      description: 'Access your lease and related documents anytime.',
      icon: <Clipboard className="h-6 w-6 text-deep-teal dark:text-light-teal" />,
      link: '#'
    },
    {
      title: 'Communication Portal',
      description: 'Stay in touch with your property manager.',
      icon: <MessageSquare className="h-6 w-6 text-deep-teal dark:text-light-teal" />,
      link: '#'
    },
    {
      title: 'Lease Renewal',
      description: 'Manage your lease renewal process efficiently.',
      icon: <CalendarCheck className="h-6 w-6 text-deep-teal dark:text-light-teal" />,
      link: '#'
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-charcoal pt-24 pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-deep-teal dark:text-light-teal">
              Tenant Services
            </h1>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              We provide comprehensive services to ensure you have a pleasant and hassle-free rental experience.
            </p>
          </motion.div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full shadow-md hover:shadow-lg transition-shadow duration-300 bg-white dark:bg-charcoal-gray border-gray-200 dark:border-gray-700">
                <div className="p-6 flex flex-col h-full">
                  <div className="rounded-full bg-cream dark:bg-gray-800 p-3 w-fit mb-4">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-deep-teal dark:text-light-teal">{service.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">{service.description}</p>
                  <div className="mt-auto">
                    <Link to={service.link}>
                      <Button 
                        variant={index % 2 === 0 ? "default" : "outline"} 
                        className={index % 2 === 0 ? 
                          "bg-deep-teal hover:bg-light-teal text-white w-full" : 
                          "border-deep-teal text-deep-teal hover:bg-deep-teal hover:text-white dark:border-light-teal dark:text-light-teal dark:hover:bg-light-teal dark:hover:text-charcoal w-full"
                        }
                      >
                        Learn More
                      </Button>
                    </Link>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="bg-cream dark:bg-gray-800 rounded-xl p-8 md:p-12 text-center"
        >
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-deep-teal dark:text-light-teal">
              Need Additional Assistance?
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              Our team is ready to help you with any questions or concerns you may have about your rental property.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button className="bg-deep-teal hover:bg-light-teal text-white">
                Contact Support
              </Button>
              <Link to="/faq">
                <Button variant="outline" className="border-deep-teal text-deep-teal hover:bg-deep-teal hover:text-white dark:border-light-teal dark:text-light-teal dark:hover:bg-light-teal dark:hover:text-charcoal">
                  View FAQ
                </Button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default TenantServices;
