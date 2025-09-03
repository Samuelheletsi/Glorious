'use client';
import { motion } from 'framer-motion';
import meta from '@/data/meta.json';

export default function Hero() {
  return (
    <section className="h-screen flex flex-col justify-center items-center text-center bg-primaryPurple text-white px-6">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false }}
        className="text-4xl md:text-6xl font-bold"
      >
        {meta.hero}
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="mt-4 text-lg md:text-xl"
      >
        {meta.wordOfTheMonth.description}
      </motion.p>
      <motion.button
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="btn btn-purple mt-6"
      >
        {meta.cta}
      </motion.button>
    </section>
  );
}
