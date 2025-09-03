'use client';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import metaData from '@/data/meta.json';

export default function Hero() {
  const { ref, inView } = useInView({ triggerOnce: false });

  return (
    <section
      ref={ref}
      className="relative h-screen flex flex-col justify-center items-center text-center bg-cover bg-center"
      style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}
    >
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="relative z-10 px-4">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold text-white mb-4"
        >
          {metaData.hero}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
          className="text-purple-200 mb-6"
        >
          {metaData.welcome.subText}
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.7 }}
        >
          <button className="bg-purple-700 text-white font-semibold px-6 py-3 rounded mr-4 hover:bg-purple-800">
            {metaData.welcome.cta}
          </button>
          <button className="border border-yellow-400 text-yellow-400 font-semibold px-6 py-3 rounded hover:bg-yellow-500">
            {metaData.watchLive}
          </button>
        </motion.div>
      </div>
    </section>
  );
}
