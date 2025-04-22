"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import logo from "@/assets/logo.png";
import Link from 'next/link';
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-24 items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Image 
              src={logo} 
              alt="Logo" 
              className="w-60 h-4 md:w-80 md:h-4"
              priority
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="text-[#1E1464CC] hover:text-[#1E1464CC] px-3 py-2 rounded-md text-md font-medium transition duration-300">
              Home
            </Link>
            <Link href="/Class" className="text-[#1E1464CC] hover:text-[#1E1464CC] px-3 py-2 rounded-md text-md font-medium transition duration-300">
              Class of 2025
            </Link>
            <Link href="/Teams" className="text-[#1E1464CC] hover:text-[#1E1464CC] px-3 py-2 rounded-md text-md font-medium transition duration-300">
              Teams
            </Link>
            {/* <a href="#" className="text-[#1E1464CC] hover:text-[#1E1464CC] px-3 py-2 rounded-md text-md font-medium transition duration-300">
              Leaderboard
            </a> */}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-[#1E1464CC] hover:text-blue-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg className="block h-8 w-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-8 w-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={`md:hidden transition-all duration-300 z-10 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
        <div className="px-2 pt-2 pb-4 space-y-1 sm:px-3">
          <Link href="/" className="block px-3 py-4 rounded-md text-base font-medium text-[#1E1464CC] hover:text-blue-600 hover:bg-gray-50 transition duration-300">
            Home
          </Link>
          <Link href="/Class" className="block px-3 py-4 rounded-md text-base font-medium text-[#1E1464CC] hover:text-blue-600 hover:bg-gray-50 transition duration-300">
            Class of 2025
          </Link>
          <Link href="/Teams" className="block px-3 py-4 rounded-md text-base font-medium text-[#1E1464CC] hover:text-blue-600 hover:bg-gray-50 transition duration-300">
            Teams
          </Link>
  
        </div>
      </div>
    </nav>
  );
}

export default Navbar;