'use client';
import React from 'react';
import branches from '@/data/branches.json';
import { FaInstagram } from 'react-icons/fa';

export default function Branches() {
  return (
    <section id="branches" style={{ padding: '3rem 1.5rem', maxWidth: '80rem', margin: '0 auto' }}>
      <h2 style={{ textAlign: 'center', fontSize: '1.875rem', fontWeight: 'bold', color: '#3b3395', marginBottom: '2.5rem' }}>
        OUR OTHER BRANCHES
      </h2>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem', justifyContent: 'center' }}>
        {branches.map((branch) => (
          <div
            key={branch.id}
            style={{
              width: '22rem',
              backgroundColor: 'white',
              borderRadius: '0.75rem',
              padding: '1rem',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <hr style={{ width: '100%', border: 'none', height: '1px', backgroundColor: '#d1d5db', borderRadius: '0.125rem', marginBottom: '1rem' }} />

            <h3 style={{ fontSize: '1.25rem', fontWeight: '600' }}>{branch.name}</h3>
            <p style={{ marginTop: '0.75rem', color: '#4b5563' }}>{branch.blurb}</p>

            {branch.socials?.instagram && (
              <a
                href={branch.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  width: 'fit-content',
                  marginTop: '0.5rem',
                  backgroundColor: '#3b3395',
                  padding: '0.25rem',
                  borderRadius: '9999px',
                  color: 'white',
                  transition: 'color 0.3s, background-color 0.3s',
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.color = 'black';
                  e.currentTarget.style.backgroundColor = '#c4b5fd';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.color = 'white';
                  e.currentTarget.style.backgroundColor = '#3b3395';
                }}
              >
                <FaInstagram size={28} />
              </a>
            )}

            <a
              href={`https://www.google.com/maps/dir/?api=1&destination=${branch.lat},${branch.lng}`}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                width: 'fit-content',
                marginTop: '0.5rem',
                backgroundColor: '#3b3395',
                padding: '0.5rem 1rem',
                borderRadius: '0.375rem',
                color: 'white',
                textDecoration: 'none',
                fontSize: '0.875rem',
                fontWeight: '600',
                transition: 'background-color 0.3s',
              }}
              onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#c4b5fd')}
              onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#3b3395')}
            >
              Get Directions
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
