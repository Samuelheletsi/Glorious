'use client';
import footerData from '@/data/footer.json';
import { FaInstagram, FaTelegram, FaYoutube } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: '#6B21A8', // primaryPurple
        color: 'white',
        padding: '1rem ',
        textAlign: 'center',
        fontWeight: 600,
        borderRadius: '30px 30px 0 0',
      }}
    >
      {/* Big faded title */}
      <h1
        style={{
          fontSize: '4.25rem', // text-4xl
          fontWeight: 800,
          opacity: 0.2,
          marginBottom: '2rem',
        }}
      >
        THE GLORIOUS CHURCH
      </h1>

      {/* Info sections */}
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '3rem',
          justifyContent: 'center',
          fontSize: '0.875rem',
          fontWeight: 400,
        }}
      >
        {/* Location */}
        <div>
          <p
            style={{
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              color: 'white', 
            }}
          >
            OUR LOCATION
          </p>
          <a
            href={footerData.location.url}
            style={{
              color: 'white', // highlightYellow
              textDecoration: 'underline',
              marginTop: '0.25rem',
              display: 'block',
            }}
          >
            {footerData.location.address}
          </a>
        </div>

        {/* Contact */}
        <div>
          <p
            style={{
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
            }}
          >
            GET IN TOUCH
          </p>
          <p style={{ marginTop: '0.25rem' }}>{footerData.contact.email}</p>
        </div>

        {/* Socials */}
        <div>
          <p
            style={{
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
            }}
          >
            FOLLOW US
          </p>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '1.5rem',
              marginTop: '0.5rem',
              fontSize: '1.125rem',
            }}
          >
            {footerData.socials.instagram && (
              <a
                href={footerData.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: 'white' }}
              >
                <FaInstagram size={20} />
              </a>
            )}
            {footerData.socials.telegram && (
              <a
                href={footerData.socials.telegram}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: 'white' }}
              >
                <FaTelegram size={20} />
              </a>
            )}
            {footerData.socials.youtube && (
              <a
                href={footerData.socials.youtube}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: 'white' }}
              >
                <FaYoutube size={20} />
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Copyright */}
      <p
        style={{
          marginTop: '2.5rem',
          fontSize: '0.75rem',
          color: '#D1D5DB', // gray-300
        }}
      >
        © 2025 Christ Embassy Royalties Youth. All Rights Reserved.
      </p>
    </footer>
  );
}
