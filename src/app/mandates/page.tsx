'use client';
import mandates from '@/data/mandates.json';

export default function MandatesPage() {
  return (
    <div className="max-w-7xl mx-auto p-4 mt-24">
      <h2 className="text-3xl font-bold text-[#f5d46b] mb-6">Church Mandates</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {mandates.map((m) => (
          <div key={m.id} className="bg-[#0b1a33] text-white p-4 rounded shadow-lg">
            <h3 className="font-bold text-xl text-[#f5d46b] mb-2">{m.title}</h3>
            <p>{m.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
