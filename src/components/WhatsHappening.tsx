'use client';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import mandates from '@/data/mandates.json';

export default function WhatsHappening() {
  const { ref, inView } = useInView({ triggerOnce: false });

  return (
    <section
      ref={ref}
      style={{ padding: '5rem 1.5rem', backgroundColor: '#fff' }}
    >
      <h2
        style={{
          fontSize: '2.5rem',
          fontWeight: '700',
          textAlign: 'center',
          marginBottom: '1rem',
        }}
      >
        What’s Happening
      </h2>
      <p
        style={{
          color: '#6b7280',
          textAlign: 'center',
          marginBottom: '3rem',
          fontSize: '1rem',
        }}
      >
        Key activities for the week or month
      </p>

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1.5rem',
          justifyContent: 'center',
        }}
      >
        {mandates.map((m) => (
          <motion.div
            key={m.id}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            style={{
              backgroundColor: '#fff',
              borderRadius: '1rem',
              boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
              padding: '1.5rem',
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <img
              src={m.image}
              alt={m.title}
              style={{
                borderRadius: '1rem',
                marginBottom: '1rem',
                width: '100%',
                height: '192px',
                objectFit: 'cover',
              }}
            />
            <h3
              style={{
                fontSize: '1.25rem',
                fontWeight: '700',
                color: '#000',
                marginBottom: '0.5rem',
              }}
            >
              {m.title}
            </h3>
            <p
              style={{
                color: '#374151',
                marginBottom: '1rem',
                fontSize: '1rem',
              }}
            >
              {m.description}
            </p>
            <button
              style={{
                backgroundColor: '#6b21a8',
                color: '#fff',
                padding: '0.5rem 1rem',
                borderRadius: '0.5rem',
                fontWeight: '600',
                cursor: 'pointer',
                border: 'none',
                transition: 'all 0.3s',
              }}
              onMouseOver={(e) => (e.currentTarget.style.textDecoration = 'underline')}
              onMouseOut={(e) => (e.currentTarget.style.textDecoration = 'none')}
            >
              Be Involved
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
