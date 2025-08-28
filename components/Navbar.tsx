'use client';
import React from 'react';
import Link from 'next/link';

interface NavbarProps {
  isLoggedIn?: boolean;
  onLogout?: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ isLoggedIn = true, onLogout }) => {
  return (
    <nav className="bg-blue-600 text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold tracking-wide hover:text-blue-200 transition">
            Caselist
          </Link>

          {/* Links */}
          <div className="flex space-x-6 items-center">
            <Link href="/" className="hover:text-blue-200 transition">
              Home
            </Link>
            <Link href="/client/intake" className="hover:text-blue-200 transition">
              Intake
            </Link>
            <Link href="/client/match" className="hover:text-blue-200 transition">
              Match
            </Link>
            {isLoggedIn && (
              <button
                onClick={onLogout}
                className="bg-white text-blue-600 px-3 py-1 rounded-lg font-semibold hover:bg-gray-100 transition"
              >
                Logout
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

