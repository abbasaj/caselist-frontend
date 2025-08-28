'use client';
import React from 'react';
import Navbar from '../../components/Navbar';
import LawyerCard from '../../components/LawyerCard';
import { fetchLawyers, Lawyer } from '../../lib/api';

export default function Match() {
  const [lawyers, setLawyers] = React.useState<Lawyer[]>([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    fetchLawyers().then((data) => {
      setLawyers(data.slice(0, 3)); // top 2-3 for MVP
      setLoading(false);
    });
  }, []);

  const handleSelect = (id: number) => {
    alert(`You selected lawyer ID: ${id}`);
  };

  return (
    <>
      <Navbar />
      <div className="max-w-6xl mx-auto mt-10 px-4">
        <h1 className="text-4xl font-bold text-blue-600 mb-8">Recommended Lawyers</h1>
        {loading ? (
          <p className="text-center text-gray-600">Loading lawyers...</p>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {lawyers.map((lawyer) => (
              <LawyerCard key={lawyer.id} {...lawyer} onSelect={handleSelect} />
            ))}
          </div>
        )}
      </div>
    </>
  );
}
