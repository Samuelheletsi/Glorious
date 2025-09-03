'use client';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import events from '@/data/events.json';

export default function Services() {
  const { ref, inView } = useInView({ triggerOnce: false });

  return (
    <section ref={ref} className="px-6 py-20 bg-gray-50" id='#programs'>
      <h2 className="text-4xl font-bold text-center mb-4">Experience Our Services</h2>
      <p className="text-gray-500 text-center mb-12">Join in person or online</p>

      <div className="flex flex-col md:flex-row gap-6 justify-center">
        {events.map((event) => (
          <motion.div
            key={event.id}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-xl shadow p-6 flex-1"
          >
            <img src={event.images[0]} alt={event.title} className="rounded-xl mb-4 w-full h-48 object-cover" />
            <h3 className="text-xl font-bold text-black">{event.title}</h3>
            <p className="text-purple-700 uppercase">{event.date} | {event.location}</p>
            <p className="text-gray-700 mt-2">{event.description}</p>
            <button className="bg-purple-700 text-white px-4 py-2 mt-4 rounded hover:underline">
              Reach Us →
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
