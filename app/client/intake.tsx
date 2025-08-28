'use client';
import React from 'react';
import QATile from '../../components/QATile';
import Navbar from '../../components/Navbar';
import { submitCase } from '../../lib/api';

export default function Intake() {
  const [answers, setAnswers] = React.useState<{ [key: string]: string }>({});
  const [loading, setLoading] = React.useState(false);
  const [submitted, setSubmitted] = React.useState(false);
  const [caseId, setCaseId] = React.useState<number | null>(null);

  const questions = [
    { q: 'Type of Case', options: ['Family', 'Criminal', 'Corporate'] },
    { q: 'Urgency', options: ['Immediate', 'Within 1 week', 'Flexible'] },
    { q: 'Preferred Lawyer Gender', options: ['Any', 'Male', 'Female'] },
    { q: 'Budget', options: ['Low', 'Medium', 'High'] },
  ];

  const handleSelect = (question: string, option: string) => {
    setAnswers((prev) => ({ ...prev, [question]: option }));
  };

  const handleSubmit = async () => {
    setLoading(true);
    try {
      const data = await submitCase(answers);
      setCaseId(data.id);
      setSubmitted(true);
    } catch (err) {
      console.error(err);
      alert('Failed to submit case.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <div className="max-w-4xl mx-auto mt-10 px-4">
        <h1 className="text-3xl font-bold text-blue-600 mb-6">Client Intake</h1>

        {questions.map((item) => (
          <QATile
            key={item.q}
            question={item.q}
            options={item.options}
            selectedOption={answers[item.q]}
            onSelect={(option) => handleSelect(item.q, option)}
          />
        ))}

        <button
          onClick={handleSubmit}
          disabled={loading || submitted}
          className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-2xl shadow-md hover:shadow-lg transition disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? 'Submitting...' : submitted ? 'Submitted' : 'Submit'}
        </button>

        {submitted && caseId && (
          <p className="mt-4 text-green-600 font-medium">
            Case submitted successfully! Case ID: {caseId}
          </p>
        )}
      </div>
    </>
  );
}
