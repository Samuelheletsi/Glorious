'use client';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import rhapsodyData from '@/data/rhapsody.json';

export default function Rhapsody() {
  const { ref, inView } = useInView({ triggerOnce: false });

  return (
    <section
      ref={ref}
      className="bg-primaryPurple text-white py-16 px-6 text-center"
    >
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl font-bold"
      >
        {rhapsodyData.title}
      </motion.h2>

      {/* Main text */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="max-w-3xl mx-auto mt-6 text-lg md:text-xl leading-relaxed text-gray-100"
      >
        {rhapsodyData.description}
      </motion.p>

      {/* Prayer Box */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={inView ? { opacity: 1, scale: 1 } : {}}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="bg-darkBg mt-12 p-8 rounded-2xl max-w-2xl mx-auto shadow-lg"
      >
        <h3 className="text-2xl font-semibold mb-3">
          {rhapsodyData.prayer.title}
        </h3>
        <p className="mb-4">{rhapsodyData.prayer.intro}</p>
        <p className="max-w-xl mx-auto text-base md:text-lg leading-relaxed text-gray-200">
          {rhapsodyData.prayer.text}
        </p>
      </motion.div>
    </section>
  );
}
