'use client';
import { motion } from 'framer-motion';
import meta from '@/data/meta.json';

export default function Hero() {
  return (
    <section
      style={{
        height: '100vh',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        color: 'white',
        padding: '0 1.5rem',
        overflow: 'hidden',
      }}
    >
      {/* Video background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: 0,
          opacity: 0.7, // slightly transparent
        }}
      >
        <source src="/videos/background-vid.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Deep green overlay */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(102, 70, 153, 0.5)',
          zIndex: 1,
        }}
      />

      {/* Content */}
      <div style={{ position: 'relative', zIndex: 2 }}>
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false }}
          style={{
            fontSize: '2.25rem',
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
            fontSize: '1.125rem',
            color: '#6B21A8',
            fontWeight: 530,
          }}
        >
          {meta.welcome.subText}
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
            border: 'none',
            fontWeight: 600,
            cursor: 'pointer',
            transition: 'all 0.3s ease',
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
          {meta.cta}
        </motion.button>
      </div>
    </section>
  );
}
