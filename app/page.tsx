'use client';
import React from 'react';
import Navbar from '../components/Navbar';
import Link from 'next/link';

export default function HomePage() {
  return (
    <>
      <Navbar />

      <main className="bg-gradient-to-b from-blue-50 to-white min-h-screen py-12">
        <div className="max-w-6xl mx-auto px-4 text-center">
          {/* Hero Section */}
          <h1 className="text-5xl md:text-6xl font-bold text-blue-600 mb-6">
            Welcome to Caselist
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-8">
            Connect with top lawyers, get personalized case guidance, and manage your legal cases seamlessly.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col md:flex-row justify-center gap-6">
            <Link
              href="/client/intake"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-2xl shadow-md hover:shadow-lg transition"
            >
              Start Intake
            </Link>
            <Link
              href="/client/match"
              className="bg-white hover:bg-gray-100 text-blue-600 font-semibold px-6 py-3 rounded-2xl shadow-md hover:shadow-lg transition"
            >
              Browse Lawyers
            </Link>
          </div>

          {/* Feature Cards */}
          <div className="grid gap-6 md:grid-cols-3 mt-16">
            <div className="bg-white rounded-3xl p-6 shadow-md hover:shadow-xl transition transform hover:-translate-y-1">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Fast Matching</h3>
              <p className="text-gray-700">Get matched with the most suitable lawyers based on your case type and requirements.</p>
            </div>
            <div className="bg-white rounded-3xl p-6 shadow-md hover:shadow-xl transition transform hover:-translate-y-1">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Secure Communication</h3>
              <p className="text-gray-700">Chat securely with lawyers and schedule Zoom meetings directly through the portal.</p>
            </div>
            <div className="bg-white rounded-3xl p-6 shadow-md hover:shadow-xl transition transform hover:-translate-y-1">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Escrow Payments</h3>
              <p className="text-gray-700">Your payments are securely held and only released once your case is resolved.</p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
