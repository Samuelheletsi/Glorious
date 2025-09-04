'use client';
import { motion } from 'framer-motion';
import meta from '@/data/meta.json';
import { url } from 'inspector';

export default function Hero() {
  return (
    <section
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        backgroundImage: url("/images/"), // primaryPurple
        color: 'white',
        padding: '0 1.5rem',
      }}
    >
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false }}
        style={{
          fontSize: '2.25rem', // ~ text-4xl
          fontWeight: 700,
        }}
      >
        {meta.hero}
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        style={{
          marginTop: '1rem',
          fontSize: '1.125rem', // ~ text-lg
        }}
      >
        {meta.wordOfTheMonth.description}
      </motion.p>

      <motion.button
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        style={{
          marginTop: '1.5rem',
          backgroundColor: '#6B21A8',
          color: 'white',
          padding: '0.75rem 1.5rem',
          borderRadius: '0.75rem',
          border: '2px solid white',
          fontWeight: 600,
          cursor: 'pointer',
          transition: 'all 0.3s ease',
        }}
        onMouseEnter={(e) =>
          ((e.currentTarget.style.backgroundColor = 'white'),
          (e.currentTarget.style.color = '#6B21A8'))
        }
        onMouseLeave={(e) =>
          ((e.currentTarget.style.backgroundColor = '#6B21A8'),
          (e.currentTarget.style.color = 'white'))
        }
      >
        {meta.cta}
      </motion.button>
    </section>
  );
}
