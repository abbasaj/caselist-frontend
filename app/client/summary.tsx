'use client';
import React, { useEffect, useState } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';

export default function Summary() {
  const searchParams = useSearchParams();
  const id = searchParams.get('id');
  const [summary, setSummary] = useState('');
  const router = useRouter();

  useEffect(() => {
    if (id) {
      // TODO: Fetch GPT case summary from backend
      setSummary('This is a placeholder GPT summary for your case.');
    }
  }, [id]);

  return (
    <div className="max-w-4xl mx-auto mt-10 px-4">
      <h1 className="text-4xl font-bold text-blue-600 mb-6">Case Summary</h1>
      <p className="text-gray-700 mb-6">{summary}</p>
      <button
        onClick={() => router.push('/client/match')}
        className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-xl font-semibold transition"
      >
        See Recommended Lawyers
      </button>
    </div>
  );
}

