'use client';
import React, { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar';
import { useSearchParams } from 'next/navigation';

export default function Summary() {
  const params = useSearchParams();
  const caseId = params.get('id');
  const [summary, setSummary] = useState<string>('');

  useEffect(() => {
    // Fetch case summary from backend
    if (caseId) {
      fetch(`/api/cases/${caseId}`)
        .then((res) => res.json())
        .then((data) => setSummary(data.notes))
        .catch((err) => console.error(err));
    }
  }, [caseId]);

  return (
    <>
      <Navbar />
      <div className="max-w-4xl mx-auto mt-10 px-4">
        <h1 className="text-3xl font-bold text-blue-600 mb-6">Case Summary</h1>
        {summary ? (
          <div className="bg-gradient-to-br from-white to-blue-50 p-6 rounded-3xl shadow-md">
            <p className="text-gray-800">{summary}</p>
          </div>
        ) : (
          <p className="text-gray-600">Loading summary...</p>
        )}
      </div>
    </>
  );
}
