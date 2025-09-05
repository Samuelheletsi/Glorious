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

export default function PastorSection({ data }: { data: PastorProps[] }) {
  const { ref, inView } = useInView({ triggerOnce: false });

  return (
    <div style={{ display: 'block' }} id='pastors'>
      <h2
        style={{
          fontSize: '2rem',
          fontWeight: 700,
          marginBottom: '0.5rem',
          color: '#000',
          textAlign: 'center',
          paddingTop: '3rem',
          paddingRight: '3rem',
        }}
      >
        A Word from our Pastors
      </h2>

      {data.map((pastor, index) => (
        <section
          key={index}
          ref={ref}
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '1rem',
            padding: '0.3rem 2rem',
            alignItems: 'center',
            backgroundColor: '#fff',
            color: '#000',
            marginBottom: '4rem',
          }}
        >
          {/* Pastor Image */}
          <motion.img
            src={pastor.image}
            alt={pastor.title}
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            style={{
              width: '18rem',
              height: '14rem',
              objectFit: 'cover',
              borderRadius: '3rem',
              border: '5px solid #6b21a8',
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
              gap: '0.5rem',
              textAlign: 'left',
              maxWidth: '600px'
            }}
          >
            <p style={{ color: '#4b5563' }}>{pastor.description}</p>
            <a
              href={pastor.buttonLink}
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
                textDecoration: 'underline',
                transition: 'all 0.3s',
              }}
              onMouseOver={(e) =>
                (e.currentTarget.style.textDecoration = 'underline')
              }
              onMouseOut={(e) =>
                (e.currentTarget.style.textDecoration = 'none')
              }
            >
              {pastor.buttonText}
            </a>
          </motion.div>
        </section>
      ))}
    </div>
  );
}
