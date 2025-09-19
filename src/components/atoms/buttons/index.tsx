import React from 'react';
import Image from 'next/image';

interface ButtonProps {
  text: string;
  variant?: 'primary' | 'secondary' | 'outline';
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  text,
  variant = 'primary',
  onClick,
  disabled = false,
  className = ''
}) => {
  const baseStyles = 'relative inline-block font-medium transition-all duration-200 focus:outline-none group text-sm sm:text-base';
  
  const variantStyles = {
    primary: 'text-[#E78A38] hover:text-[#E78A38]',
    secondary: 'text-blue-600 hover:text-blue-700',
    outline: 'text-gray-600 hover:text-gray-700'
  };
  
  const disabledStyles = disabled 
    ? 'opacity-50 cursor-not-allowed' 
    : 'cursor-pointer';
  
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
        ${baseStyles}
        ${variantStyles[variant]}
        ${disabledStyles}
        ${className}
      `.trim()}
    >
        <span className="flex items-center gap-2">
          {text}
          <Image 
            src="/Vector.svg" 
            alt="arrow" 
            width={17} 
            height={13} 
            className="group-hover:translate-x-1 transition-transform duration-200" 
          />
        </span>
     <div className="absolute text-[#1D1A1A] w-full bottom-0 left-0 w-full h-0 group-hover:bg-orange-600 transition-colors duration-200 border-b-1"></div>

    </button>
  );
};

export default Button;
