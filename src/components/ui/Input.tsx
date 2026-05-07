import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

export default function Input({ label, error, id, ...props }: InputProps) {
  const inputId = id || label.toLowerCase().replace(/\s+/g, '-');

  return (
    <div>
      <label htmlFor={inputId} className="block text-sm font-medium text-gray-300 mb-2">
        {label}
        {props.required && <span className="text-red-400 ml-1">*</span>}
      </label>
      <input
        id={inputId}
        className={`w-full px-4 py-3 border rounded-lg bg-gray-900/50 text-white placeholder-gray-500 focus:outline-none focus:ring-2 transition-all ${
          error
            ? 'border-red-500/50 focus:ring-red-500 focus:border-red-500'
            : 'border-gray-700 focus:ring-brand-blue-500 focus:border-brand-blue-500'
        }`}
        {...props}
      />
      {error && <p className="mt-1 text-sm text-red-400">{error}</p>}
    </div>
  );
}
