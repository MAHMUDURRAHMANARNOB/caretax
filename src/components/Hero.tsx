import React from 'react';
import { ArrowRight, Shield, Users, Award } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="pt-20 pb-16 bg-gradient-to-br from-blue-50 to-teal-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Expert Tax &
                <span className="text-blue-700 block">Accounting Services</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Professional tax preparation, accounting, and business advisory services 
                to help you navigate financial complexity with confidence.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-800 transition-all duration-200 hover:shadow-lg flex items-center justify-center group"
              >
                Book Consultation
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#services"
                className="border-2 border-blue-700 text-blue-700 px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 hover:text-white transition-all duration-200"
              >
                View Services
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200">
              <div className="text-center">
                <div className="bg-white p-3 rounded-lg shadow-sm inline-block mb-2">
                  <Shield className="h-6 w-6 text-blue-700" />
                </div>
                <p className="text-sm font-medium text-gray-900">Certified</p>
                <p className="text-xs text-gray-600">Licensed CPAs</p>
              </div>
              <div className="text-center">
                <div className="bg-white p-3 rounded-lg shadow-sm inline-block mb-2">
                  <Users className="h-6 w-6 text-teal-600" />
                </div>
                <p className="text-sm font-medium text-gray-900">500+</p>
                <p className="text-xs text-gray-600">Happy Clients</p>
              </div>
              <div className="text-center">
                <div className="bg-white p-3 rounded-lg shadow-sm inline-block mb-2">
                  <Award className="h-6 w-6 text-yellow-600" />
                </div>
                <p className="text-sm font-medium text-gray-900">15+</p>
                <p className="text-xs text-gray-600">Years Experience</p>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-blue-100 to-teal-100 rounded-2xl flex items-center justify-center">
              <img
                src="https://images.pexels.com/photos/6863515/pexels-photo-6863515.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Professional accountant working"
                className="w-full h-full object-cover rounded-2xl shadow-2xl"
              />
            </div>
            {/* Floating Card */}
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-center space-x-3">
                <div className="bg-green-100 p-2 rounded-lg">
                  <Shield className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">100% Secure</p>
                  <p className="text-sm text-gray-600">Your data is protected</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;