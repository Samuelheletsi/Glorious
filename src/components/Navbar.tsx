'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Detect screen size with matchMedia
  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 768px)');

    const handleChange = (e: MediaQueryListEvent | MediaQueryList) => {
      setIsMobile(e.matches);
    };

    // Initial check
    handleChange(mediaQuery);

    // Listen for changes
    mediaQuery.addEventListener('change', handleChange);

    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      style={{
        maxWidth: '800px',
        margin: '1.5rem auto 0 auto',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '0.75rem 2rem',
        backgroundColor: '#3b3395',
        borderRadius: '3rem',
        position: 'fixed',
        top: 1,
        left: 0,
        right: 0,
        zIndex: 10,
        boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
      }}
    >
      {/* Logo */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
        <img src="/logo.svg" alt="RYC Logo" style={{ width: '2.5rem', height: '2.5rem' }} />
        <div style={{ color: '#fff', fontWeight: 700 }}>
          <p style={{ fontSize: '1.25rem', fontWeight: 800, margin: 0 }}>Royalties</p>
          <p style={{ fontSize: '0.75rem', textTransform: 'uppercase', margin: 0 }}>
            The Glorious Church
          </p>
        </div>
      </div>

      {/* Nav links (desktop or mobile) */}
      {isMobile ? (
        <>
          {/* Mobile hamburger button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              color: '#fff',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              zIndex: 20,
            }}
            aria-label="Toggle menu"
          >
            <svg
              style={{ width: '1.75rem', height: '1.75rem' }}
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

          {/* Mobile dropdown menu */}
          {menuOpen && (
            <div
              style={{
                position: 'absolute',
                top: '100%',
                right: 0,
                backgroundColor: '#3b3395',
                borderRadius: '1rem',
                padding: '1rem',
                marginTop: '0.5rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
                width: '200px',
                boxShadow: '0 8px 20px rgba(0,0,0,0.2)',
              }}
            >
              {['Programs', 'Testimonies', 'About', 'Churches'].map((item) => (
                <p
                  key={item}
                  style={{
                    color: '#fff',
                    fontSize: '1rem',
                    fontWeight: 600,
                    margin: 0,
                    cursor: 'pointer',
                    transition: 'color 0.3s',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#FBBF24')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = '#fff')}
                >
                  {item}
                </p>
              ))}
              <button
                style={{
                  padding: '0.5rem 1.25rem',
                  borderRadius: '9999px',
                  fontWeight: 600,
                  backgroundColor: '#fff',
                  color: '#3b3395',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'background-color 0.3s, color 0.3s',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#FBBF24';
                  e.currentTarget.style.color = '#3b3395';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#fff';
                  e.currentTarget.style.color = '#3b3395';
                }}
              >
                Give
              </button>
            </div>
          )}
        </>
      ) : (
        // Desktop nav links
        <ul
          style={{
            display: 'flex',
            gap: '2rem',
            alignItems: 'center',
            fontSize: '1.125rem',
            fontWeight: 600,
            color: '#fff',
            listStyle: 'none',
            margin: 0,
            padding: 0,
          }}
        >
          {['Programs', 'Testimonies', 'About', 'Churches'].map((item) => (
            <li
              key={item}
              style={{
                cursor: 'pointer',
                transition: 'color 0.3s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#FBBF24')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#fff')}
            >
              {item}
            </li>
          ))}
          <li>
            <button
              style={{
                padding: '0.5rem 1.25rem',
                borderRadius: '10px',
                fontWeight: 600,
                backgroundColor: '#fff',
                color: '#3b3395',
                border: 'none',
                cursor: 'pointer',
                transition: 'background-color 0.3s, color 0.3s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#FBBF24';
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
      )}
    </motion.nav>
  );
}
