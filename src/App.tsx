import { useState } from 'react';
import { Header } from './components/Header';
import { Navigation } from './components/Navigation';
import { HomeSection } from './components/HomeSection';
import { AboutSection } from './components/AboutSection';
import { EventGrid } from './components/EventGrid';
import { BookingModal } from './components/BookingModal';
import { ConfirmationModal } from './components/ConfirmationModal';
import { Footer } from './components/Footer';
import { MyTickets } from './components/MyTickets';
import nausicaaPoster from 'figma:asset/57c3235abf1f2f25b0be89b1f60d2561eda2b256.png';
import castleSkyPoster from 'figma:asset/5c388c83fdbe32f1429167607579ffd05312d90c.png';
import totoroPoster from 'figma:asset/52aad54bbd762a5117ad511f834495cdb46f611d.png';
import kikiPoster from 'figma:asset/d9a86173dcdcb0317afca4a32c9d9904c757ff0b.png';
import onlyYesterdayPoster from 'figma:asset/1084c7afa075aed069df01aa01ca4da5426988fd.png';
import porcoRossoPoster from 'figma:asset/29a53fb5c9c23a0ac5d5366fb48790ee8dd31e4c.png';
import oceanWavesPoster from 'figma:asset/9d857683931486c9d231edf443bb65af00009b30.png';
import pomPokoPoster from 'figma:asset/1c7b70eef03ee883a881c5c1b0cd52ff990c09af.png';
import whisperPoster from 'figma:asset/c31a71fb06582f0696d3ea598a5a7b96604becdf.png';
import mononokePoster from 'figma:asset/c0c63ee08a63a02cd1f5d1ddf97267344a0c53f7.png';
import yamadasPoster from 'figma:asset/8496c0c0985482b76a4fd280519b265c339d2db0.png';
import spiritedAwayPoster from 'figma:asset/2f633257804c459861ecf96bcb4b41fe986c9dae.png';
import catReturnsPoster from 'figma:asset/9e598cbccc4323ff6253ed4ff7b2844cd929adc6.png';
import howlsPoster from 'figma:asset/04736f2cd98891864f5897cc4545c67042b4b7b2.png';
import earthseaPoster from 'figma:asset/c8275d0a59650dca8d30ae3d6fa47b58a3b0ff4d.png';
import ponyoPoster from 'figma:asset/c0ac31fb07f85e96e871fb8d9649d7549580707e.png';
import arriettyPoster from 'figma:asset/b6a485c5d01f44697462d858fa3fba0a249067aa.png';
import poppyHillPoster from 'figma:asset/3ced5535b9d55f1ed0a45dffaad15c782e5d59f5.png';
import windRisesPoster from 'figma:asset/d2e9116b58e35d8a35abf1ab09dbcf3477b15ff9.png';
import kaguyaPoster from 'figma:asset/629dae20b1ec67e55a22e50fa0041205815f8553.png';
import marniePoster from 'figma:asset/3d3ba461c9d8bd3e9166fa3d046ae3f2ac8e91d5.png';
import earwigPoster from 'figma:asset/e4546caad0e42e87e7b9493943abcef9407601dd.png';
import heronPoster from 'figma:asset/2a9bcc8212585d6713a1e727437427469f1b1d53.png';
import firefliesPoster from 'figma:asset/ceaf3d9e1d9eeb9464f8d86f9651a3d453c299ca.png';

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
  const [activeTab, setActiveTab] = useState<'home' | 'about' | 'scheduling' | 'tickets'>('home');
  const [events, setEvents] = useState<Event[]>([
    { event_id: 1, title: "Nausicaä of the Valley of the Wind", date: "2025-12-15", seats_total: 100, seats_available: 100, year: 1984, image: nausicaaPoster as string },
    { event_id: 2, title: "Castle in the Sky", date: "2025-12-16", seats_total: 100, seats_available: 100, year: 1986, image: castleSkyPoster as string },
    { event_id: 3, title: "My Neighbor Totoro", date: "2025-12-17", seats_total: 120, seats_available: 120, year: 1988, image: totoroPoster as string },
    { event_id: 4, title: "Kiki's Delivery Service", date: "2025-12-18", seats_total: 100, seats_available: 100, year: 1989, image: kikiPoster as string },
    { event_id: 5, title: "Only Yesterday", date: "2025-12-19", seats_total: 80, seats_available: 80, year: 1991, image: onlyYesterdayPoster as string },
    { event_id: 6, title: "Porco Rosso", date: "2025-12-20", seats_total: 90, seats_available: 90, year: 1992, image: porcoRossoPoster as string },
    { event_id: 7, title: "Ocean Waves", date: "2025-12-21", seats_total: 80, seats_available: 80, year: 1993, image: oceanWavesPoster as string },
    { event_id: 8, title: "Pom Poko", date: "2025-12-22", seats_total: 90, seats_available: 90, year: 1994, image: pomPokoPoster as string },
    { event_id: 9, title: "Whisper of the Heart", date: "2025-12-23", seats_total: 100, seats_available: 100, year: 1995, image: whisperPoster as string },
    { event_id: 10, title: "Princess Mononoke", date: "2025-12-24", seats_total: 120, seats_available: 120, year: 1997, image: mononokePoster as string },
    { event_id: 11, title: "My Neighbors the Yamadas", date: "2025-12-25", seats_total: 80, seats_available: 80, year: 1999, image: yamadasPoster as string },
    { event_id: 12, title: "Spirited Away", date: "2025-12-26", seats_total: 150, seats_available: 150, year: 2001, image: spiritedAwayPoster as string },
    { event_id: 13, title: "The Cat Returns", date: "2025-12-27", seats_total: 90, seats_available: 90, year: 2002, image: catReturnsPoster as string },
    { event_id: 14, title: "Howl's Moving Castle", date: "2025-12-28", seats_total: 120, seats_available: 120, year: 2004, image: howlsPoster as string },
    { event_id: 15, title: "Tales from Earthsea", date: "2025-12-29", seats_total: 90, seats_available: 90, year: 2006, image: earthseaPoster as string },
    { event_id: 16, title: "Ponyo", date: "2025-12-30", seats_total: 100, seats_available: 100, year: 2008, image: ponyoPoster as string },
    { event_id: 17, title: "The Secret World of Arrietty", date: "2025-12-31", seats_total: 100, seats_available: 100, year: 2010, image: arriettyPoster as string },
    { event_id: 18, title: "From Up on Poppy Hill", date: "2026-01-01", seats_total: 90, seats_available: 90, year: 2011, image: poppyHillPoster as string },
    { event_id: 19, title: "The Wind Rises", date: "2026-01-02", seats_total: 100, seats_available: 100, year: 2013, image: windRisesPoster as string },
    { event_id: 20, title: "The Tale of the Princess Kaguya", date: "2026-01-03", seats_total: 100, seats_available: 100, year: 2013, image: kaguyaPoster as string },
    { event_id: 21, title: "When Marnie Was There", date: "2026-01-04", seats_total: 90, seats_available: 90, year: 2014, image: marniePoster as string },
    { event_id: 22, title: "Earwig and the Witch", date: "2026-01-05", seats_total: 80, seats_available: 80, year: 2020, image: earwigPoster as string },
    { event_id: 23, title: "The Boy and the Heron", date: "2026-01-06", seats_total: 120, seats_available: 120, year: 2023, image: heronPoster as string },
    { event_id: 24, title: "Grave of the Fireflies", date: "2026-01-07", seats_total: 100, seats_available: 100, year: 1988, image: firefliesPoster as string },
  ]);

  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [confirmation, setConfirmation] = useState<Booking | null>(null);
  const [bookings, setBookings] = useState<Booking[]>([]);

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

    // Add booking to bookings array
    setBookings([...bookings, booking]);
    setConfirmation(booking);
    setSelectedEvent(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#e8f5e3] to-[#d4e7ce]">
      <Header />
      <Navigation activeTab={activeTab} onTabChange={setActiveTab} />
      
      {activeTab === 'home' && <HomeSection onTabChange={setActiveTab} />}
      
      {activeTab === 'about' && <AboutSection />}
      
      {activeTab === 'scheduling' && (
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
      )}

      {activeTab === 'tickets' && <MyTickets bookings={bookings} />}

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