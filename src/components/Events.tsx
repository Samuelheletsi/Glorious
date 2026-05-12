'use client';
import events from '@/data/events.json';
import EventCard from './EventCard';
import { Event } from '@/types';

export default function Events() {
  return (
    <section style={{ padding: '3rem 1rem', textAlign: 'center' }}>
      <h2 style={{ fontSize: '1.875rem', fontWeight: 'bold' }}>
        What’s Happening
      </h2>
      <p style={{ color: '#4b5563', marginTop: '0.5rem' }}>
        Key activities happening this week/month
      </p>

      <div style={{ display: 'grid', gap: '2rem', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', marginTop: '2.5rem', padding: '0 1.5rem', maxWidth: '72rem', marginLeft: 'auto', marginRight: 'auto' }}>
        {(events as Event[]).map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </section>
  );
}
