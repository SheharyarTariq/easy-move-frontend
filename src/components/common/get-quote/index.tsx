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
  jobType: yup.string().oneOf(['single', 'double']).required('Job type is required'),
  pickupHouseNumber: yup.string().required('House number is required'),
  pickupStreetName: yup.string().required('Street name is required'),
  pickupPostcode: yup.string().required('Postcode is required'),
  pickupPhoneNumber: yup.string().required('Phone number is required'),
  pickupDisassembling: yup.boolean(),
  dropoffHouseNumber: yup.string().required('House number is required'),
  dropoffStreetName: yup.string().required('Street name is required'),
  dropoffPostcode: yup.string().required('Postcode is required'),
  dropoffPhoneNumber: yup.string().required('Phone number is required'),
  dropoffAssembling: yup.boolean(),
  secondDropoffHouseNumber: yup.string().when('jobType', {
    is: 'double',
    then: (schema) => schema.required('Second dropoff house number is required'),
    otherwise: (schema) => schema.notRequired()
  }),
  secondDropoffStreetName: yup.string().when('jobType', {
    is: 'double',
    then: (schema) => schema.required('Second dropoff street name is required'),
    otherwise: (schema) => schema.notRequired()
  }),
  secondDropoffPostcode: yup.string().when('jobType', {
    is: 'double',
    then: (schema) => schema.required('Second dropoff postcode is required'),
    otherwise: (schema) => schema.notRequired()
  }),
  secondDropoffPhoneNumber: yup.string().when('jobType', {
    is: 'double',
    then: (schema) => schema.required('Second dropoff phone number is required'),
    otherwise: (schema) => schema.notRequired()
  }),
  secondDropoffAssembling: yup.boolean(),
  packagingRequired: yup.boolean(),
  additionalNotes: yup.string()
});

