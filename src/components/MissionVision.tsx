'use client';
import missionVision from '@/data/missionVision.json';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function MissionVision() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section
      ref={ref}
      style={{
        backgroundColor: '#f4b914',
        padding: '4rem 1.5rem',
        textAlign: 'center',
        color: '#3b3395',
      }}
    >
      {/* Heading */}
      <h2
        style={{
          fontSize: '1.875rem', // ~text-3xl
          fontWeight: 700,
        }}
      >
        {missionVision.heading}
      </h2>
      <p style={{ marginTop: '0.5rem', fontWeight: 500 }}>
        {missionVision.subtext}
      </p>

      {/* Cards */}
      <div
        style={{
          marginTop: '2.5rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '1.5rem',
          maxWidth: '64rem',
          marginLeft: 'auto',
          marginRight: 'auto',
        }}
      >
        {missionVision.cards.map((card, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            style={{
              backgroundColor: 'white',
              color: '#3b3395',
              borderRadius: '0.75rem',
              padding: '1.5rem',
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
