import React from 'react';
import { Calculator, FileText, Building, TrendingUp, Users, Briefcase } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Calculator,
      title: 'Tax Preparation',
      description: 'Comprehensive individual and business tax preparation services with maximum deduction optimization.',
      features: ['Individual Tax Returns', 'Business Tax Returns', 'Tax Planning', 'IRS Representation']
    },
    {
      icon: FileText,
      title: 'Bookkeeping',
      description: 'Professional bookkeeping services to keep your financial records accurate and up-to-date.',
      features: ['Monthly Bookkeeping', 'Accounts Reconciliation', 'Financial Statements', 'Payroll Processing']
    },
    {
      icon: Building,
      title: 'Business Formation',
      description: 'Complete business setup services from entity selection to registration and compliance.',
      features: ['Entity Selection', 'Business Registration', 'EIN Application', 'Operating Agreements']
    },
    {
      icon: TrendingUp,
      title: 'Financial Planning',
      description: 'Strategic financial planning and advisory services to help you achieve your goals.',
      features: ['Investment Planning', 'Retirement Planning', 'Cash Flow Analysis', 'Budget Planning']
    },
    {
      icon: Users,
      title: 'Payroll Services',
      description: 'Complete payroll processing with tax compliance and employee benefit administration.',
      features: ['Payroll Processing', 'Tax Filings', 'Direct Deposit', 'Quarterly Reports']
    },
    {
      icon: Briefcase,
      title: 'Business Advisory',
      description: 'Expert business consulting to help you make informed decisions and grow your business.',
      features: ['Business Strategy', 'Performance Analysis', 'Growth Planning', 'Risk Management']
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Comprehensive Financial Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From tax preparation to business advisory, we provide the full spectrum of 
            accounting and financial services your business needs to thrive.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="bg-blue-50 p-3 rounded-lg inline-block mb-6 group-hover:bg-blue-100 transition-colors">
                <service.icon className="h-6 w-6 text-blue-700" />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {service.title}
              </h3>
              
              <p className="text-gray-600 mb-6">
                {service.description}
              </p>
              
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <div className="bg-green-100 rounded-full p-1 mt-0.5 mr-3">
                      <div className="w-1.5 h-1.5 bg-green-600 rounded-full"></div>
                    </div>
                    <span className="text-sm text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <button className="mt-6 text-blue-700 font-semibold hover:text-blue-800 transition-colors flex items-center group">
                Learn More
                <span className="ml-1 group-hover:translate-x-1 transition-transform">→</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;