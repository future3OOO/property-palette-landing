export const validateSection = (formData, section) => {
  const errors = {};
  
  section.components.forEach(({ title, required }) => {
    if (required && !formData[title.toLowerCase().replace(/\s+/g, '_')]) {
      errors[title] = 'This section is required';
    }
  });

  return errors;
};

export const validateAllSections = (formData, formSections) => {
  let isValid = true;
  const allErrors = {};

  formSections.forEach((section, index) => {
    const sectionErrors = validateSection(formData, section);
    if (Object.keys(sectionErrors).length > 0) {
      isValid = false;
      allErrors[index] = sectionErrors;
    }
  });

  return { isValid, errors: allErrors };
};