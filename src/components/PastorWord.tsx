'use client';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import metaData from '@/data/meta.json';

export default function PastorWord() {
  const { ref, inView } = useInView({ triggerOnce: false });

  return (
    <section ref={ref} className="flex flex-col md:flex-row items-center px-4 sm:px-6 lg:px-20 py-16 md:py-20 bg-white gap-6 md:gap-12">
      <motion.img
        src="/images/pastor_david.jpg"
        alt={metaData.pastor.name}
        className="w-48 sm:w-56 md:w-64 h-48 sm:h-56 md:h-64 object-cover rounded-xl border-4 border-purple-700"
        initial={{ opacity: 0, x: -50 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.8 }}
      />
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="flex flex-col gap-4 md:ml-6"
      >
        <h2 className="text-2xl sm:text-3xl md:text-3xl font-bold text-black">A Word From Our Pastor</h2>
        <p className="text-gray-700">{metaData.pastor.message}</p>
        <button className="bg-purple-700 text-white px-6 py-2 rounded hover:underline w-max">
          {metaData.pastor.name}
        </button>
      </motion.div>
    </section>


  );
}
