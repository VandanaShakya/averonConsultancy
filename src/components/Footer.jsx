// src/components/Footer.jsx

import React from 'react';
import { Phone, Mail, MapPin, Youtube, Linkedin, Instagram, Facebook } from 'lucide-react';
import  images  from '../assets/images';

const Footer = () => {
    return (
        <footer className="relative bg-white py-12 px-4 sm:px-6 lg:px-8 text-gray-700 font-sans">
  {/* Background Image Block */}
  <div
    className="absolute inset-0 bg-cover bg-center opacity-20"
    style={{
      backgroundImage: "url('/path/to/your-image.jpg')",
      zIndex: 0,
    }}
  ></div>

  {/* Main Content */}
  <div className="relative z-10 max-w-7xl mx-auto">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 pb-10 border-b border-gray-200">
      
      {/* 1. Company Logo Block & Tagline */}
      <div>
        <h3 className="text-xl font-bold text-gray-900 mb-4">
          <div className="w-32 h-10 flex items-center justify-center text-sm font-semibold text-gray-600 rounded">
            <img
              src={images.logo}
              alt="Company Logo"
              className="h-10 w-auto"
            />
          </div>
        </h3>
        <p className="text-sm mt-4 text-gray-600">
          Your company tagline or a brief description.
        </p>
      </div>

      {/* 2. Navigation Links */}
      <div>
        <h3 className="text-xl font-bold text-gray-900 mb-4">Navigation</h3>
        <nav>
          <ul className="space-y-3">
            <li><a href="/" className="hover:text-emerald-600 transition duration-150 text-base">Home</a></li>
            <li><a href="/about" className="hover:text-emerald-600 transition duration-150 text-base">About</a></li>
            <li><a href="/services" className="hover:text-emerald-600 transition duration-150 text-base">Services</a></li>
            <li><a href="/contact-us" className="hover:text-emerald-600 transition duration-150 text-base">Contact</a></li>
          </ul>
        </nav>
      </div>

      {/* 3. Contact Information */}
      <div>
        <h3 className="text-xl font-bold text-gray-900 mb-4">Contact</h3>
        <ul className="space-y-3">
          <li className="flex items-start">
            <MapPin className="w-5 h-5 text-emerald-600 mr-3 mt-1 flex-shrink-0" />
            <address className="not-italic text-sm text-gray-600">
              United Arab Emirates<br />
              102-B45, AbdulHamed Ahmed-102, Al Goze Third,<br />
              358-582, Dubai, United Arab Emirates
            </address>
          </li>
          <li className="pt-2">
            <div className="flex items-center text-base">
              <Phone className="w-5 h-5 text-emerald-600 mr-3 flex-shrink-0" />
              <a href="tel:+971503843832" className="hover:text-emerald-600 transition duration-150 font-medium">+971 503843832</a>
            </div>
            <div className="flex items-center mt-1 text-sm pl-8">
              <Mail className="w-4 h-4 text-gray-500 mr-1 opacity-0" />
              <a href="mailto:madava@averonco.com" className="hover:text-emerald-600 transition duration-150 text-gray-600">madava@averonco.com</a>
            </div>
          </li>
          <li className="pt-2">
            <div className="flex items-center text-base">
              <Phone className="w-5 h-5 text-emerald-600 mr-3 flex-shrink-0" />
              <a href="tel:+966530181769" className="hover:text-emerald-600 transition duration-150 font-medium">+966 530181769</a>
            </div>
            <div className="flex items-center mt-1 text-sm pl-8">
              <Mail className="w-4 h-4 text-gray-500 mr-1 opacity-0" />
              <a href="mailto:fm@averonco.com" className="hover:text-emerald-600 transition duration-150 text-gray-600">fm@averonco.com</a>
            </div>
          </li>
        </ul>
      </div>

      {/* 4. Social Media */}
      <div>
        <h3 className="text-xl font-bold text-gray-900 mb-4">Join Us On</h3>
        <div className="flex space-x-4">
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="text-gray-500 hover:text-emerald-600 transition duration-150">
            <Youtube className="w-6 h-6" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-gray-500 hover:text-emerald-600 transition duration-150">
            <Linkedin className="w-6 h-6" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-gray-500 hover:text-emerald-600 transition duration-150">
            <Instagram className="w-6 h-6" />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-gray-500 hover:text-emerald-600 transition duration-150">
            <Facebook className="w-6 h-6" />
          </a>
        </div>
      </div>
    </div>

    {/* Copyright Section */}
    <div className="mt-8 border-t border-gray-200 pt-6 flex flex-col sm:flex-row items-center justify-between text-sm text-gray-500 space-y-4 sm:space-y-0">
      <div className="text-center sm:text-left">
        <p className="font-medium text-gray-700">
          © {new Date().getFullYear()} CareWell. All rights reserved
        </p>
      </div>
      <div className="flex space-x-6">
        <a href="#" className="text-gray-500 hover:text-purple-600 transition-colors duration-200">
          Terms of services
        </a>
        <a href="#" className="text-gray-500 hover:text-purple-600 transition-colors duration-200">
          Privacy Policy
        </a>
      </div>
    </div>
  </div>
</footer>

    );
};

export default Footer;