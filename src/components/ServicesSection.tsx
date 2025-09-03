'use client';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';


interface Service {
  id: string;
  title: string;
  description: string;
  date: string;
  location: string;
  image: string;
}

export default function ServicesSection() {
  const [services, setServices] = useState<Service[]>([]);

  useEffect(() => {
    // Dynamically import the JSON
    import('../data/service.json').then(module => setServices(module.default));
  }, []);

  return (
    <section className="max-w-6xl mx-auto py-16 px-4">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold">Experience Our Services</h2>
        <p className="text-gray-600 mt-2">
          Join us in person or online. A powerful experience awaits you.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={service.id}
            className="bg-white rounded-xl shadow p-6 flex flex-col"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
          >
            <img
              src={service.image}
              alt={service.title}
              className="rounded-t-xl object-cover w-full h-52"
            />
            <h3 className="mt-4 text-xl font-semibold">{service.title}</h3>
            <p className="text-primaryPurple font-bold">{service.date}</p>
            <p className="text-gray-500 mt-2 flex-1">{service.description}</p>
            <button className="mt-4 text-white bg-lightPurple rounded px-4 py-2 hover:bg-yellow-400 transition">
              Reach Us →
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
