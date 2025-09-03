'use client';
import Link from 'next/link';
import { Event } from '@/types';
import { motion } from 'framer-motion';

export default function EventCard({ event }: { event: Event }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-[#0b1a33] text-white p-4 rounded shadow-lg"
    >
      <img src={event.images[0]} alt={event.title} className="rounded mb-2" />
      <h3 className="font-bold text-xl mb-2">{event.title}</h3>
      <p>{event.date}</p>
      <Link href={`/events/${event.id}`} className="text-[#f5d46b] mt-2 inline-block">
        View Details
      </Link>
    </motion.div>
  );
}
