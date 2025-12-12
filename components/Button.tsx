import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'success' | 'danger' | 'neutral';
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  ...props 
}) => {
  const baseStyles = "font-bold rounded-2xl transition-all active:scale-95 shadow-md flex items-center justify-center gap-2";
  
  const variants = {
    primary: "bg-blue-400 hover:bg-blue-500 text-white border-b-4 border-blue-600",
    success: "bg-green-400 hover:bg-green-500 text-white border-b-4 border-green-600",
    danger: "bg-red-400 hover:bg-red-500 text-white border-b-4 border-red-600",
    neutral: "bg-gray-200 hover:bg-gray-300 text-gray-700 border-b-4 border-gray-400"
  };

  const sizes = {
    sm: "px-3 py-1 text-sm",
    md: "px-6 py-3 text-lg",
    lg: "px-8 py-4 text-xl",
    xl: "px-10 py-6 text-2xl"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`} 
      {...props}
    >
      {children}
    </button>
  );
};