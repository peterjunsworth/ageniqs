'use client';

import { useState } from 'react';
import Input from '../ui/Input';
import TextArea from '../ui/TextArea';
import { contactFormSchema, type ContactFormData } from '@/lib/validations/schemas';

export default function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    company: '',
    phone: '',
    interest: undefined,
    message: '',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof ContactFormData]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrors({});
    setSubmitStatus('idle');

    try {
      const validatedData = contactFormSchema.parse(formData);

      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(validatedData),
      });

      const result = await response.json();

      if (!response.ok) {
        if (result.errors) {
          const fieldErrors: Partial<Record<keyof ContactFormData, string>> = {};
          result.errors.forEach((error: any) => {
            if (error.path && error.path[0]) {
              fieldErrors[error.path[0] as keyof ContactFormData] = error.message;
            }
          });
          setErrors(fieldErrors);
        }
        throw new Error(result.message || 'Failed to send message');
      }

      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        interest: undefined,
        message: '',
      });
    } catch (error: any) {
      if (error.errors) {
        const fieldErrors: Partial<Record<keyof ContactFormData, string>> = {};
        error.errors.forEach((err: any) => {
          if (err.path && err.path[0]) {
            fieldErrors[err.path[0] as keyof ContactFormData] = err.message;
          }
        });
        setErrors(fieldErrors);
      } else {
        setSubmitStatus('error');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {submitStatus === 'success' && (
        <div className="rounded-lg bg-green-50 border border-green-200 p-4">
          <div className="flex">
            <svg className="h-5 w-5 text-green-400 mr-3" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
            <div>
              <h3 className="text-sm font-medium text-green-800">Message sent successfully!</h3>
              <p className="mt-1 text-sm text-green-700">We'll get back to you within 1-2 business days.</p>
            </div>
          </div>
        </div>
      )}

      {submitStatus === 'error' && (
        <div className="rounded-lg bg-red-50 border border-red-200 p-4">
          <div className="flex">
            <svg className="h-5 w-5 text-red-400 mr-3" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z" />
            </svg>
            <div>
              <h3 className="text-sm font-medium text-red-800">Something went wrong</h3>
              <p className="mt-1 text-sm text-red-700">Please try again or email us directly at hello@ageniqs.com</p>
            </div>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <Input
          label="Name"
          name="name"
          type="text"
          value={formData.name}
          onChange={handleChange}
          error={errors.name}
          required
        />
        <Input
          label="Email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          error={errors.email}
          required
        />
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <Input
          label="Company"
          name="company"
          type="text"
          value={formData.company}
          onChange={handleChange}
          error={errors.company}
        />
        <Input
          label="Phone"
          name="phone"
          type="tel"
          value={formData.phone}
          onChange={handleChange}
          error={errors.phone}
        />
      </div>

      <div>
        <label htmlFor="interest" className="block text-sm font-medium text-gray-300 mb-2">
          Area of Interest
        </label>
        <select
          id="interest"
          name="interest"
          value={formData.interest || ''}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-700 bg-gray-900/50 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-blue-500 focus:border-brand-blue-500 transition-all"
        >
          <option value="" className="bg-gray-900">Select an option</option>
          <option value="hrtbeat" className="bg-gray-900">HRTBeat AI</option>
          <option value="custom-ai" className="bg-gray-900">Custom AI Solutions</option>
          <option value="consulting" className="bg-gray-900">AI Consulting</option>
          <option value="other" className="bg-gray-900">Other</option>
        </select>
        {errors.interest && <p className="mt-1 text-sm text-red-400">{errors.interest}</p>}
      </div>

      <TextArea
        label="Message"
        name="message"
        value={formData.message}
        onChange={handleChange}
        error={errors.message}
        rows={6}
        required
        placeholder="Tell us about your project or question..."
      />

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full rounded-lg bg-gradient-brand px-6 py-3 text-base font-semibold text-white shadow-lg hover:shadow-glow transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  );
}
