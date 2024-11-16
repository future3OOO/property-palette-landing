import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { motion } from 'framer-motion';

const PropertyDetailsForm = ({ formData, handleChange }) => (
  <motion.div
    initial={{ opacity: 0, x: 20 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: -20 }}
    className="space-y-6"
  >
    <div className="grid grid-cols-2 gap-6">
      <div className="space-y-2">
        <Label htmlFor="bedrooms" className="text-base font-medium">
          Bedrooms
        </Label>
        <Input
          id="bedrooms"
          type="number"
          min="0"
          value={formData.bedrooms}
          onChange={handleChange}
          className="w-full bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 focus-within:ring-2 focus-within:ring-deep-teal dark:focus-within:ring-light-teal transition-all"
          placeholder="Number of bedrooms"
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="bathrooms" className="text-base font-medium">
          Bathrooms
        </Label>
        <Input
          id="bathrooms"
          type="number"
          min="0"
          step="0.5"
          value={formData.bathrooms}
          onChange={handleChange}
          className="w-full bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 focus-within:ring-2 focus-within:ring-deep-teal dark:focus-within:ring-light-teal transition-all"
          placeholder="Number of bathrooms"
          required
        />
      </div>
    </div>

    <div className="grid grid-cols-2 gap-6">
      <div className="space-y-2">
        <Label htmlFor="garaging" className="text-base font-medium">
          Garaging
        </Label>
        <Input
          id="garaging"
          type="number"
          min="0"
          value={formData.garaging}
          onChange={handleChange}
          className="w-full bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 focus-within:ring-2 focus-within:ring-deep-teal dark:focus-within:ring-light-teal transition-all"
          placeholder="Number of car spaces"
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="offStreetParking" className="text-base font-medium">
          Off Street Parking
        </Label>
        <Input
          id="offStreetParking"
          type="number"
          min="0"
          value={formData.offStreetParking}
          onChange={handleChange}
          className="w-full bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 focus-within:ring-2 focus-within:ring-deep-teal dark:focus-within:ring-light-teal transition-all"
          placeholder="Additional parking spaces"
          required
        />
      </div>
    </div>
  </motion.div>
);

export default PropertyDetailsForm;