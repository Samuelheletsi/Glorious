'use client';
import testimonies from '@/data/testimonies.json';
import { motion } from 'framer-motion';

export default function TestimoniesPage() {
  return (
    <div className="max-w-7xl mx-auto p-4 mt-24">
      <h2 className="text-3xl font-bold text-[#f5d46b] mb-6">Testimonies</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonies.map((t) => (
          <motion.div
            key={t.id}
            className="bg-[#0b1a33] text-white p-4 rounded shadow-lg"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
          >
            <p className="mb-2">&quot;{t.message}&quot;</p>
            <p className="font-bold">- {t.name}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
