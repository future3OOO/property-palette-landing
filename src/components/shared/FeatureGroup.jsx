import React from 'react';
import Checkbox from './Checkbox';

const FeatureGroup = ({ title, features, selectedFeatures, onFeatureChange }) => (
  <div className="space-y-4">
    <h4 className="font-medium text-deep-teal dark:text-light-teal">{title}</h4>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {features.map((feature, index) => (
        <Checkbox
          key={index}
          label={feature}
          id={`${title.replace(/\s+/g, '')}_${index}`}
          checked={selectedFeatures?.includes(feature)}
          onCheckedChange={(checked) => onFeatureChange(feature, checked)}
        />
      ))}
    </div>
  </div>
);

export default FeatureGroup;