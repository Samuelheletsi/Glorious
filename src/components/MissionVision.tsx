'use client';
import missionVision from '@/data/missionVision.json';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState, useEffect } from 'react';

export default function MissionVision() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const [isMobile, setIsMobile] = useState(false);

  // Detect screen resize
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768); // breakpoint ~ md
    handleResize(); // run once on mount
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section
      ref={ref}
      style={{
        backgroundColor: '#f4b914',
        padding: '4rem 1.5rem',
        textAlign: 'center',
        color: '#3b3395',
        borderRadius: '30px 30px 0 0',
      }}
    >
      {/* Heading */}
      <h2
        style={{
          fontSize: '1.875rem',
          fontWeight: 700,
        }}
      >
        {missionVision.heading}
      </h2>
      <p style={{ marginTop: 0, fontWeight: 500, color: '#333' }}>
        {missionVision.subtext}
      </p>

      {/* Cards */}
      <div
        style={{
          marginTop: '2.5rem',
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          flexWrap: 'wrap',
          gap: '1.5rem',
          justifyContent: 'center',
        }}
      >
        {missionVision.cards.map((card, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            style={{
              width: isMobile ? '100%' : '15rem',
              backgroundColor: 'white',
              color: '#3b3395',
              borderRadius: '0.75rem',
              padding: '1rem',
              flex: 1,
              textAlign: 'left',
              boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
            }}
          >
            <h3
              style={{
                fontSize: '1.25rem',
                fontWeight: 700,
                marginBottom: '0.75rem',
              }}
            >
              {card.title}
            </h3>
            <p style={{ lineHeight: '1.625' }}>{card.text}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
