'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { HiMenu, HiX } from 'react-icons/hi2';

interface NavbarProps {
  isLoggedIn?: boolean;
  onLogout?: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ isLoggedIn = true, onLogout }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-blue-600 text-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link
            href="/"
            className="text-2xl font-bold tracking-wide hover:text-blue-200 transition"
          >
            Caselist
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-6 items-center">
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

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-white focus:outline-none"
            >
              {menuOpen ? <HiX size={28} /> : <HiMenu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-blue-500 rounded-b-2xl shadow-md py-4 flex flex-col space-y-3 mt-1 px-4">
            <Link href="/" onClick={() => setMenuOpen(false)} className="hover:text-blue-200">
              Home
            </Link>
            <Link href="/client/intake" onClick={() => setMenuOpen(false)} className="hover:text-blue-200">
              Intake
            </Link>
            <Link href="/client/match" onClick={() => setMenuOpen(false)} className="hover:text-blue-200">
              Match
            </Link>
            {isLoggedIn && (
              <button
                onClick={() => { setMenuOpen(false); onLogout?.(); }}
                className="bg-white text-blue-600 px-3 py-1 rounded-lg font-semibold hover:bg-gray-100 transition"
              >
                Logout
              </button>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
