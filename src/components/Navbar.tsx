'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="max-w-[1100px] mx-auto flex justify-between items-center py-3 px-8 mt-6"
      style={{
        backgroundColor: '#3b3395', // primaryPurple
        borderRadius: '3rem',       // xl-rounded
      }}
    >
      {/* Logo */}
      <div className="flex items-center space-x-3">
        <img src="/logo.svg" alt="RYC Logo" className="w-10 h-10" />
        <div style={{ color: '#fff', fontWeight: 700 }}>
          <p style={{ fontSize: '1.25rem', fontWeight: 800 }}>Royalties</p>
          <p style={{ fontSize: '0.75rem', textTransform: 'uppercase' }}>The Glorious Church</p>
        </div>
      </div>

      {/* Desktop / Medium screen nav links */}
      <ul className="hidden md:flex space-x-8 items-center text-lg" style={{ color: '#fff', fontWeight: 600 }}>
        {['Programs', 'Testimonies', 'About', 'Churches'].map((item) => (
          <li
            key={item}
            className="cursor-pointer"
            style={{ transition: 'color 0.3s' }}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#FBBF24')} // highlightYellow
            onMouseLeave={(e) => (e.currentTarget.style.color = '#fff')}
          >
            {item}
          </li>
        ))}
        <li>
          <button
            className="px-5 py-2 rounded-full font-semibold"
            style={{
              backgroundColor: '#fff',
              color: '#3b3395', // primaryPurple
              transition: 'background-color 0.3s, color 0.3s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#FBBF24'; // highlightYellow
              e.currentTarget.style.color = '#3b3395';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#fff';
              e.currentTarget.style.color = '#3b3395';
            }}
          >
            Give
          </button>
        </li>
      </ul>

      {/* Mobile menu button */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="block md:hidden text-white focus:outline-none"
        aria-label="Toggle menu"
      >
        <svg
          className="w-7 h-7"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          {menuOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>
    </motion.nav>
  );
}
