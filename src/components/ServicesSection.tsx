'use client';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface Service {
  id: string;
  title: string;
  description: string;
  date: string;
  location: string;
  image: string;
}

export default function ServicesSection() {
  const [services, setServices] = useState<Service[]>([]);

  useEffect(() => {
    import('../data/service.json').then((module) => setServices(module.default));
  }, []);

  return (
    <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '4rem 1rem' }}>
      {/* Heading */}
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold' }}>
          Experience Our Services
        </h2>
        <p style={{ color: '#4b5563', marginTop: '0.5rem', fontSize: '1rem' }}>
          Join us in person or online. A powerful experience awaits you.
        </p>
      </div>

      {/* Services Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '2rem',
        }}
      >
        {services.map((service, index) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            style={{
              backgroundColor: '#fff',
              borderRadius: '1rem',
              boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
              display: 'flex',
              flexDirection: 'column',
              overflow: 'hidden',
            }}
          >
            <img
              src={service.image}
              alt={service.title}
              style={{ width: '100%', height: '208px', objectFit: 'cover' }}
            />
            <div style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
              <h3 style={{ marginTop: '1rem', fontSize: '1.25rem', fontWeight: '600' }}>
                {service.title}
              </h3>
              <p style={{ color: '#6b21a8', fontWeight: 'bold', margin: '0.25rem 0' }}>
                {service.date}
              </p>
              <p style={{ color: '#4b5563', marginTop: '0.5rem', flex: 1 }}>
                {service.description}
              </p>
              <button
                style={{
                  marginTop: '1rem',
                  padding: '0.5rem 1.25rem',
                  backgroundColor: '#a78bfa',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '0.5rem',
                  cursor: 'pointer',
                  fontWeight: 600,
                  transition: 'background 0.3s',
                }}
                onMouseOver={(e) =>
                  (e.currentTarget.style.backgroundColor = '#facc15')
                }
                onMouseOut={(e) =>
                  (e.currentTarget.style.backgroundColor = '#a78bfa')
                }
              >
                Reach Us →
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
