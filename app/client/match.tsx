'use client';
import React, { useEffect, useState } from 'react';
import { fetchLawyers } from '../../lib/api';

export default function Match() {
  const [lawyers, setLawyers] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchLawyers()
      .then((data) => setLawyers(data))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p className="text-center mt-10">Loading lawyers...</p>;

  return (
    <div className="max-w-6xl mx-auto mt-10 px-4">
      <h1 className="text-4xl font-bold text-blue-600 mb-8">Recommended Lawyers</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {lawyers.map((lawyer) => (
          <div key={lawyer.id} className="p-6 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-1">
            <div className="flex justify-between items-center mb-3">
              <h2 className="text-xl font-bold text-gray-900">{lawyer.name}</h2>
              <span className={`px-3 py-1 rounded-full text-white text-sm ${lawyer.availability ? 'bg-emerald-500' : 'bg-gray-400'}`}>
                {lawyer.availability ? 'Available' : 'Busy'}
              </span>
            </div>
            <p className="text-gray-600 mb-2">Specialization: {lawyer.specialization}</p>
            <p className="text-gray-600 mb-2">Experience: {lawyer.experience_years} years</p>
            <p className="text-gray-600 mb-4">Fees: ${lawyer.fees}/hr</p>
            <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded-lg transition">
              Select Lawyer
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

