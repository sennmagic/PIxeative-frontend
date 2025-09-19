"use client"


import React from 'react'
import Description from '@/components/atoms/description'
import Button from '@/components/atoms/buttons'

const HeroSection = () => {
  return (
    <section 
      className="h-screen bg-black bg-cover bg-center bg-no-repeat bg-fixed relative overflow-hidden"
      style={{
        backgroundImage: 'url(/heroframe.svg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/20"></div>
      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-8 sm:py-12 md:py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 h-full">
          
          {/* Left Side - Headline */}
          <div className="flex items-center justify-center lg:justify-start">
            <h3 
              className="text-white leading-tight text-center lg:text-left"
              style={{
                fontFamily: 'Space Grotesk',
                fontWeight: 600,
                fontSize: 'clamp(2.5rem, 8vw, 6.25rem)',
                lineHeight: 'clamp(2.75rem, 8.5vw, 6.3125rem)',
       
              
                letterSpacing: '-3%',
                textTransform: 'capitalize',
              }}
            >
              Innovative Brand Strategy & Creative Design
            </h3>
          </div>

        </div>
      </div>
      
      {/* Description and CTA - Responsive positioning */}
      <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 lg:bottom-10 left-1/2 transform -translate-x-1/2 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-20">
        <div className="flex flex-col lg:flex-row justify-center lg:justify-end items-center lg:items-end space-y-4 lg:space-y-0 lg:space-x-8">
          <div className="w-full max-w-sm sm:max-w-md lg:max-w-lg text-center lg:text-right">
            <div className="space-y-4 sm:space-y-6">
              <Description 
                text="At Pixeative, we combine strategy, innovation, and visual storytelling to build memorable brand identities, engaging websites, and designs that leave a lasting impact on hearts and minds."
                size="medium"
                width="100%"
         
              />
              
              <div className="pt-2 sm:pt-4">
                <Button 
                  text="Get Started" 
                  variant="primary"
                  className="text-white border-white hover:bg-white hover:text-black transition-all duration-300 w-full sm:w-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection



