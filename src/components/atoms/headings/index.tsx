import React from 'react';

interface HeadingProps {
  text: string;
  size?: 'large' | 'medium' | 'small';
  className?: string;
}

const Heading: React.FC<HeadingProps> = ({
  text,
  size = 'medium',
  className = ''
}) => {
  const baseStyles = 'leading-trim: both; text-edge: cap; !text-[#1D1A1A]  ';
  
  const sizeStyles = {
    large: 'text-[119px] leading-[131px] tracking-[-0.03em] capitalize font-normal mb-8',
    medium: 'font-semibold text-[58px] leading-[65px] tracking-[-0.03em]  mb-6',
    small: 'text-[26px] leading-[27px] tracking-[0%] capitalize font-bold mb-4'
  };
  
  return (
    <h1 
      className={`
        ${baseStyles}
        ${sizeStyles[size]}
        ${className}
    `.trim()}
 
    >
      {text}
    </h1>
  );
};

export default Heading;
