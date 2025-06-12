import React from 'react';
import { Award, Clock, CheckCircle, Users } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Award, label: 'Licensed CPAs', value: '5+' },
    { icon: Clock, label: 'Years Experience', value: '15+' },
    { icon: CheckCircle, label: 'Success Rate', value: '99%' },
    { icon: Users, label: 'Happy Clients', value: '500+' }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Why Choose CareTax for Your Financial Needs?
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                With over 15 years of experience serving individuals and businesses across Australia, 
                CareTax has built a reputation for excellence, integrity, and personalized service.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our team of certified professionals stays current with the latest tax laws and 
                accounting standards to ensure you receive the most accurate and beneficial advice.
              </p>
            </div>

            {/* Key Benefits */}
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="bg-green-100 p-2 rounded-lg mt-1">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Personalized Approach</h4>
                  <p className="text-gray-600">Tailored solutions that fit your unique financial situation</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-2 rounded-lg mt-1">
                  <CheckCircle className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Expert Knowledge</h4>
                  <p className="text-gray-600">Licensed CPAs with deep expertise in Australian tax law</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-teal-100 p-2 rounded-lg mt-1">
                  <CheckCircle className="h-5 w-5 text-teal-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Year-Round Support</h4>
                  <p className="text-gray-600">Ongoing support beyond tax season for all your needs</p>
                </div>
              </div>
            </div>
          </div>

          {/* Stats & Image */}
          <div className="space-y-8">
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Professional team meeting"
                className="w-full h-80 object-cover rounded-2xl shadow-lg"
              />
            </div>
            
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
                  <div className="bg-blue-50 p-3 rounded-lg inline-block mb-3">
                    <stat.icon className="h-6 w-6 text-blue-700" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900 mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;