'use client';
import React from 'react';

interface LawyerCardProps {
  id: number;
  name: string;
  specialization: string;
  experience_years: number;
  availability: boolean;
  rating?: number;
  fees: number;
  onSelect?: (id: number) => void;
}

const LawyerCard: React.FC<LawyerCardProps> = ({
  id,
  name,
  specialization,
  experience_years,
  availability,
  rating,
  fees,
  onSelect,
}) => {
  return (
    <div className="bg-gradient-to-br from-white to-blue-50 p-6 rounded-3xl shadow-md hover:shadow-xl transition-transform transform hover:-translate-y-1">
      <div className="flex justify-between items-center mb-3">
        <h2 className="text-xl font-semibold text-gray-900">{name}</h2>
        <span
          className={`px-3 py-1 rounded-full text-white text-sm font-medium ${
            availability ? 'bg-emerald-500' : 'bg-gray-400'
          }`}
        >
          {availability ? 'Available' : 'Busy'}
        </span>
      </div>
      <p className="text-gray-700 mb-1">Specialization: {specialization}</p>
      <p className="text-gray-700 mb-1">Experience: {experience_years} years</p>
      {rating !== undefined && <p className="text-gray-700 mb-1">Rating: {rating} ⭐</p>}
      <p className="text-gray-700 mb-4">Fees: ${fees}/hr</p>
      <button
        onClick={() => onSelect?.(id)}
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded-2xl shadow-md hover:shadow-lg transition"
      >
        Select Lawyer
      </button>
    </div>
  );
};

export default LawyerCard;
