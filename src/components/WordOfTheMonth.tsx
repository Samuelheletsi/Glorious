'use client';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import metaData from '@/data/meta.json';

export default function WordOfTheMonth() {
  const { ref, inView } = useInView({ triggerOnce: false });

  return (
    <section ref={ref} className="flex flex-col md:flex-row items-center px-6 py-20 gap-8 bg-white dark:bg-[#0b1a33]">
      <motion.img
        src="/images/pastor_chris.jpg"
        alt="Word of the Month"
        className="w-64 h-64 object-cover rounded-xl border-4 border-purple-700"
        initial={{ opacity: 0, x: -50 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.8 }}
      />
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="flex flex-col gap-4"
      >
        <h2 className="text-3xl font-bold text-black dark:text-white">Word of the Month</h2>
        <p className="text-gray-700 dark:text-gray-300">{metaData.wordOfTheMonth.description}</p>
        <button className="bg-purple-700 text-white px-6 py-2 rounded hover:underline w-max">
          Watch Now
        </button>
      </motion.div>
    </section>
  );
}
