'use client';
import React from 'react';

interface QATileProps {
  question: string;
  options: string[];
  selectedOption?: string;
  onSelect: (option: string) => void;
}

const QATile: React.FC<QATileProps> = ({ question, options, selectedOption, onSelect }) => {
  return (
    <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-3xl shadow-md hover:shadow-xl transition-transform transform hover:-translate-y-1 mb-6">
      <h3 className="text-lg font-medium text-gray-900 mb-4">{question}</h3>
      <div className="grid gap-3 md:grid-cols-2">
        {options.map((option) => (
          <button
            key={option}
            onClick={() => onSelect(option)}
            className={`px-4 py-3 rounded-2xl font-medium transition
              ${
                selectedOption === option
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white text-gray-800 hover:bg-blue-100 hover:shadow-sm'
              }`}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default QATile;

