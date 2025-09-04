'use client';
import branches from '@/data/branches.json';
import { FaInstagram } from 'react-icons/fa';

export default function Branches() {
  return (
    <section
      style={{
        padding: '3rem 1.5rem',
        maxWidth: '80rem', // roughly equivalent to max-w-5xl
        margin: '0 auto',
      }}
    >
      <h2
        style={{
          textAlign: 'center',
          fontSize: '2rem', // text-3xl
          fontWeight: '700',
          color: '#3b3395', // primaryPurple
          marginBottom: '2.5rem',
        }}
      >
        OUR OTHER BRANCHES
      </h2>

      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '1.5rem',
          justifyContent: 'center',
           
        }}
      >
        {branches.map((branch) => (
          <div
            key={branch.id}
            style={{
              width: '22rem',
              backgroundColor: '#fff',
              boxShadow: '0 10px 15px rgba(0,0,0,0.1)',
              borderRadius: '1rem',
              padding: '1rem',
              display: 'flex',
              flexDirection: 'column',
             
            }}
          >
            <h3 style={{ fontSize: '1.25rem', fontWeight: 600 }}>
              {branch.name}
            </h3>
            <p style={{ marginTop: '0.75rem', color: '#4B5563' }}>
              {branch.blurb}
            </p>

            {branch.socials?.instagram && (
              <a
                href={branch.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  width: 'fit-content',
                  marginTop: '0.5rem',
                  backgroundColor: '#3b3395',
                  padding: '0.2rem',
                  borderRadius: '90px',
                  color: '#fff',
                  transition: 'color 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = 'black';// lightPurple
                  e.currentTarget.style.backgroundColor = '#6B46C1' ;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = '#fff';
                  e.currentTarget.style.backgroundColor = '#3b3395' 
                }}
              >
                <FaInstagram size={28} />
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
