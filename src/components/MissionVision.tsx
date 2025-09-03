'use client';
import missionVision from '@/data/missionVision.json';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function MissionVision() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section
      ref={ref}
      className="bg-[#f4b914] py-16 text-center text-[#3b3395] px-6"
    >
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold">
        {missionVision.heading}
      </h2>
      <p className="mt-2 font-medium">{missionVision.subtext}</p>

      {/* Cards */}
      <div className="mt-10 flex flex-col md:flex-row gap-6 max-w-5xl mx-auto">
        {missionVision.cards.map((card, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="bg-white text-[#3b3395] rounded-xl p-6 flex-1 text-left shadow-lg"
          >
            <h3 className="text-xl font-bold mb-3">{card.title}</h3>
            <p className="leading-relaxed">{card.text}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
