'use client';
import { useEffect, useState, useRef } from 'react';
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
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    import('../data/service.json').then((module) => setServices(module.default));

    const handleResize = () => setIsLargeScreen(window.innerWidth >= 1024);
    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  return (
    <section
      style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '4rem 1rem',
        position: 'relative',
        overflowX: 'hidden', // ✅ prevent whole page stretching
      }}
    >
      {/* Heading */}
      <div
        style={{
          marginBottom: '2rem',
          color: '#1e293b',
        }}
      >
        <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold' }}>Experience Our Services</h2>
        <p style={{ color: '#4b5563', marginTop: '0.5rem', fontSize: '1.2rem' }}>
          Join us in person or online. A powerful experience awaits you.
        </p>
      </div>

      {/* Scroll buttons (only for mobile/tablet) */}
      {!isLargeScreen && (
        <>
          <button
            onClick={scrollLeft}
            style={{
              position: 'absolute',
              left: '0.5rem',
              top: '50%',
              transform: 'translateY(-50%)',
              backgroundColor: 'rgba(107,33,168,0.7)',
              color: '#fff',
              border: 'none',
              borderRadius: '50%',
              width: '2.5rem',
              height: '2.5rem',
              cursor: 'pointer',
              fontSize: '1.5rem',
              fontWeight: 'bold',
              zIndex: 10,
            }}
          >
            ‹
          </button>
          <button
            onClick={scrollRight}
            style={{
              position: 'absolute',
              right: '0.5rem',
              top: '50%',
              transform: 'translateY(-50%)',
              backgroundColor: 'rgba(107,33,168,0.7)',
              color: '#fff',
              border: 'none',
              borderRadius: '50%',
              width: '2.5rem',
              height: '2.5rem',
              cursor: 'pointer',
              fontSize: '1.5rem',
              fontWeight: 'bold',
              zIndex: 10,
            }}
          >
            ›
          </button>
        </>
      )}

      {/* Cards container */}
      <div
        ref={scrollRef}
        style={{
          display: isLargeScreen ? 'grid' : 'flex',
          gridTemplateColumns: isLargeScreen ? `repeat(${services.length}, 1fr)` : undefined,
          gap: '2rem',
          overflowX: isLargeScreen ? 'visible' : 'auto',
          padding: '1rem 0',
          scrollSnapType: isLargeScreen ? 'none' : 'x mandatory',
          WebkitOverflowScrolling: 'touch',
          maxWidth: '100%',
          boxSizing: 'border-box',
          msOverflowStyle: 'none', // ✅ hide scrollbar IE/Edge
          scrollbarWidth: 'none', // ✅ hide scrollbar Firefox
        }}
      >
        {/* ✅ hide scrollbar Chrome/Safari */}
        <style jsx>{`
          div::-webkit-scrollbar {
            display: none;
          }
        `}</style>

        {services.map((service, index) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            style={{
              width: isLargeScreen ? '100%' : '280px',
              flex: isLargeScreen ? '1 0 auto' : '0 0 auto',
              backgroundColor: '#fff',
              borderRadius: '1rem',
              boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
              display: 'flex',
              flexDirection: 'column',
              overflow: 'hidden',
              scrollSnapAlign: 'start',
            }}
          >
            <img
              src={service.image}
              alt={service.title}
              style={{
                width: '100%',
                height: '180px',
                objectFit: 'cover',
                borderTopLeftRadius: '1rem',
                borderTopRightRadius: '1rem',
              }}
            />
            <div
              style={{
                padding: '1rem 1rem 1.5rem',
                display: 'flex',
                flexDirection: 'column',
                flex: 1,
              }}
            >
              <h3
                style={{
                  marginTop: '1rem',
                  fontSize: '1.2rem',
                  fontWeight: '600',
                  marginBottom: 0,
                }}
              >
                {service.title}
              </h3>
              <p style={{ color: '#6b21a8', fontWeight: 'bold', margin: 0 }}>{service.date}</p>
              <p style={{ color: '#4b5563', marginTop: '0.1rem', flex: 1 }}>{service.description}</p>
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
                  alignSelf: 'flex-start',
                }}
                onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#facc15')}
                onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#a78bfa')}
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
