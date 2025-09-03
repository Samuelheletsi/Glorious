'use client';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import rhapsodyData from '@/data/rhapsody.json';

export default function Rhapsody() {
  const { ref, inView } = useInView({ triggerOnce: false });

  return (
    <section className="bg-[#3F318F] text-white px-6 py-20" ref={ref}>
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="text-3xl sm:text-4xl font-extrabold text-center mb-6"
      >
        {rhapsodyData.title}
      </motion.h2>

      {/* Content */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ delay: 0.3 }}
        className="max-w-3xl mx-auto text-center text-base sm:text-lg mb-16"
      >
        {rhapsodyData.content}
      </motion.p>

      {/* Prayer Box */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ delay: 0.6 }}
        className="max-w-3xl mx-auto bg-[#1D1D1D] rounded-3xl p-8 text-center"
      >
        <h3 className="text-2xl font-semibold mb-3">{rhapsodyData.prayer.title}</h3>
        <p className="text-lg mb-3">{rhapsodyData.prayer.subtitle}</p>
        <p className="text-sm sm:text-base leading-relaxed">{rhapsodyData.prayer.text}</p>
      </motion.div>
    </section>
  );
}