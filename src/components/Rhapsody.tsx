'use client';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import rhapsodyData from '@/data/rhapsody.json';

export default function Rhapsody() {
  const { ref, inView } = useInView({ triggerOnce: false });

  return (
    <section ref={ref} className="px-6 py-20 bg-purple-900 text-white">
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="text-4xl font-bold text-center mb-6"
      >
        {rhapsodyData.title}
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ delay: 0.3 }}
        className="text-center italic mb-12"
      >
        {rhapsodyData.content}
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ delay: 0.6 }}
        className="max-w-xl mx-auto bg-black rounded-xl p-6 text-center"
      >
        <h3 className="font-bold text-xl mb-2">{rhapsodyData.prayer.title}</h3>
        <p className="mb-2">{rhapsodyData.prayer.subtitle}</p>
        <p className="text-sm">{rhapsodyData.prayer.text}</p>
      </motion.div>
    </section>
  );
}
