'use client';
import events from '@/data/events.json';
import EventCard from './EventCard';
import { Event } from '@/types';

export default function Events() {
  return (
    <section className="py-12 text-center">
      <h2 className="text-3xl font-bold">What’s Happening</h2>
      <p className="text-gray-600">Key activities happening this week/month</p>

      <div className="grid gap-8 md:grid-cols-3 mt-10 px-6 max-w-6xl mx-auto">
        {(events as Event[]).map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </section>
  );
}
