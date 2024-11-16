import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { motion } from 'framer-motion';

const PersonalInfoForm = ({ formData, handleChange }) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: 20 }}
    className="space-y-6"
  >
    <div className="space-y-2">
      <Label htmlFor="fullName" className="text-base font-medium">
        Full Name
      </Label>
      <Input
        id="fullName"
        type="text"
        value={formData.fullName}
        onChange={handleChange}
        className="w-full bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 focus-within:ring-2 focus-within:ring-deep-teal dark:focus-within:ring-light-teal transition-all"
        placeholder="Enter your full name"
        required
      />
    </div>

    <div className="space-y-2">
      <Label htmlFor="propertyAddress" className="text-base font-medium">
        Property Address
      </Label>
      <Input
        id="propertyAddress"
        type="text"
        value={formData.propertyAddress}
        onChange={handleChange}
        className="w-full bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 focus-within:ring-2 focus-within:ring-deep-teal dark:focus-within:ring-light-teal transition-all"
        placeholder="Enter the property address"
        required
      />
    </div>

    <div className="space-y-2">
      <Label htmlFor="email" className="text-base font-medium">
        Email Address
      </Label>
      <Input
        id="email"
        type="email"
        value={formData.email}
        onChange={handleChange}
        className="w-full bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 focus-within:ring-2 focus-within:ring-deep-teal dark:focus-within:ring-light-teal transition-all"
        placeholder="Enter your email address"
        required
      />
    </div>

    <div className="space-y-2">
      <Label htmlFor="contactNumber" className="text-base font-medium">
        Contact Number
      </Label>
      <Input
        id="contactNumber"
        type="tel"
        value={formData.contactNumber}
        onChange={handleChange}
        className="w-full bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 focus-within:ring-2 focus-within:ring-deep-teal dark:focus-within:ring-light-teal transition-all"
        placeholder="Enter your contact number"
        required
      />
    </div>
  </motion.div>
);

export default PersonalInfoForm;