'use client'
import React, { useState } from 'react'
import * as yup from 'yup';
import InputField from '../input-field';
import { Button } from '@/components/ui/button';
import { Send } from 'lucide-react';
import Spinner from '../spinner';
import toast from 'react-hot-toast';
import PhoneNumberInput from '../phone-number-input';

const validationSchema = yup.object({
  firstName: yup.string().required('First name is required'),
  lastName: yup.string().required('Last name is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  telephone: yup.string().required('Telephone is required'),
  whatsappNumber: yup.string(),
  pickupHouseNumber: yup.string().required('House number is required'),
  pickupStreetName: yup.string().required('Street name is required'),
  pickupPostcode: yup.string().required('Postcode is required'),
  pickupPhoneNumber: yup.string().required('Phone number is required'),
  dropoffHouseNumber: yup.string().required('House number is required'),
  dropoffStreetName: yup.string().required('Street name is required'),
  dropoffPostcode: yup.string().required('Postcode is required'),
  additionalNotes: yup.string()
});

const GetQuote = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    telephone: '',
    whatsappNumber: '',
    pickupHouseNumber: '',
    pickupStreetName: '',
    pickupPostcode: '',
    pickupPhoneNumber: '',
    dropoffHouseNumber: '',
    dropoffStreetName: '',
    dropoffPostcode: '',
    additionalNotes: ''
  });
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  try {
    await validationSchema.validate(formData, { abortEarly: false });
    setErrors({});
    setLoading(true);
    const res = await fetch("/api/send-quote", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      toast.success("Request for quote sent successfully!");
      // setFormData({
      //   firstName: '',
      //   lastName: '',
      //   email: '',
      //   telephone: '',
      //   whatsappNumber: '',
      //   pickupHouseNumber: '',
      //   pickupStreetName: '',
      //   pickupPostcode: '',
      //   pickupPhoneNumber: '',
      //   dropoffHouseNumber: '',
      //   dropoffStreetName: '',
      //   dropoffPostcode: '',
      //   additionalNotes: ''
      // });
    } else {
      const { error } = await res.json();
      console.log(error);
      toast.error("Something went wrong. Please try again");
    }
  } catch (error) {
    if (error instanceof yup.ValidationError) {
      const validationErrors: Record<string, string> = {};
      error.inner.forEach(err => {
        if (err.path) validationErrors[err.path] = err.message;
      });
      setErrors(validationErrors);
      toast.error("Please fix the highlighted issue");
    } else {
      toast.error("Unexpected error submitting form.");
    }
  }finally{
    setLoading(false);
  }
};

  const handlePhoneInputChange = (name: string) => (value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prevErrors) => {
        const updatedErrors = { ...prevErrors };
        delete updatedErrors[name];
        return updatedErrors;
      });
    }
  };
  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <InputField
          label="First Name"
          name="firstName"
          value={formData.firstName}
          onChange={handleInputChange}
          placeholder="Your first name"
          error={errors.firstName}
        />
        <InputField
          label="Last Name"
          name="lastName"
          value={formData.lastName}
          onChange={handleInputChange}
          placeholder="Your last name"
          error={errors.lastName}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <InputField
          label="Email Address"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleInputChange}
          placeholder="your.email@example.com"
          error={errors.email}
        />
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">Telephone *</label>
          <PhoneNumberInput phoneNumber={formData.telephone} onChange={handlePhoneInputChange('telephone')}/>
          {errors.telephone && (<p className="text-destructive text-sm mt-1">{errors.telephone}</p>)}
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium text-foreground mb-2">
          Whatsapp Number *
        </label>
        <PhoneNumberInput phoneNumber={formData.whatsappNumber} onChange={handlePhoneInputChange('whatsappNumber')}/>
        {errors.whatsappNumber && (<p className="text-destructive text-sm mt-1">{errors.whatsappNumber}</p>)}
      </div>

      {/* Pickup Address Section */}
      <div className="space-y-4">
        <h4 className="text-lg font-semibold text-foreground">Pickup Address</h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <InputField
            label="House Number"
            name="pickupHouseNumber"
            value={formData.pickupHouseNumber}
            onChange={handleInputChange}
            placeholder="House number"
            error={errors.pickupHouseNumber}
          />
          <InputField
            label="Street Name"
            name="pickupStreetName"
            value={formData.pickupStreetName}
            onChange={handleInputChange}
            placeholder="Street name"
            error={errors.pickupStreetName}
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <InputField
            label="Postcode"
            name="pickupPostcode"
            value={formData.pickupPostcode}
            onChange={handleInputChange}
            placeholder="Postcode"
            error={errors.pickupPostcode}
          />
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Phone Number *
            </label>
            <PhoneNumberInput phoneNumber={formData.pickupPhoneNumber} onChange={handlePhoneInputChange('pickupPhoneNumber')}/>
            {errors.pickupPhoneNumber && (<p className="text-destructive text-sm mt-1">{errors.pickupPhoneNumber}</p>)}
          </div>
        </div>
      </div>

      {/* Drop-off Address Section */}
      <div className="space-y-4">
        <h4 className="text-lg font-semibold text-foreground">Drop-off Address</h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <InputField
            label="House Number"
            name="dropoffHouseNumber"
            value={formData.dropoffHouseNumber}
            onChange={handleInputChange}
            placeholder="House number"
            // required
            error={errors.dropoffHouseNumber}
          />
          <InputField
            label="Street Name"
            name="dropoffStreetName"
            value={formData.dropoffStreetName}
            onChange={handleInputChange}
            placeholder="Street name"
            error={errors.dropoffStreetName}
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          
          <InputField
            label="Postcode"
            name="dropoffPostcode"
            value={formData.dropoffPostcode}
            onChange={handleInputChange}
            placeholder="Postcode"
            error={errors.dropoffPostcode}
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-foreground mb-2">
          Additional Notes
        </label>
        <textarea
          name="additionalNotes"
          rows={3}
          value={formData.additionalNotes}
          onChange={handleInputChange}
          className="w-full px-4 py-3 border border-input rounded-lg focus:outline-none focus:ring-0 focus:border-primary transition-all resize-none"
          placeholder="Tell us about your moving requirements..."
        />
        {errors.additionalNotes && <p className="text-destructive text-sm mt-1">{errors.additionalNotes}</p>}
      </div>

      <Button 
        type="submit"
        className="w-full bg-cta-gradient hover:opacity-90 shadow-button-custom text-lg py-6"
      >
        Get My Free Quote
        {loading ?
          <Spinner/> : 
          <Send className="ml-2 h-5 w-5" />
        }
      </Button>
    </form>
  )
}

export default GetQuote