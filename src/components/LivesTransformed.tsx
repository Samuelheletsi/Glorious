'use client';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import testimonies from '@/data/testimonies.json';

export default function LivesTransformed() {
  const { ref, inView } = useInView({ triggerOnce: false });

  return (
    <section
      ref={ref}
      id="testimonies"
      style={{
        padding: '5rem 1.5rem',
        backgroundColor: '#f9fafb', // gray-50
      }}
    >
      <h2
        style={{
          fontSize: '2.25rem', // ~text-4xl
          fontWeight: 700,
          textAlign: 'center',
          marginBottom: '1rem',
        }}
      >
        Lives Transformed
      </h2>
      <p
        style={{
          color: '#6b7280', // gray-500
          textAlign: 'center',
          marginBottom: '3rem',
        }}
      >
        Real stories of faith and healing
      </p>

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1.5rem',
          justifyContent: 'center',
        }}
      >
        {testimonies.map((t, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            style={{
              backgroundColor: 'white',
              borderRadius: '0.75rem',
              boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
              padding: '1.5rem',
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <img
              src={t.image}
              alt={t.text}
              style={{
                borderRadius: '0.75rem',
                border: '4px solid #6B21A8', // purple-700
                marginBottom: '1rem',
                width: '100%',
                height: '16rem',
                objectFit: 'cover',
              }}
            />
            <p
              style={{
                color: '#374151', // gray-700
                textAlign: 'center',
              }}
            >
              {t.text}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
