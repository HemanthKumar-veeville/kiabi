import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: 'outline' | 'solid';
}

const Button: React.FC<ButtonProps> = ({ children, onClick, className = '', variant = 'solid' }) => {
  const baseClasses = `px-4 py-2 rounded-md text-sm font-medium focus:outline-none focus:ring`;
  const variantClasses =
    variant === 'outline'
      ? 'border border-gray-300 text-gray-700 bg-white hover:bg-gray-50'
      : 'bg-gray-100 text-white hover:bg-blue-700';

  return (
    <button onClick={onClick} className={`${baseClasses} ${variantClasses} ${className}`}>
      {children}
    </button>
  );
};

export { Button };
