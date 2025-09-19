import React from 'react'
import Image from 'next/image'
import { MapPin, Phone, Mail, ArrowRight } from 'lucide-react'
import Heading from '@/components/atoms/headings'

const Footer = () => {
  return (
    <footer className="bg-[#F5F5F5] relative overflow-hidden">
      {/* Top border line */}
      <div className="h-0.5 bg-[#1E3A8A]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 relative z-10">
          
          {/* Column 1: Logo and Contact */}
          <div className="space-y-6">
            {/* Logo */}
            <div className="flex flex-col items-start">
              <Image 
                src="/logo.svg" 
                alt="Pixeative Logo" 
                width={60} 
                height={60}
                className="mb-3"
              />
              <Heading text="PIXEATIVE" size="small" className="text-gray-900" />
            </div>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-[#E78A38]" />
                <span className="text-gray-600 text-sm">Kathmandu, Nepal</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-[#E78A38]" />
                <span className="text-gray-600 text-sm">+977-9800000000</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-[#E78A38]" />
                <span className="text-gray-600 text-sm">hello@pixeative.com</span>
              </div>
            </div>
            
            {/* Social Media Icons */}
            <div className="flex space-x-3">
              <div className="w-8 h-8 bg-[#E78A38] rounded flex items-center justify-center">
                <span className="text-white text-xs font-bold">X</span>
              </div>
              <div className="w-8 h-8 bg-[#E78A38] rounded flex items-center justify-center">
                <span className="text-white text-xs font-bold">@</span>
              </div>
              <div className="w-8 h-8 bg-[#E78A38] rounded flex items-center justify-center">
                <span className="text-white text-xs font-bold">f</span>
              </div>
              <div className="w-8 h-8 bg-[#E78A38] rounded flex items-center justify-center">
                <span className="text-white text-xs font-bold">in</span>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <Heading text="Quick Links" size="small" className="text-gray-900" />
            <ul className="space-y-3">
              {['Home', 'About Us', 'Services', 'Portfolio', 'Blog', 'Contact'].map((link) => (
                <li key={link} className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-[#E78A38] rounded-full"></div>
                  <a href="#" className="text-gray-600 hover:text-gray-900 text-sm transition-colors duration-200">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div className="space-y-4">
            <Heading text="Services" size="small" className="text-gray-900" />
            <ul className="space-y-3">
              {[
                'Brand Identity & Logo Design',
                'Web Design & Development',
                'Motion Graphics',
                'Film Making',
                'Commercial Photography',
                'Social Media Marketing'
              ].map((service) => (
                <li key={service} className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-[#E78A38] rounded-full"></div>
                  <a href="#" className="text-gray-600 hover:text-gray-900 text-sm transition-colors duration-200">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div className="space-y-4">
            <Heading text="Newsletter Subscription" size="small" className="text-gray-900" />
            <p className="text-gray-600 text-sm">
              Stay inspired with our latest design insights and updates.
            </p>
            <div className="flex items-end space-x-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 border-0 border-b border-gray-300 bg-transparent text-sm py-2 focus:outline-none focus:border-[#E78A38] transition-colors duration-200"
              />
              <button className="w-8 h-8 bg-[#E78A38] rounded flex items-center justify-center hover:bg-[#D17A2F] transition-colors duration-200">
                <ArrowRight className="h-4 w-4 text-white" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Large background text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <h1 className="text-[120px] lg:text-[200px] font-bold text-gray-200 opacity-20 select-none">
          PIXEATIVE
        </h1>
      </div>

      {/* Bottom copyright */}
      <div className="relative z-10 border-t border-gray-200 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-500 text-sm">
            © 2023 Pixeative Design Studio. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer;