import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your inquiry! We\'ll get back to you within 24 hours.');
    setFormData({ name: '', email: '', phone: '', service: '', message: '' });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      content: '+61450668304',
      description: 'Mon - Fri, 9am - 6pm'
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'info@caretax.com.au',
      description: 'We reply within 24 hours'
    },
    {
      icon: MapPin,
      title: 'Office',
      content: 'Suite -10, level 2, 183 Lakemba Street, NSW 2195, Australia.',
      description: 'By appointment only'
    },
    {
      icon: Clock,
      title: 'Hours',
      content: 'Mon - Fri: 9am - 6pm',
      description: 'Sat: 9am - 2pm'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to take control of your finances? Contact us today for a free consultation 
            and discover how we can help you achieve your financial goals.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="bg-gray-50 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Send us a message
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="Your full name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="+61 xxx xxx xxx"
                  />
                </div>
                
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                    Service Needed
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  >
                    <option value="">Select a service</option>
                    <option value="tax-preparation">Tax Preparation</option>
                    <option value="bookkeeping">Bookkeeping</option>
                    <option value="business-formation">Business Formation</option>
                    <option value="financial-planning">Financial Planning</option>
                    <option value="payroll">Payroll Services</option>
                    <option value="business-advisory">Business Advisory</option>
                  </select>
                </div>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                  placeholder="Tell us about your needs..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-blue-700 text-white py-4 px-6 rounded-lg font-semibold hover:bg-blue-800 transition-all duration-200 flex items-center justify-center group"
              >
                Send Message
                <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {contactInfo.map((info, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <info.icon className="h-6 w-6 text-blue-700" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">
                    {info.title}
                  </h4>
                  <p className="text-lg text-gray-800 mb-1">
                    {info.content}
                  </p>
                  <p className="text-sm text-gray-600">
                    {info.description}
                  </p>
                </div>
              </div>
            ))}
            
            {/* Map Placeholder */}
            {/* <div className="mt-8 bg-gray-200 h-64 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <MapPin className="h-12 w-12 text-gray-400 mx-auto mb-2" />
                <p className="text-gray-600">Interactive Map</p>
                <p className="text-sm text-gray-500">Suite -10, level 2, 183 Lakemba Street, NSW 2195</p>
              </div>
            </div> */}
            <div className="mt-8 bg-gray-200 h-64 rounded-lg flex items-center justify-center overflow-hidden">
      <div className="text-center w-full h-full"> {/* Adjust this div to take full space */}
        {/* Replace the MapPin and text with the iframe */}
            <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3310.9193594709086!2d151.07369201218802!3d-33.917474973096276!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12bbc74cd6aaab%3A0x4a7ef4cee00b54eb!2sCARE%20TAX%20ACCOUNTANTS!5e0!3m2!1sen!2sbd!4v1749716690589!5m2!1sen!2sbd"
            width="100%" // Make it responsive to the parent div
            height="100%" // Make it responsive to the parent div
            style={{ border: 0 }} // Use React style object for inline styles
            allowFullScreen={true} // JSX uses camelCase for HTML attributes
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade" // JSX uses camelCase
            title="Interactive Map" // Good practice for accessibility
            ></iframe>
            </div>
            {/* <p className="text-sm text-gray-500 mt-2">Suite -10, level 2, 183 Lakemba Street, NSW 2195</p> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;