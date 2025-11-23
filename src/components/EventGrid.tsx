import { Event } from '../App';
import { EventCard } from './EventCard';

interface EventGridProps {
  events: Event[];
  onSelectEvent: (event: Event) => void;
}

export function EventGrid({ events, onSelectEvent }: EventGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {events.map((event) => (
        <EventCard
          key={event.event_id}
          event={event}
          onSelect={() => onSelectEvent(event)}
        />
      ))}
    </div>
  );
}
