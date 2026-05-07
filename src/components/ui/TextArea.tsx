import React from 'react';

interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  error?: string;
}

export default function TextArea({ label, error, id, ...props }: TextAreaProps) {
  const textareaId = id || label.toLowerCase().replace(/\s+/g, '-');

  return (
    <div>
      <label htmlFor={textareaId} className="block text-sm font-medium text-gray-700 mb-2">
        {label}
        {props.required && <span className="text-red-500 ml-1">*</span>}
      </label>
      <textarea
        id={textareaId}
        className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition-all resize-none ${
          error
            ? 'border-red-300 focus:ring-red-500 focus:border-red-500'
            : 'border-gray-300 focus:ring-brand-blue-500 focus:border-brand-blue-500'
        }`}
        {...props}
      />
      {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
    </div>
  );
}
