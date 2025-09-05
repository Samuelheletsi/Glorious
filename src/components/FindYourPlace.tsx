'use client';
import React from 'react';
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import find from '@/data/find.json';

export default function FindYourPlace() {
  const { ref, inView } = useInView({ triggerOnce: false });

  return (
    <section
      ref={ref}
      id="find"
      style={{
        backgroundColor: '#f4b914',
        padding: '4rem 1.5rem',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '1200px', // ✅ keeps content constrained
          margin: '0 auto',
        }}
      >
        {find.map((t, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: i * 0.2, duration: 0.8 }}
            whileHover={{ y: -8 }}
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '2rem',
              justifyContent: 'center',
              marginBottom: '3rem', // ✅ spacing between cards
            }}
          >
            {/* Image */}
            <div
              style={{
                width: '20rem',
                height: '260px',
                overflow: 'hidden',
                borderRadius: '1rem',
                border: '6px solid #6b21a8',
                flexShrink: 0,
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

            {/* Text */}
            <div style={{ maxWidth: '30rem', flex: 1 }}>
              <h3
                style={{
                  fontSize: '2rem',
                  fontWeight: 600,
                  color: '#3b3395',
                  textAlign: 'center',
                }}
              >
                {t.title}
              </h3>

              <p
                style={{
                  fontSize: '0.95rem',
                  color: '#374151',
                  textAlign: 'center',
                }}
              >
                {t.message}
              </p>

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
                  border: 'none',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  display: 'block',
                  marginLeft: 'auto',
                  marginRight: 'auto', // ✅ center button
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'white';
                  e.currentTarget.style.color = '#6B21A8';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#6B21A8';
                  e.currentTarget.style.color = 'white';
                }}
              >
                <a href="#contact" style={{textDecoration:'none', color:'#f4b914'}}> {t.text}</a>
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
