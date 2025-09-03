'use client';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

type PastorProps = {
  image: string;
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
};

export default function PastorSection({ data }: { data: PastorProps }) {
  const { ref, inView } = useInView({ triggerOnce: false });

  return (
    <section
      ref={ref}
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '2rem',
        padding: '5rem 1.5rem',
        alignItems: 'center',
        backgroundColor: '#fff',
        color: '#000',
      }}
    >
      {/* Pastor Image */}
      <motion.img
        src={data.image}
        alt={data.title}
        initial={{ opacity: 0, x: -50 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.8 }}
        style={{
          width: '16rem',
          height: '16rem',
          objectFit: 'cover',
          borderRadius: '1rem',
          border: '4px solid #6b21a8', // purple-700
        }}
      />

      {/* Text Content */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.8 }}
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
          textAlign: 'left',
          maxWidth: '600px',
        }}
      >
        <h2 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '0.5rem' }}>
          {data.title}
        </h2>
        <p style={{ color: '#4b5563' }}>{data.description}</p>
        <a
          href={data.buttonLink}
          style={{
            backgroundColor: '#6b21a8',
            color: '#fff',
            padding: '0.5rem 1.5rem',
            borderRadius: '0.5rem',
            fontWeight: 600,
            border: 'none',
            cursor: 'pointer',
            width: 'max-content',
            textAlign: 'center',
            textDecoration: 'none',
            transition: 'all 0.3s',
          }}
          onMouseOver={(e) => (e.currentTarget.style.textDecoration = 'underline')}
          onMouseOut={(e) => (e.currentTarget.style.textDecoration = 'none')}
        >
          {data.buttonText}
        </a>
      </motion.div>
    </section>
  );
}
