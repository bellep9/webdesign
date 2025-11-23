import { useState } from 'react';
import { EventGrid } from './components/EventGrid';
import { BookingModal } from './components/BookingModal';
import { ConfirmationModal } from './components/ConfirmationModal';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import nausicaaPoster from 'figma:asset/e88747b3998982d82c896c35a0b5ecc889096555.png';
import castleSkyPoster from 'figma:asset/e88e5cfb3337a900e176c2fd31f2b49988e36c6c.png';
import totoroPoster from 'figma:asset/c6ce9b325f5fa882345aefaefa7df4b4f22fb9cb.png';
import kikiPoster from 'figma:asset/4d38c177c83c6e3e83597a93b7ca689e97e72947.png';

export interface Event {
  event_id: number;
  title: string;
  date: string;
  seats_total: number;
  seats_available: number;
  year: number;
  image: string;
}

export interface Booking {
  booking_id: number;
  user_name: string;
  user_email: string;
  event_id: number;
  event_title: string;
  seats_booked: number;
  date: string;
}

export default function App() {
  const [events, setEvents] = useState<Event[]>([
    { event_id: 1, title: "Nausicaä of the Valley of the Wind", date: "2024-12-15", seats_total: 100, seats_available: 100, year: 1984, image: nausicaaPoster },
    { event_id: 2, title: "Castle in the Sky", date: "2024-12-16", seats_total: 100, seats_available: 100, year: 1986, image: castleSkyPoster },
    { event_id: 3, title: "My Neighbor Totoro", date: "2024-12-17", seats_total: 120, seats_available: 120, year: 1988, image: totoroPoster },
    { event_id: 4, title: "Kiki's Delivery Service", date: "2024-12-18", seats_total: 100, seats_available: 100, year: 1989, image: kikiPoster },
    { event_id: 5, title: "Only Yesterday", date: "2024-12-19", seats_total: 80, seats_available: 80, year: 1991, image: "countryside rural japan" },
    { event_id: 6, title: "Porco Rosso", date: "2024-12-20", seats_total: 90, seats_available: 90, year: 1992, image: "airplane vintage adventure" },
    { event_id: 7, title: "Ocean Waves", date: "2024-12-21", seats_total: 80, seats_available: 80, year: 1993, image: "ocean waves beach" },
    { event_id: 8, title: "Pom Poko", date: "2024-12-22", seats_total: 90, seats_available: 90, year: 1994, image: "nature forest animals" },
    { event_id: 9, title: "Whisper of the Heart", date: "2024-12-23", seats_total: 100, seats_available: 100, year: 1995, image: "tokyo cityscape sunset" },
    { event_id: 10, title: "Princess Mononoke", date: "2024-12-24", seats_total: 120, seats_available: 120, year: 1997, image: "forest spirits nature" },
    { event_id: 11, title: "My Neighbors the Yamadas", date: "2024-12-25", seats_total: 80, seats_available: 80, year: 1999, image: "family home japan" },
    { event_id: 12, title: "Spirited Away", date: "2024-12-26", seats_total: 150, seats_available: 150, year: 2001, image: "bathhouse spirits magical" },
    { event_id: 13, title: "The Cat Returns", date: "2024-12-27", seats_total: 90, seats_available: 90, year: 2002, image: "cats whimsical garden" },
    { event_id: 14, title: "Howl's Moving Castle", date: "2024-12-28", seats_total: 120, seats_available: 120, year: 2004, image: "castle magical fantasy" },
    { event_id: 15, title: "Tales from Earthsea", date: "2024-12-29", seats_total: 90, seats_available: 90, year: 2006, image: "fantasy landscape mountains" },
    { event_id: 16, title: "Ponyo", date: "2024-12-30", seats_total: 100, seats_available: 100, year: 2008, image: "ocean waves magical" },
    { event_id: 17, title: "The Secret World of Arrietty", date: "2024-12-31", seats_total: 100, seats_available: 100, year: 2010, image: "garden nature miniature" },
    { event_id: 18, title: "From Up on Poppy Hill", date: "2025-01-01", seats_total: 90, seats_available: 90, year: 2011, image: "harbor coastal town" },
    { event_id: 19, title: "The Wind Rises", date: "2025-01-02", seats_total: 100, seats_available: 100, year: 2013, image: "airplane sky clouds" },
    { event_id: 20, title: "The Tale of the Princess Kaguya", date: "2025-01-03", seats_total: 100, seats_available: 100, year: 2013, image: "bamboo forest japanese art" },
    { event_id: 21, title: "When Marnie Was There", date: "2025-01-04", seats_total: 90, seats_available: 90, year: 2014, image: "coastal mansion sunset" },
    { event_id: 22, title: "Earwig and the Witch", date: "2025-01-05", seats_total: 80, seats_available: 80, year: 2020, image: "magical house whimsical" },
    { event_id: 23, title: "The Boy and the Heron", date: "2025-01-06", seats_total: 120, seats_available: 120, year: 2023, image: "heron fantasy nature" },
    { event_id: 24, title: "Grave of the Fireflies", date: "2025-01-07", seats_total: 100, seats_available: 100, year: 1988, image: "fireflies night countryside" },
  ]);

  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [confirmation, setConfirmation] = useState<Booking | null>(null);

  const handleBooking = (userName: string, userEmail: string, seatsBooked: number) => {
    if (!selectedEvent) return;

    // Update seats available
    setEvents(events.map(event => 
      event.event_id === selectedEvent.event_id
        ? { ...event, seats_available: event.seats_available - seatsBooked }
        : event
    ));

    // Create booking confirmation
    const booking: Booking = {
      booking_id: Date.now(),
      user_name: userName,
      user_email: userEmail,
      event_id: selectedEvent.event_id,
      event_title: selectedEvent.title,
      seats_booked: seatsBooked,
      date: selectedEvent.date
    };

    setConfirmation(booking);
    setSelectedEvent(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#e8f5e3] to-[#d4e7ce]">
      <Header />
      
      <main className="container mx-auto px-4 py-12 max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-[#4a6741] mb-4">Experience the Magic of Studio Ghibli</h2>
          <p className="text-[#6b8464] max-w-2xl mx-auto">
            Join us for special screenings of beloved Studio Ghibli films. Book your tickets now for an enchanting cinema experience.
          </p>
        </div>

        <EventGrid 
          events={events} 
          onSelectEvent={setSelectedEvent}
        />
      </main>

      <Footer />

      {selectedEvent && (
        <BookingModal
          event={selectedEvent}
          onClose={() => setSelectedEvent(null)}
          onBook={handleBooking}
        />
      )}

      {confirmation && (
        <ConfirmationModal
          booking={confirmation}
          onClose={() => setConfirmation(null)}
        />
      )}
    </div>
  );
}