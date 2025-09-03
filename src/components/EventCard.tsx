'use client';
import Link from 'next/link';
import { Event } from '@/types';
import { motion } from 'framer-motion';

export default function EventCard({ event }: { event: Event }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: false }}
      style={{
        boxShadow: '0 10px 15px rgba(0,0,0,0.1)',
        borderRadius: '1rem',
        padding: '1.25rem',
        backgroundColor: '#fff',
        textAlign: 'left',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <img
        src={event.images[0]}
        alt={event.title}
        style={{
          borderRadius: '0.75rem',
          width: '100%',
          marginBottom: '1rem',
        }}
      />
      <h3 style={{ fontSize: '1.25rem', fontWeight: 600 }}>
        {event.title}
      </h3>
      <Link
        href="#"
        style={{
          color: '#3b3395', // primaryPurple
          fontWeight: '700',
          display: 'block',
          marginTop: '0.5rem',
          textDecoration: 'none',
        }}
        onMouseEnter={(e) => (e.currentTarget.style.textDecoration = 'underline')}
        onMouseLeave={(e) => (e.currentTarget.style.textDecoration = 'none')}
      >
        {event.description}
      </Link>
      <p style={{ marginTop: '0.5rem', color: '#4B5563' /* gray-600 */ }}>
        {event.date}
      </p>
      <button
        style={{
          marginTop: '1rem',
          backgroundColor: '#3b3395',
          color: '#fff',
          padding: '0.75rem 1.25rem',
          borderRadius: '0.75rem',
          fontWeight: 600,
          border: 'none',
          cursor: 'pointer',
          transition: 'background 0.3s ease',
        }}
        onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#292471')}
        onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#3b3395')}
      >
        Be Involved
      </button>
    </motion.div>
  );
}
