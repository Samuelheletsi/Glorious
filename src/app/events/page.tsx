import eventsData from '@/data/events.json';
import EventCard from '@/components/EventCard';

export default function EventsPage() {
  return (
    <div className="max-w-7xl mx-auto p-4 mt-24">
      <h2 className="text-3xl font-bold text-[#f5d46b] mb-6">Upcoming Events</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {eventsData.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </div>
  );
}
