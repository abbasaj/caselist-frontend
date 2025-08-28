'use client';
import React, { ReactNode } from 'react';
import Navbar from './Navbar';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-blue-50 to-white">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-1">{children}</main>

      {/* Footer */}
      <footer className="bg-blue-600 text-white py-6 mt-12 shadow-inner">
        <div className="max-w-6xl mx-auto px-4 text-center text-sm">
          &copy; {new Date().getFullYear()} Caselist. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Layout;
