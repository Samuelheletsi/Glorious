'use client';
import Link from 'next/link';
import { Event } from '@/types';
import { motion } from 'framer-motion';

export default function EventCard({ event }: { event: Event }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: false }}
      className="shadow-lg rounded-2xl p-5 bg-white text-left flex flex-col"
    >
      <img
        src={event.images[0]}
        alt={event.title}
        className="rounded-xl w-full mb-4"
      />
      <h3 className="text-xl font-semibold">{event.title}</h3>
      <Link
        href="#"
        className="text-primaryPurple font-bold block mt-2 hover:underline"
      >
        {event.description}
      </Link>
      <p className="mt-2 text-gray-600">{event.date}</p>
      <button className="btn btn-purple mt-4">Be Involved</button>
    </motion.div>
  );
}
