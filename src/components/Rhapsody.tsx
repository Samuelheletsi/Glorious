'use client';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import rhapsodyData from '@/data/rhapsody.json';

export default function Rhapsody() {
  const { ref, inView } = useInView({ triggerOnce: false });

  return (
    <section
      ref={ref}
      style={{ backgroundColor: '#3b3395', color: 'white', padding: '4rem 1.5rem', textAlign: 'center' }}
    >
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        style={{ fontSize: '1.875rem', fontWeight: 'bold', marginBottom: '0.5rem' }}
      >
        {rhapsodyData.title}
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ delay: 0.3, duration: 0.8 }}
        style={{ maxWidth: '48rem', marginTop: '1.5rem', marginLeft: 'auto', marginRight: 'auto', fontSize: '1.125rem', lineHeight: 1.75, color: '#f3f4f6' }}
      >
        {rhapsodyData.description}
      </motion.p>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={inView ? { opacity: 1, scale: 1 } : {}}
        transition={{ delay: 0.6, duration: 0.6 }}
        style={{ backgroundColor: '#1f2937', marginTop: '3rem', padding: '2rem', borderRadius: '0.75rem', maxWidth: '42rem', marginLeft: 'auto', marginRight: 'auto', boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)' }}
      >
        <h3 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '0.75rem' }}>
          {rhapsodyData.prayer.title}
        </h3>
        <p style={{ marginBottom: '1rem' }}>{rhapsodyData.prayer.intro}</p>
        <p style={{ maxWidth: '36rem', marginLeft: 'auto', marginRight: 'auto', fontSize: '1.25rem', lineHeight: 1, color: '#e5e7eb' }}>
          {rhapsodyData.prayer.text}
        </p>
      </motion.div>
    </section>
  );
}
