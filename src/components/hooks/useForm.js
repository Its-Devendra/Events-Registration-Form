// src/components/hooks/useForm.js
import { useState, useEffect } from 'react';

const useForm = (initialValues, validate) => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (isSubmitting) {
      const noErrors = Object.keys(errors).length === 0;
      if (noErrors) {
        alert(`Form submitted successfully: ${JSON.stringify(values, null, 2)}`);
        setIsSubmitting(false);
      } else {
        setIsSubmitting(false);
      }
    }
  }, [isSubmitting, errors, values]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate(values);
    setErrors(validationErrors);
    setIsSubmitting(true);
  };

  return {
    handleChange,
    handleSubmit,
    values,
    errors
  };
};

export default useForm;
