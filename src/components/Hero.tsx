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
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      <div className="relative z-10 px-6 max-w-5xl">
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold text-white mb-4 leading-tight"
        >
          {metaData.hero}
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
          className="text-[#5856d6] text-lg sm:text-xl md:text-2xl mb-8 font-semibold"
        >
          {metaData.welcome.subText}
        </motion.p>

        {/* Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.7 }}
        >
          <button className="bg-[#5856d6] text-white font-semibold px-8 py-4 rounded-full shadow-lg hover:bg-[#4846b3] transition-all duration-300">
            {metaData.welcome.cta}
          </button>
        </motion.div>
      </div>
    </section>
  );
}