const GetQuote = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    telephone: '',
    whatsappNumber: '',
    jobType: 'single',
    pickupHouseNumber: '',
    pickupStreetName: '',
    pickupPostcode: '',
    pickupPhoneNumber: '',
    pickupDisassembling: false,
    dropoffHouseNumber: '',
    dropoffStreetName: '',
    dropoffPostcode: '',
    dropoffPhoneNumber: '',
    dropoffAssembling: false,
    secondDropoffHouseNumber: '',
    secondDropoffStreetName: '',
    secondDropoffPostcode: '',
    secondDropoffPhoneNumber: '',
    secondDropoffAssembling: false,
    packagingRequired: false,
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
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        telephone: '',
        whatsappNumber: '',
        jobType: 'single',
        pickupHouseNumber: '',
        pickupStreetName: '',
        pickupPostcode: '',
        pickupPhoneNumber: '',
        pickupDisassembling: false,
        dropoffHouseNumber: '',
        dropoffStreetName: '',
        dropoffPostcode: '',
        dropoffPhoneNumber: '',
        dropoffAssembling: false,
        secondDropoffHouseNumber: '',
        secondDropoffStreetName: '',
        secondDropoffPostcode: '',
        secondDropoffPhoneNumber: '',
        secondDropoffAssembling: false,
        packagingRequired: false,
        additionalNotes: ''
      });
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

  const handlePhoneChange = (value: string) => {
    setFormData((prev) => ({ ...prev, whatsappNumber: value }));
    if (errors['whatsappNumber']) {
      setErrors((prevErrors) => {
        const updatedErrors = { ...prevErrors };
        delete updatedErrors['whatsappNumber'];
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
        <InputField
          label="Telephone"
          name="telephone"
          type="tel"
          value={formData.telephone}
          onChange={handleInputChange}
          placeholder="Your phone number"
          error={errors.telephone}
        />
      </div>
          <div className="flex flex-col w-full col-span-2 sm:col-span-1">
            <label htmlFor="phone" className="font-Poppins font-normal text-base text-LightGray mb-2">Whatsapp Number</label>
            <PhoneNumberInput phoneNumber={formData.whatsappNumber} onChange={handlePhoneChange}/>
            {errors.whatsappNumber && (<p className="text-red-500 text-xs mt-1">{errors.whatsappNumber}</p>)}
          </div>
      {/* Job Type Selection */}
      <div>
        <label className="block text-sm font-medium text-foreground mb-2">
          Job Type *
        </label>
        <select
          name="jobType"
          value={formData.jobType}
          onChange={handleInputChange}
          className="w-full px-4 py-3 border border-input rounded-lg focus:outline-none focus:border-primary-light transition-all"
        >
          <option value="single">Single Dropoff Location</option>
          <option value="double">Double Dropoff Location</option>
        </select>
        {errors.jobType && <p className="text-destructive text-sm mt-1">{errors.jobType}</p>}
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
          <InputField
            label="Phone Number"
            name="pickupPhoneNumber"
            type="tel"
            value={formData.pickupPhoneNumber}
          onChange={handleInputChange}
            placeholder="Phone number"
            error={errors.pickupPhoneNumber}
          />
        </div>
        
        {/* Pickup Services */}
        <div className="space-y-3">
          <h5 className="font-medium text-foreground">Pickup Services</h5>
          <div className="flex flex-wrap gap-4">
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              name="packagingRequired"
              checked={formData.packagingRequired}
              onChange={handleInputChange}
              className="rounded border-input focus:outline-none focus:ring-0"
            />
            <span className="text-sm">Packaging required</span>
          </label>
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                name="pickupDisassembling"
                checked={formData.pickupDisassembling}
                onChange={handleInputChange}
                className="rounded border-input focus:outline-none focus:ring-0"
              />
              <span className="text-sm">Disassembling required</span>
            </label>
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
          <InputField
            label="Phone Number"
            name="dropoffPhoneNumber"
            type="tel"
            value={formData.dropoffPhoneNumber}
            onChange={handleInputChange}
            placeholder="Phone number"
            error={errors.dropoffPhoneNumber}
          />
          
        </div>
        
        {/* Dropoff Services */}
        <div className="space-y-3">
          <h5 className="font-medium text-foreground">Drop-off Services</h5>
          <div className="flex flex-wrap gap-4">
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                name="dropoffAssembling"
                checked={formData.dropoffAssembling}
                onChange={handleInputChange}
                className="rounded border-input focus:outline-none focus:ring-0"
              />
              <span className="text-sm">Assembling required</span>
            </label>
          </div>
        </div>
      </div>

      {/* Second Drop-off Address Section (Conditional) */}
      {formData.jobType === 'double' && (
        <div className="space-y-4">
          <h4 className="text-lg font-semibold text-foreground">Second Drop-off Address</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                House Number *
              </label>
              <input 
                type="text" 
                name="secondDropoffHouseNumber"
                placeholder="House number"
                value={formData.secondDropoffHouseNumber}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-input rounded-lg focus:outline-none focus:ring-0 focus:border-primary transition-all"
              />
              {errors.secondDropoffHouseNumber && <p className="text-destructive text-sm mt-1">{errors.secondDropoffHouseNumber}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Street Name *
              </label>
              <input 
                type="text" 
                name="secondDropoffStreetName"
                placeholder="Street name"
                value={formData.secondDropoffStreetName}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-input rounded-lg focus:outline-none focus:ring-0 focus:border-primary transition-all"
              />
              {errors.secondDropoffStreetName && <p className="text-destructive text-sm mt-1">{errors.secondDropoffStreetName}</p>}
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Postcode *
              </label>
              <input 
                type="text" 
                name="secondDropoffPostcode"
                placeholder="Postcode"
                value={formData.secondDropoffPostcode}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-input rounded-lg focus:outline-none focus:ring-0 focus:border-primary transition-all"
              />
              {errors.secondDropoffPostcode && <p className="text-destructive text-sm mt-1">{errors.secondDropoffPostcode}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Phone Number *
              </label>
              <input 
                type="tel" 
                name="secondDropoffPhoneNumber"
                placeholder="Phone number"
                value={formData.secondDropoffPhoneNumber}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-input rounded-lg focus:outline-none focus:ring-0 focus:border-primary transition-all"
              />
              {errors.secondDropoffPhoneNumber && <p className="text-destructive text-sm mt-1">{errors.secondDropoffPhoneNumber}</p>}
            </div>
          </div>
          
          {/* Second Dropoff Services */}
          <div className="space-y-3">
            <h5 className="font-medium text-foreground">Second Drop-off Services</h5>
            <div className="flex flex-wrap gap-4">
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  name="secondDropoffAssembling"
                  checked={formData.secondDropoffAssembling}
                  onChange={handleInputChange}
                  className="rounded border-input focus:outline-none focus:ring-0"
                />
                <span className="text-sm">Assembling required</span>
              </label>
            </div>
          </div>
        </div>
      )}

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