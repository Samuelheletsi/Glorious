'use client';
import { useParams, useRouter } from 'next/navigation';
import eventsData from '@/data/events.json';
import { motion } from 'framer-motion';
import QRCode from 'qrcode.react';
import Link from 'next/link';

export default function EventDetail() {
  const { id } = useParams();
  const router = useRouter();
  const event = eventsData.find((e) => e.id === id);

  if (!event) return <div className="mt-24 text-center">Event not found</div>;

  return (
    <div className="max-w-4xl mx-auto p-4 mt-24">
      <button
        className="mb-4 text-[#f5d46b]"
        onClick={() => router.back()}
      >
        ← Back
      </button>

      <motion.h1
        className="text-3xl font-bold mb-4"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
      >
        {event.title}
      </motion.h1>

      <p className="mb-4">{event.description}</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        {event.images.map((img, idx) => (
          <motion.img
            key={idx}
            src={img}
            alt={event.title}
            className="rounded shadow"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false }}
          />
        ))}
      </div>

      {event.videos.map((video, idx) => (
        <div key={idx} className="mb-4">
          <iframe
            className="w-full h-64 md:h-96 rounded"
            src={video}
            title={`video-${idx}`}
            allowFullScreen
          />
        </div>
      ))}

      <div className="mt-6">
        <h2 className="font-bold text-xl mb-2">Event QR Code</h2>
        <QRCode value={`https://royaltieschurch.com/events/${event.id}`} />
      </div>
    </div>
  );
}
