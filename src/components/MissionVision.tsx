'use client';
import missionVision from '@/data/missionVision.json';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function MissionVision() {
  const { ref, inView } = useInView({ triggerOnce: false });

  return (
    <section ref={ref} className="px-6 py-20 bg-yellow-400">
      <h2 className="text-4xl font-bold text-center text-purple-700 mb-4">{missionVision.heading}</h2>
      <p className="text-orange-600 text-center mb-12">{missionVision.subtext}</p>

      <div className="flex flex-col md:flex-row gap-6 justify-center">
        {missionVision.cards.map((card, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-xl shadow p-6 flex-1 text-center"
          >
            <h3 className="text-purple-700 font-bold text-xl mb-2">{card.title}</h3>
            <p className="text-gray-700">{card.text}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
