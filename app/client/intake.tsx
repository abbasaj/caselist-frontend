'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { submitCase } from '../../lib/api';

export default function Intake() {
  const router = useRouter();
  const [tiles, setTiles] = useState([
    { question: 'Describe your case briefly', answer: '' },
    { question: 'Preferred lawyer specialization', answer: '' },
    { question: 'Budget range (USD)', answer: '' },
  ]);
  const [loading, setLoading] = useState(false);

  const handleChange = (index: number, value: string) => {
    const newTiles = [...tiles];
    newTiles[index].answer = value;
    setTiles(newTiles);
  };

  const handleSubmit = async () => {
    setLoading(true);
    try {
      const caseData = tiles.reduce((acc, t) => ({ ...acc, [t.question]: t.answer }), {});
      const result = await submitCase(caseData);
      router.push(`/client/summary?id=${result.id}`);
    } catch (err) {
      console.error(err);
      alert('Failed to submit case');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto mt-10 px-4">
      <h1 className="text-4xl font-bold text-blue-600 mb-8">Start Your Case</h1>
      <div className="grid gap-6">
        {tiles.map((tile, idx) => (
          <div key={idx} className="p-6 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-1">
            <label className="block font-semibold mb-2 text-gray-900">{tile.question}</label>
            <input
              type="text"
              value={tile.answer}
              onChange={(e) => handleChange(idx, e.target.value)}
              className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Type your answer..."
            />
          </div>
        ))}
      </div>
      <button
        onClick={handleSubmit}
        disabled={loading}
        className="mt-6 w-full md:w-auto bg-blue-500 hover:bg-blue-600 text-white font-semibold px-8 py-3 rounded-xl shadow-lg transition"
      >
        {loading ? 'Submitting...' : 'Submit Case'}
      </button>
    </div>
  );
}

