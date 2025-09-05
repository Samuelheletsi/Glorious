'use client';
import { useState, useEffect } from 'react';
import footerData from '@/data/footer.json';
import { FaInstagram, FaTelegram, FaYoutube } from 'react-icons/fa';
import QRCode from 'react-qr-code';

export default function Footer() {
  const siteUrl = footerData.qrCodeLink || 'https://glorious-ryc.netlify.app/';
  const [qrSize, setQrSize] = useState(120);

  // Dynamically adjust QR code size based on screen width
  useEffect(() => {
    const updateSize = () => {
      const width = window.innerWidth;
      if (width < 640) setQrSize(80);    // small screens
      else if (width < 1024) setQrSize(120); // medium screens
      else setQrSize(160);               // large screens
    };

    updateSize();
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  return (
    <footer
      style={{
        backgroundColor: '#6B21A8',
        color: 'white',
        padding: '1rem',
        textAlign: 'center',
        fontWeight: 600,
        borderRadius: '30px 30px 0 0',
      }}
    >
      {/* Big faded title */}
      <h1
        style={{
          fontSize: '4.25rem',
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
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: 'white',
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

      {/* Clickable Responsive QR Code */}
      <div
        style={{
          marginTop: '2rem',
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'wrap',
        }}
      >
        <a href={siteUrl} target="_blank" rel="noopener noreferrer">
          <div
            style={{
              background: 'white',
              padding: '0.5rem',
              display: 'inline-block',
              borderRadius: '12px',
            }}
          >
            <QRCode value={siteUrl} size={qrSize} />
          </div>
        </a>
      </div>

      {/* Copyright */}
      <p
        style={{
          marginTop: '2.5rem',
          fontSize: '0.75rem',
          color: '#D1D5DB',
        }}
      >
        © 2025 Christ Embassy Royalties Youth. All Rights Reserved.
      </p>
    </footer>
  );
}
