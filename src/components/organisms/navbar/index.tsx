
"use client"
import React, { useState } from 'react'
import Button from '@/components/atoms/buttons'
import Image from 'next/image'
import { ChevronDown, Menu, X } from 'lucide-react'
const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const handleMouseEnter = (dropdown: string) => {
    setActiveDropdown(dropdown)
  }

  const handleMouseLeave = () => {
    setActiveDropdown(null)
  }

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <nav className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-16 sm:h-20">
          <div className="flex items-center">
            <Image 
              src="/logo.svg" 
              alt="Pixeative Logo" 
              width={124} 
              height={124}
              className="h-8 sm:h-10 md:h-12 lg:h-14 xl:h-16 w-auto"
            />
          </div>
          
          <div className="flex-1 flex justify-center">
            <nav className="hidden md:flex items-center space-x-8">
              {/* About Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => handleMouseEnter('about')}
                onMouseLeave={handleMouseLeave}
              >
                <a href="#" className="flex items-center text-gray-700 hover:text-gray-900 font-medium text-sm transition-colors duration-200">
                  About
                  <ChevronDown className={`ml-1 h-3 w-3 transition-transform duration-200 ${activeDropdown === 'about' ? 'rotate-180' : ''}`} />
                </a>
                <div className={`absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-100 py-2 z-50 transition-all duration-300 ease-in-out transform ${activeDropdown === 'about' ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'}`}>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors duration-200">Our Story</a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors duration-200">Team</a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors duration-200">Mission</a>
                </div>
              </div>

              {/* Services Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => handleMouseEnter('services')}
                onMouseLeave={handleMouseLeave}
              >
                <a href="#" className="flex items-center text-gray-700 hover:text-gray-900 font-medium text-sm transition-colors duration-200">
                  Services
                  <ChevronDown className={`ml-1 h-3 w-3 transition-transform duration-200 ${activeDropdown === 'services' ? 'rotate-180' : ''}`} />
                </a>
                <div className={`absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-100 py-2 z-50 transition-all duration-300 ease-in-out transform ${activeDropdown === 'services' ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'}`}>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors duration-200">Web Design</a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors duration-200">Branding</a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors duration-200">UI/UX</a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors duration-200">Development</a>
                </div>
              </div>

              {/* Portfolio Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => handleMouseEnter('portfolio')}
                onMouseLeave={handleMouseLeave}
              >
                <a href="#" className="flex items-center text-gray-700 hover:text-gray-900 font-medium text-sm transition-colors duration-200">
                  Portfolio
                  <ChevronDown className={`ml-1 h-3 w-3 transition-transform duration-200 ${activeDropdown === 'portfolio' ? 'rotate-180' : ''}`} />
                </a>
                <div className={`absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-100 py-2 z-50 transition-all duration-300 ease-in-out transform ${activeDropdown === 'portfolio' ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'}`}>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors duration-200">Web Projects</a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors duration-200">Brand Projects</a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors duration-200">Case Studies</a>
                </div>
              </div>

              {/* Regular Links */}
              <a href="#" className="text-gray-700 hover:text-gray-900 font-medium text-sm transition-colors duration-200">
                Process
              </a>
              <a href="#" className="text-gray-700 hover:text-gray-900 font-medium text-sm transition-colors duration-200">
                Testimonials
              </a>
              <a href="#" className="text-gray-700 hover:text-gray-900 font-medium text-sm transition-colors duration-200">
                Blog
              </a>
            </nav>
          </div>
          
          <div className="flex items-center space-x-4">
            <Button text="Contact Us" />
            
            {/* Mobile menu button */}
            <button
              onClick={toggleMobileMenu}
              className="md:hidden p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 transition-colors duration-200"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-100">
            {/* Mobile About Dropdown */}
            <div className="relative">
              <button
                onClick={() => setActiveDropdown(activeDropdown === 'mobile-about' ? null : 'mobile-about')}
                className="flex items-center justify-between w-full px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors duration-200"
              >
                About
                <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${activeDropdown === 'mobile-about' ? 'rotate-180' : ''}`} />
              </button>
              <div className={`overflow-hidden transition-all duration-300 ease-in-out ${activeDropdown === 'mobile-about' ? 'max-h-32 opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="pl-4 space-y-1">
                  <a href="#" className="block px-3 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors duration-200">Our Story</a>
                  <a href="#" className="block px-3 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors duration-200">Team</a>
                  <a href="#" className="block px-3 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors duration-200">Mission</a>
                </div>
              </div>
            </div>

            {/* Mobile Services Dropdown */}
            <div className="relative">
              <button
                onClick={() => setActiveDropdown(activeDropdown === 'mobile-services' ? null : 'mobile-services')}
                className="flex items-center justify-between w-full px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors duration-200"
              >
                Services
                <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${activeDropdown === 'mobile-services' ? 'rotate-180' : ''}`} />
              </button>
              <div className={`overflow-hidden transition-all duration-300 ease-in-out ${activeDropdown === 'mobile-services' ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="pl-4 space-y-1">
                  <a href="#" className="block px-3 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors duration-200">Web Design</a>
                  <a href="#" className="block px-3 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors duration-200">Branding</a>
                  <a href="#" className="block px-3 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors duration-200">UI/UX</a>
                  <a href="#" className="block px-3 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors duration-200">Development</a>
                </div>
              </div>
            </div>

            {/* Mobile Portfolio Dropdown */}
            <div className="relative">
              <button
                onClick={() => setActiveDropdown(activeDropdown === 'mobile-portfolio' ? null : 'mobile-portfolio')}
                className="flex items-center justify-between w-full px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors duration-200"
              >
                Portfolio
                <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${activeDropdown === 'mobile-portfolio' ? 'rotate-180' : ''}`} />
              </button>
              <div className={`overflow-hidden transition-all duration-300 ease-in-out ${activeDropdown === 'mobile-portfolio' ? 'max-h-32 opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="pl-4 space-y-1">
                  <a href="#" className="block px-3 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors duration-200">Web Projects</a>
                  <a href="#" className="block px-3 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors duration-200">Brand Projects</a>
                  <a href="#" className="block px-3 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors duration-200">Case Studies</a>
                </div>
              </div>
            </div>

            {/* Mobile Regular Links */}
            <a href="#" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors duration-200">
              Process
            </a>
            <a href="#" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors duration-200">
              Testimonials
            </a>
            <a href="#" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors duration-200">
              Blog
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar