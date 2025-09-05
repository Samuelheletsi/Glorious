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
        <p
          style={{
            color: '#6b7280',
            fontSize: '1.125rem',
          }}
        >
          Real stories of faith and healing
        </p>
      </div>

      {/* Responsive cards */}
      <div
        style={{
          display: 'flex',
          flexDirection:'column',
          gap: '2rem',
          justifyContent: 'center',
        }}
      >
        {testimonies.map((t, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: i * 0.2, duration: 0.8 }}
            className="card"
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '2rem',
              maxWidth: '100%',
              backgroundColor: '#fff',
               
              
            }}
            whileHover={{ y: -8 }} // card lift
          >
            <div
            
              style={{
                width: '22rem',
                gap:'7rem'
              }}>
                <h2 
                    style={{
                         fontWeight:'700',
                         fontSize:'1.2rem'
                    }}
                >{t.message}</h2>
                   <p
                      style={{
                        color: '#374151',
                        textAlign: 'center',
                        fontSize: '1rem',
                      }}
                    >
                      {t.text}
                   </p>
                   <p
                      style={{
                        color: '#374151',
                        textAlign: 'center',
                        fontSize: '1rem',
                      }}
                    >
                      {t.text2}
                   </p>
            </div>
              
            <div
              className="image-wrapper"
              style={{
                width: '20rem',
                height: '220px',
                overflow: 'hidden',
                borderRadius: '1rem',
                border: '4px solid #6b21a8',
                marginBottom: '1rem',
              }}
            >
              <Image
                src={t.image}
                alt={t.text}
                width={400}
                height={220}
                className="zoom-image"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  transition: 'transform 0.4s ease',
                }}
              />
            </div>
            
          </motion.div>
        ))}
      </div>

      {/* Responsive + Hover styles */}
      <style jsx>{`
        .card:hover {
          box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);
        }
        .card:hover .zoom-image {
          transform: scale(1.08);
        }
        @media (min-width: 640px) {
          .card {
            flex: 1 1 calc(50% - 2rem);
            max-width: calc(50% - 2rem);
          }
        }
        @media (min-width: 1024px) {
          .card {
            flex: 1 1 calc(33.333% - 2rem);
            max-width: calc(33.333% - 2rem);
          }
        }
      `}</style>
    </section>
  );
}
