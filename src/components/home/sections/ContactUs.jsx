'use client';
import React, { useState } from 'react';
import { EnvelopeIcon, PhoneIcon, MapPinIcon } from '@heroicons/react/24/outline';
import SectionHeader from '@/components/ui/SectionHeader';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const services = [
    'AI & Machine Learning',
    'Cloud Solutions',
    'Cybersecurity',
    'Custom Software Development',
    'Data & Analytics',
    'Digital Transformation',
    'Other',
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Invalid email address';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setStatus('');
      return;
    }

    setIsSubmitting(true);
    setStatus('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, type: 'Contact' }),
      });

      if (res.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', phone: '', company: '', service: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (err) {
      console.error(err);
      setStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClass = (field) =>
    `w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors ${
      errors[field] ? 'border-red-400' : 'border-slate-200'
    }`;

  return (
    <section className="py-20 bg-white">
      <div className="section-container">
        <SectionHeader
          eyebrow="Get In Touch"
          title="Let's start a"
          highlight="conversation"
          description="Have a project in mind? Send us a message and our team will respond as soon as possible."
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="space-y-8">
            <div className="space-y-6">
              {[
                {
                  icon: EnvelopeIcon,
                  title: 'Email',
                  content: (
                    <a href="mailto:info@rounddigital.co" className="text-slate-600 hover:text-primary transition-colors">
                      info@rounddigital.co
                    </a>
                  ),
                },
                {
                  icon: PhoneIcon,
                  title: 'Phone',
                  content: (
                    <a href="tel:+19054075009" className="text-slate-600 hover:text-primary transition-colors">
                      +1 905-407-5009
                    </a>
                  ),
                },
                {
                  icon: MapPinIcon,
                  title: 'Our Offices',
                  content: (
                    <div className="text-slate-600 space-y-3 text-sm">
                      <div>
                        <p className="font-semibold text-ink">Mississauga</p>
                        <p>160B - 110 Matheson Blvd W<br />Mississauga, ON L5M 6B8, Canada</p>
                      </div>
                      <div>
                        <p className="font-semibold text-ink">Dallas</p>
                        <p>450 Century Pkwy, Ste 250<br />Allen, Texas 75013</p>
                      </div>
                    </div>
                  ),
                },
              ].map(({ icon: Icon, title, content }) => (
                <div key={title} className="flex items-start gap-4">
                  <div className="w-11 h-11 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-ink mb-1">{title}</p>
                    {content}
                  </div>
                </div>
              ))}
            </div>

            <div className="rounded-2xl bg-gradient-to-br from-ink to-[#2a2b35] p-6 text-white">
              <h4 className="font-bold mb-3">Office Hours</h4>
              <div className="space-y-1.5 text-sm text-slate-300">
                <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="card-surface p-8 md:p-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-ink mb-2">
                    Full Name *
                  </label>
                  <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className={inputClass('name')} placeholder="John Doe" />
                  {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-ink mb-2">
                    Email Address *
                  </label>
                  <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className={inputClass('email')} placeholder="john@example.com" />
                  {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-ink mb-2">
                    Phone Number
                  </label>
                  <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} className={inputClass('phone')} placeholder="+1 905-407-5009" />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-semibold text-ink mb-2">
                    Company Name
                  </label>
                  <input type="text" id="company" name="company" value={formData.company} onChange={handleChange} className={inputClass('company')} placeholder="Your Company" />
                </div>
              </div>

              <div className="mb-5">
                <label htmlFor="service" className="block text-sm font-semibold text-ink mb-2">
                  Service Interested In
                </label>
                <select id="service" name="service" value={formData.service} onChange={handleChange} className={inputClass('service')}>
                  <option value="">Select a service</option>
                  {services.map((service) => (
                    <option key={service} value={service}>{service}</option>
                  ))}
                </select>
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-semibold text-ink mb-2">
                  Your Message *
                </label>
                <textarea id="message" name="message" value={formData.message} onChange={handleChange} rows="6" className={`${inputClass('message')} resize-none`} placeholder="Tell us about your project..." />
                {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
              </div>

              {status === 'success' && (
                <div className="mb-5 p-4 bg-green-50 border border-green-200 rounded-xl text-green-700 text-sm">
                  Thank you! Your message has been sent successfully.
                </div>
              )}
              {status === 'error' && (
                <div className="mb-5 p-4 bg-red-50 border border-red-200 rounded-xl text-red-700 text-sm">
                  Something went wrong. Please try again or email us directly.
                </div>
              )}

              <button type="submit" disabled={isSubmitting} className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0">
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>

              <p className="text-xs text-slate-500 mt-4 text-center">
                By submitting this form, you agree to our Privacy Policy and Terms of Service.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
