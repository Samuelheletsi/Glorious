'use client';
import branches from '@/data/branches.json';
import BranchesMap from '@/components/BranchesMap';

export default function BranchesPage() {
  return (
    <div className="max-w-7xl mx-auto p-4 mt-24">
      <h2 className="text-3xl font-bold text-[#f5d46b] mb-6">Our Branches</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        {branches.map((b) => (
          <div key={b.id} className="bg-[#0b1a33] text-white p-4 rounded shadow">
            <h3 className="font-bold text-xl mb-2">{b.name}</h3>
            <p>{b.blurb}</p>
          </div>
        ))}
      </div>

      <h3 className="font-bold text-2xl text-[#f5d46b] mb-2">Map</h3>
      <BranchesMap />
    </div>
  );
}
