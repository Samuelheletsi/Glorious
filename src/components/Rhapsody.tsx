'use client';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import rhapsodyData from '@/data/rhapsody.json';

export default function Rhapsody() {
  const { ref, inView } = useInView({ triggerOnce: false });

  return (
    <section
      ref={ref}
      style={{
        backgroundColor: '#3b3395', // primaryPurple
        color: 'white',
        padding: '4rem 1.5rem',
        textAlign: 'center',
      }}
    >
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        style={{
          fontSize: '2rem', // ~text-3xl
          fontWeight: 700,
          marginBottom: '0.5rem',
        }}
      >
        {rhapsodyData.title}
      </motion.h2>

      {/* Main text */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ delay: 0.3, duration: 0.8 }}
        style={{
          maxWidth: '48rem', // ~max-w-3xl
          margin: '1.5rem auto 0',
          fontSize: '1.125rem', // ~text-lg
          lineHeight: '1.75rem',
          color: '#f3f4f6',
        }}
      >
        {rhapsodyData.description}
      </motion.p>

      {/* Prayer Box */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={inView ? { opacity: 1, scale: 1 } : {}}
        transition={{ delay: 0.6, duration: 0.6 }}
        style={{
          backgroundColor: '#0b1a33', // darkBg
          marginTop: '3rem',
          padding: '2rem',
          borderRadius: '1rem',
          maxWidth: '40rem', // ~max-w-2xl
          marginLeft: 'auto',
          marginRight: 'auto',
          boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
        }}
      >
        <h3
          style={{
            fontSize: '1.5rem',
            fontWeight: 600,
            marginBottom: '0.75rem',
          }}
        >
          {rhapsodyData.prayer.title}
        </h3>
        <p style={{ marginBottom: '1rem' }}>{rhapsodyData.prayer.intro}</p>
        <p
          style={{
            maxWidth: '36rem',
            margin: '0 auto',
            fontSize: '1.1rem',
            lineHeight: '1rem',
            color: '#e5e7eb',
          }}
        >
          {rhapsodyData.prayer.text}
        </p>
      </motion.div>
    </section>
  );
}
