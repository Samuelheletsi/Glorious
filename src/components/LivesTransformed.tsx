'use client';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import testimonies from '@/data/testimonies.json';

export default function LivesTransformed() {
  const { ref, inView } = useInView({ triggerOnce: false });

  return (
    <section ref={ref} className="px-6 py-20 bg-gray-50" id='#testimonies'>
      <h2 className="text-4xl font-bold text-center mb-4">Lives Transformed</h2>
      <p className="text-gray-500 text-center mb-12">Real stories of faith and healing</p>

      <div className="flex flex-col md:flex-row gap-6 justify-center">
        {testimonies.map((t, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-xl shadow p-6 flex-1 flex flex-col items-center"
          >
            <img src={t.image} alt={t.text} className="rounded-xl border-4 border-purple-700 mb-4 w-full h-64 object-cover" />
            <p className="text-gray-700 text-center">{t.text}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
