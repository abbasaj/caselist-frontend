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
    <div className="p-6 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-1">
      <div className="flex justify-between items-center mb-3">
        <h2 className="text-xl font-bold text-gray-900">{name}</h2>
        <span
          className={`px-3 py-1 rounded-full text-white text-sm ${
            availability ? 'bg-emerald-500' : 'bg-gray-400'
          }`}
        >
          {availability ? 'Available' : 'Busy'}
        </span>
      </div>
      <p className="text-gray-600 mb-1">Specialization: {specialization}</p>
      <p className="text-gray-600 mb-1">Experience: {experience_years} years</p>
      {rating !== undefined && <p className="text-gray-600 mb-1">Rating: {rating} ⭐</p>}
      <p className="text-gray-600 mb-4">Fees: ${fees}/hr</p>
      <button
        onClick={() => onSelect?.(id)}
        className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded-lg transition"
      >
        Select Lawyer
      </button>
    </div>
  );
};

export default LawyerCard;

