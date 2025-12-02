import { Booking } from '../App';
import { Ticket, Calendar, User } from 'lucide-react';

interface MyTicketsProps {
  bookings: Booking[];
}

export function MyTickets({ bookings }: MyTicketsProps) {
  if (bookings.length === 0) {
    return (
      <main className="container mx-auto px-4 py-12 max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-[#4a6741] mb-4">My Tickets</h2>
          <p className="text-[#6b8464] max-w-2xl mx-auto">
            You haven't booked any tickets yet. Visit the Scheduling page to reserve your seats!
          </p>
        </div>
        <div className="flex flex-col items-center justify-center py-20">
          <Ticket className="w-24 h-24 text-[#8ba884] mb-6" />
          <p className="text-[#6b8464] mb-8">No tickets to display</p>
        </div>
      </main>
    );
  }

  return (
    <main className="container mx-auto px-4 py-12 max-w-7xl">
      <div className="text-center mb-12">
        <h2 className="text-[#4a6741] mb-4">My Tickets</h2>
        <p className="text-[#6b8464] max-w-2xl mx-auto">
          View all your booked Studio Ghibli movie screenings
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {bookings.map((booking) => (
          <div
            key={booking.booking_id}
            className="bg-white rounded-xl shadow-lg p-6 border-2 border-[#8ba884] hover:shadow-xl transition-shadow"
          >
            <div className="flex items-start justify-between mb-4">
              <Ticket className="w-8 h-8 text-[#4a6741]" />
              <span className="text-xs text-[#6b8464] bg-[#e8f5e3] px-3 py-1 rounded-full">
                Booking #{booking.booking_id.toString().slice(-6)}
              </span>
            </div>

            <h3 className="text-[#4a6741] mb-4">{booking.event_title}</h3>

            <div className="space-y-3">
              <div className="flex items-center gap-3 text-[#6b8464]">
                <Calendar className="w-5 h-5 flex-shrink-0" />
                <span>{new Date(booking.date).toLocaleDateString('en-US', {
                  weekday: 'long',
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}</span>
              </div>

              <div className="flex items-center gap-3 text-[#6b8464]">
                <User className="w-5 h-5 flex-shrink-0" />
                <span>{booking.user_name}</span>
              </div>

              <div className="flex items-center gap-3 text-[#6b8464]">
                <Ticket className="w-5 h-5 flex-shrink-0" />
                <span>{booking.seats_booked} {booking.seats_booked === 1 ? 'Ticket' : 'Tickets'}</span>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#d4e7ce]">
              <p className="text-xs text-[#8ba884]">
                Confirmation sent to: {booking.user_email}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <p className="text-[#6b8464] mb-4">
          Total Bookings: {bookings.length} | Total Tickets: {bookings.reduce((sum, b) => sum + b.seats_booked, 0)}
        </p>
      </div>
    </main>
  );
}