import React from 'react';

interface InputProps {
  type: string;
  placeholder?: string;
  className?: string;
}

const Input: React.FC<InputProps> = ({ type, placeholder, className }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={`border p-2 rounded ${className}`}
    />
  );
};

export { Input };
