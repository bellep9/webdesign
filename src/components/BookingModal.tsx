import { useState } from 'react';
import { X, Ticket } from 'lucide-react';
import { Event } from '../App';

interface BookingModalProps {
  event: Event;
  onClose: () => void;
  onBook: (userName: string, userEmail: string, seatsBooked: number) => void;
}

export function BookingModal({ event, onClose, onBook }: BookingModalProps) {
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [seatsBooked, setSeatsBooked] = useState(1);
  const [errors, setErrors] = useState<{ name?: string; email?: string; seats?: string }>({});

  const validateForm = () => {
    const newErrors: { name?: string; email?: string; seats?: string } = {};

    if (!userName.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!userEmail.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(userEmail)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (seatsBooked < 1) {
      newErrors.seats = 'Please select at least 1 seat';
    } else if (seatsBooked > event.seats_available) {
      newErrors.seats = `Only ${event.seats_available} seats available`;
    } else if (seatsBooked > 10) {
      newErrors.seats = 'Maximum 10 seats per booking';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      onBook(userName, userEmail, seatsBooked);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
        <div className="bg-[#7a9871] p-6 relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white hover:bg-white/20 rounded-full p-1 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
          
          <div className="flex items-center gap-3 mb-2">
            <Ticket className="w-8 h-8 text-[#f4e8d0]" />
            <h2 className="text-white">Book Your Tickets</h2>
          </div>
          <p className="text-[#e8f5e3]">{event.title}</p>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-5">
          <div>
            <label htmlFor="name" className="block text-[#4a6741] mb-2">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              className="w-full px-4 py-2 border-2 border-[#c8dcc0] rounded-lg focus:outline-none focus:border-[#7a9871] transition-colors"
              placeholder="Enter your name"
            />
            {errors.name && (
              <p className="text-red-600 mt-1">{errors.name}</p>
            )}
          </div>

          <div>
            <label htmlFor="email" className="block text-[#4a6741] mb-2">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              value={userEmail}
              onChange={(e) => setUserEmail(e.target.value)}
              className="w-full px-4 py-2 border-2 border-[#c8dcc0] rounded-lg focus:outline-none focus:border-[#7a9871] transition-colors"
              placeholder="your.email@example.com"
            />
            {errors.email && (
              <p className="text-red-600 mt-1">{errors.email}</p>
            )}
          </div>

          <div>
            <label htmlFor="seats" className="block text-[#4a6741] mb-2">
              Number of Seats
            </label>
            <input
              type="number"
              id="seats"
              min="1"
              max={Math.min(event.seats_available, 10)}
              value={seatsBooked}
              onChange={(e) => setSeatsBooked(parseInt(e.target.value) || 1)}
              className="w-full px-4 py-2 border-2 border-[#c8dcc0] rounded-lg focus:outline-none focus:border-[#7a9871] transition-colors"
            />
            <p className="text-[#6b8464] mt-1">
              {event.seats_available} seats available
            </p>
            {errors.seats && (
              <p className="text-red-600 mt-1">{errors.seats}</p>
            )}
          </div>

          <div className="bg-[#e8f5e3] rounded-lg p-4 border-2 border-[#c8dcc0]">
            <div className="flex justify-between items-center mb-2">
              <span className="text-[#4a6741]">Movie:</span>
              <span className="text-[#6b8464]">{event.title}</span>
            </div>
            <div className="flex justify-between items-center mb-2">
              <span className="text-[#4a6741]">Date:</span>
              <span className="text-[#6b8464]">
                {new Date(event.date).toLocaleDateString('en-US', { 
                  weekday: 'long', 
                  month: 'long', 
                  day: 'numeric',
                  year: 'numeric'
                })}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-[#4a6741]">Seats:</span>
              <span className="text-[#6b8464]">{seatsBooked}</span>
            </div>
          </div>

          <div className="flex gap-3">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 py-3 px-4 rounded-full border-2 border-[#c8dcc0] text-[#6b8464] hover:bg-[#f5f5f5] transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 py-3 px-4 rounded-full bg-[#7a9871] text-white hover:bg-[#6b8464] transition-colors"
            >
              Confirm Booking
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
