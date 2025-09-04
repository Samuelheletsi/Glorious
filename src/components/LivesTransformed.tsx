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
        padding: '5rem 1.5rem',
        backgroundColor: '#f9fafb', // gray-50
      }}
    >
      <h2
        style={{
          fontSize: '2.25rem', // ~text-4xl
          fontWeight: 700,
          textAlign: 'center',
          marginBottom: '1rem',
        }}
      >
        Lives Transformed
      </h2>
      <p
        style={{
          color: '#6b7280', // gray-500
          textAlign: 'center',
          marginBottom: '3rem',
        }}
      >
        Real stories of faith and healing
      </p>

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1.5rem',
          justifyContent: 'center',
        }}
      >
        {testimonies.map((t, i) => (
  <motion.div
    key={i}
    initial={{ opacity: 0, y: 50 }}
    animate={inView ? { opacity: 1, y: 0 } : {}}
    transition={{ duration: 0.8 }}
    className="bg-white rounded-xl shadow p-6 flex-1 flex flex-col items-center"
  >
    <Image
      src={t.image}
      alt={t.text}
      width={300} // adjust
      height={256} // adjust
      className="rounded-xl border-4 border-purple-700 mb-4 object-cover"
    />
    <p className="text-gray-700 text-center">{t.text}</p>
  </motion.div>
))}
      </div>
    </section>
  );
}
