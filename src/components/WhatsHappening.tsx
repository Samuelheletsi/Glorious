'use client';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import mandates from '@/data/mandates.json';

export default function WhatsHappening() {
  const { ref, inView } = useInView({ triggerOnce: false });

  return (
    <section ref={ref} className="px-6 py-20 bg-white">
      <h2 className="text-4xl font-bold text-center mb-4">What’s Happening</h2>
      <p className="text-gray-500 text-center mb-12">Key activities for the week or month</p>

      <div className="flex flex-col md:flex-row gap-6 justify-center">
        {mandates.map((m) => (
          <motion.div
            key={m.id}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-xl shadow p-6 flex-1"
          >
            <img src={m.image} alt={m.title} className="rounded-xl mb-4 w-full h-48 object-cover" />
            <h3 className="text-xl font-bold text-black">{m.title}</h3>
            <p className="text-gray-700 mt-2">{m.description}</p>
            <button className="bg-purple-700 text-white px-4 py-2 mt-4 rounded hover:underline">
              Be Involved
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
