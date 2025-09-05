'use client';
import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';

interface Event {
  id: string;
  title: string;
  description: string;
  image: string;
}

export default function WhatsHappeningSection() {
  const [events, setEvents] = useState<Event[]>([]);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    import('../data/mandates.json').then((module) => setEvents(module.default));

    const handleResize = () => setIsLargeScreen(window.innerWidth >= 1024);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const scrollLeft = () => scrollRef.current?.scrollBy({ left: -300, behavior: 'smooth' });
  const scrollRight = () => scrollRef.current?.scrollBy({ left: 300, behavior: 'smooth' });

  return (
    <section
      style={{
        backgroundColor: '#f9fafb',
        padding: '4rem 0',
        display: 'flex',
        justifyContent: 'center',
        overflowX: 'hidden',
      }}
    >
      <div style={{ maxWidth: '1100px', width: '100%', padding: '0 1rem', position: 'relative' }}>
        {/* Heading */}
        <div style={{ marginBottom: '2rem', color: '#1e293b', textAlign: 'center' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '0.5rem' }}>
            What's Happening
          </h2>
          <p style={{ color: '#6b7280', fontSize: '1rem' }}>
            Key activities happening this week/month
          </p>
        </div>

        {/* Scroll buttons for mobile/tablet */}
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
            gridTemplateColumns: isLargeScreen ? `repeat(${events.length}, 1fr)` : undefined,
            gap: '2rem',
            overflowX: isLargeScreen ? 'visible' : 'auto',
            padding: '1rem 0',
            scrollSnapType: isLargeScreen ? 'none' : 'x mandatory',
            WebkitOverflowScrolling: 'touch',
            msOverflowStyle: 'none',
            scrollbarWidth: 'none',
          }}
        >
          <style jsx>{`
            div::-webkit-scrollbar {
              display: none;
            }
          `}</style>

          {events.map((event, index) => (
            <motion.div
              key={event.id}
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
                src={event.image}
                alt={event.title}
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
                  padding: '1rem',
                  display: 'flex',
                  flexDirection: 'column',
                  flex: 1,
                }}
              >
                <h3 style={{ fontSize: '1.2rem', fontWeight: 600, marginBottom: '0.5rem' }}>
                  {event.title}
                </h3>
                <p style={{ color: '#4b5563', flex: 1, marginBottom: '1rem' }}>
                  {event.description}
                </p>
                <button
                  style={{
                    padding: '0.5rem 1.25rem',
                    backgroundColor: '#a78bfa',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '0.5rem',
                    cursor: 'pointer',
                    fontWeight: 600,
                    alignSelf: 'flex-start',
                    transition: 'background-color 0.3s ease',
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
      </div>
    </section>
  );
}
