import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Plus, Minus, Home, Wrench, FileText } from 'lucide-react';
import { Button } from "@/components/ui/button";
import Header from '@/components/Header';

const TenantServices = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [openSection, setOpenSection] = useState('app');

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? '' : section);
  };

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="flex flex-col min-h-screen bg-cream">
      <Header isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="relative py-24 overflow-hidden">
          <div className="container mx-auto px-6">
            <div className="flex flex-col lg:flex-row items-center gap-16">
              <motion.div 
                {...fadeIn}
                className="flex-1 max-w-2xl"
              >
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-deep-teal leading-tight">
                  Welcome Home.<br />
                  We're Here to Help.
                </h1>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  Your comfort is our priority. From maintenance requests to rent payments, 
                  we've made everything simple and stress-free. Feel at home with our 
                  dedicated support team.
                </p>
                <div className="flex gap-4">
                  <Button
                    size="lg"
                    className="bg-deep-teal hover:bg-light-teal text-white transition-all duration-300"
                  >
                    Submit a Request
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-deep-teal text-deep-teal hover:bg-deep-teal hover:text-white transition-all duration-300"
                  >
                    Contact Support
                  </Button>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="flex-1 relative"
              >
                <img 
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                  alt="Welcoming Home Interior"
                  className="rounded-2xl shadow-xl w-full object-cover aspect-[4/3]"
                />
                <div className="absolute -bottom-8 -right-8 bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-lg max-w-xs">
                  <p className="text-deep-teal font-semibold mb-2">24/7 Support</p>
                  <p className="text-gray-600 text-sm">We're always here when you need us, just a click away.</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-deep-teal">
                Everything You Need, All in One Place
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Managing your rental shouldn't be complicated. We've simplified everything 
                so you can focus on what matters most - enjoying your home.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              <ServiceCard
                icon={<Home className="h-8 w-8 text-deep-teal" />}
                title="Tenant Portal"
                description="Access everything you need through our user-friendly portal - from maintenance requests to rent payments."
              />
              <ServiceCard
                icon={<Wrench className="h-8 w-8 text-deep-teal" />}
                title="Quick Maintenance"
                description="Report issues instantly and track their progress. We'll keep you updated every step of the way."
              />
              <ServiceCard
                icon={<FileText className="h-8 w-8 text-deep-teal" />}
                title="Document Center"
                description="All your important documents securely stored and accessible whenever you need them."
              />
            </div>
          </div>
        </section>

        {/* Team Section with FAQ */}
        <section className="py-20 bg-cream">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-8"
              >
                <h2 className="text-3xl md:text-4xl font-bold text-deep-teal">
                  Have Questions? We're Here to Help
                </h2>
                <div className="space-y-4">
                  <AccordionItem
                    title="How do I submit a maintenance request?"
                    isOpen={openSection === 'maintenance'}
                    onClick={() => toggleSection('maintenance')}
                    content="Simply log into your tenant portal and click on 'Maintenance Request'. Fill out the form with details about the issue, and we'll get right on it."
                  />
                  <AccordionItem
                    title="When is rent due?"
                    isOpen={openSection === 'rent'}
                    onClick={() => toggleSection('rent')}
                    content="Rent is due on the 1st of each month. You can easily set up automatic payments through your tenant portal."
                  />
                  <AccordionItem
                    title="How do I contact support?"
                    isOpen={openSection === 'support'}
                    onClick={() => toggleSection('support')}
                    content="Our support team is available 24/7 through the tenant portal, email, or phone. For emergencies, please call our dedicated emergency line."
                  />
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="relative"
              >
                <img 
                  src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                  alt="Property Manager"
                  className="rounded-2xl shadow-xl"
                />
                <div className="absolute -bottom-6 -right-6 bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-lg">
                  <p className="text-deep-teal font-semibold mb-2">Dedicated Support Team</p>
                  <p className="text-gray-600 text-sm">Our experienced team is here to make your rental experience exceptional.</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

const AccordionItem = ({ title, content, isOpen, onClick }) => (
  <motion.div 
    initial={false}
    animate={isOpen ? "open" : "closed"}
    className="border-b border-gray-200"
  >
    <button
      onClick={onClick}
      className="w-full flex justify-between items-center py-4 text-left group"
    >
      <span className="text-lg font-semibold text-deep-teal group-hover:text-light-teal transition-colors">
        {title}
      </span>
      {isOpen ? (
        <Minus className="h-5 w-5 text-deep-teal group-hover:text-light-teal transition-colors" />
      ) : (
        <Plus className="h-5 w-5 text-deep-teal group-hover:text-light-teal transition-colors" />
      )}
    </button>
    <motion.div 
      initial="collapsed"
      animate={isOpen ? "open" : "collapsed"}
      variants={{
        open: { opacity: 1, height: "auto", marginBottom: 16 },
        collapsed: { opacity: 0, height: 0, marginBottom: 0 }
      }}
      transition={{ duration: 0.3 }}
      className="overflow-hidden"
    >
      <p className="text-gray-600">{content}</p>
    </motion.div>
  </motion.div>
);

const ServiceCard = ({ icon, title, description }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
  >
    <div className="bg-cream/50 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
      {icon}
    </div>
    <h3 className="text-xl font-semibold text-deep-teal mb-4">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </motion.div>
);

export default TenantServices;
