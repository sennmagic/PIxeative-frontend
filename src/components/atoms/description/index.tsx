import React from 'react';

interface DescriptionProps {
  text: string;
  size?: 'medium' | 'small';
  width?: string;
}

const Description: React.FC<DescriptionProps> = ({
  text,
  size = 'medium',
  width = ''
}) => {
  const baseStyles = 'leading-trim: both; text-edge: cap;';
  
  const sizeStyles = {
    medium: 'text-[14px] sm:text-[16px] md:text-[18px] leading-[20px] sm:leading-[24px] md:leading-[27px] tracking-[0%] font-normal',
    small: 'text-[12px] sm:text-[14px] md:text-[16px] leading-[16px] sm:leading-[20px] md:leading-[24px] tracking-[0%] font-medium'
  };
  
  return (
    <p 
      className={`
        ${baseStyles}
        ${sizeStyles[size]}
      `.trim()}
      style={{
        fontFamily: 'Inter, sans-serif',
        width: width,
        maxWidth: '100%'
      }}
    >
      {text}
    </p>
  );
};

export default Description;
