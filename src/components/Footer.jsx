import React from 'react';
import { Facebook, Twitter, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-charcoal-gray border-t border-gray-100 dark:border-gray-800">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <h3 className="text-xl font-bold text-deep-teal dark:text-light-teal mb-4">
              Property Partner
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Revolutionizing property management with cutting-edge solutions.
            </p>
            <div className="flex space-x-4">
              <SocialLink icon={Facebook} href="#" />
              <SocialLink icon={Twitter} href="#" />
              <SocialLink icon={Linkedin} href="#" />
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <FooterLink href="#" text="Home" />
              <FooterLink href="#" text="Services" />
              <FooterLink href="#" text="About Us" />
              <FooterLink href="#" text="Contact" />
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <ContactItem icon={MapPin} text="123 Property Lane, Real Estate City, 12345" />
              <ContactItem icon={Phone} text="(123) 456-7890" />
              <ContactItem icon={Mail} text="info@propertypartner.com" />
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Newsletter</h4>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Subscribe to our newsletter for updates and insights.
            </p>
            <form className="space-y-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:border-deep-teal dark:focus:border-light-teal outline-none transition-colors"
              />
              <button className="w-full px-4 py-2 bg-deep-teal hover:bg-light-teal text-white dark:bg-light-teal dark:text-deep-teal dark:hover:bg-deep-teal dark:hover:text-white rounded-lg transition-colors">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-100 dark:border-gray-800 text-center">
          <p className="text-gray-600 dark:text-gray-300">
            © {new Date().getFullYear()} Property Partner. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

const SocialLink = ({ icon: Icon, href }) => (
  <a
    href={href}
    className="w-10 h-10 rounded-lg bg-gray-50 dark:bg-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-300 hover:bg-deep-teal hover:text-white dark:hover:bg-light-teal dark:hover:text-deep-teal transition-colors"
  >
    <Icon className="w-5 h-5" />
  </a>
);

const FooterLink = ({ href, text }) => (
  <li>
    <a
      href={href}
      className="text-gray-600 dark:text-gray-300 hover:text-deep-teal dark:hover:text-light-teal transition-colors"
    >
      {text}
    </a>
  </li>
);

const ContactItem = ({ icon: Icon, text }) => (
  <li className="flex items-start space-x-3">
    <Icon className="w-5 h-5 text-deep-teal dark:text-light-teal flex-shrink-0 mt-1" />
    <span className="text-gray-600 dark:text-gray-300">{text}</span>
  </li>
);

export default Footer;