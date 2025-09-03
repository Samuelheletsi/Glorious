'use client';
import { motion } from 'framer-motion';

const notifications = [
  { id: '1', message: 'Youth Conference next Saturday!' },
  { id: '2', message: 'New program uploaded in gallery.' },
  { id: '3', message: 'Special prayer meeting tomorrow.' }
];

export default function NotificationsPage() {
  return (
    <div className="max-w-4xl mx-auto p-4 mt-24">
      <h2 className="text-3xl font-bold text-[#f5d46b] mb-6">Notifications</h2>
      <div className="space-y-4">
        {notifications.map((n) => (
          <motion.div
            key={n.id}
            className="bg-[#0b1a33] text-white p-4 rounded shadow"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
          >
            {n.message}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
