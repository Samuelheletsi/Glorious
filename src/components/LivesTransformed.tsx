'use client';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import testimonies from '@/data/testimonies.json';
import Image from 'next/image';

export default function LivesTransformed() {
  const { ref, inView } = useInView({ triggerOnce: false });

  return (
    <section
      ref={ref}
      id="testimonies"
      style={{
        padding: '4rem 1rem',
        margin: '0 auto',
        maxWidth: '1200px',
      }}
    >
      {/* Heading */}
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h2
          style={{
            fontSize: '2.25rem',
            fontWeight: 700,
            marginBottom: '0.5rem',
          }}
        >
          Lives Transformed
        </h2>
        <p style={{ color: '#6b7280', fontSize: '1.125rem' }}>
          Real stories of faith and healing
        </p>
      </div>

      {/* Responsive cards */}
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '2rem',
        }}
      >
        {testimonies.map((t, i) => (
          <motion.div
            key={t.id}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: i * 0.2, duration: 0.8 }}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              backgroundColor: '#fff',
              borderRadius: '1rem',
              padding: '1.5rem',
              width: '100%',
              maxWidth: '350px',
              boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            }}
            whileHover={{ transform: 'translateY(-8px)' }}
          >
            {/* Image */}
            <div
              style={{
                width: '100%',
                height: '220px',
                overflow: 'hidden',
                borderRadius: '1rem',
                border: '4px solid #6b21a8',
                marginBottom: '1rem',
              }}
            >
              <Image
                src={t.image}
                alt={t.message}
                width={400}
                height={220}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  transition: 'transform 0.4s ease',
                }}
              />
            </div>

            {/* Message */}
            <h3
              style={{
                fontSize: '1.25rem',
                fontWeight: 700,
                color: '#1f2937',
                marginBottom: '0.5rem',
                textAlign: 'center',
              }}
            >
              {t.message}
            </h3>

            {/* Text */}
            <p
              style={{
                color: '#374151',
                fontSize: '0.95rem',
                textAlign: 'justify',
                marginBottom: '0.5rem',
              }}
            >
              {t.text.replace(/'/g, "&apos;")}
            </p>
            <p
              style={{
                color: '#374151',
                fontSize: '0.95rem',
                textAlign: 'justify',
              }}
            >
              {t.text2.replace(/'/g, "&apos;")}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
