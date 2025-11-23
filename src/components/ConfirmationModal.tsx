import { CheckCircle, X, Ticket } from 'lucide-react';
import { Booking } from '../App';

interface ConfirmationModalProps {
  booking: Booking;
  onClose: () => void;
}

export function ConfirmationModal({ booking, onClose }: ConfirmationModalProps) {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full">
        <div className="bg-gradient-to-br from-[#7a9871] to-[#6b8464] p-6 relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white hover:bg-white/20 rounded-full p-1 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
          
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-4">
              <CheckCircle className="w-10 h-10 text-[#f4e8d0]" />
            </div>
            <h2 className="text-white mb-2">Booking Confirmed!</h2>
            <p className="text-[#e8f5e3]">Your magical journey awaits</p>
          </div>
        </div>

        <div className="p-6">
          <div className="bg-[#e8f5e3] rounded-xl p-5 mb-6 border-2 border-[#c8dcc0]">
            <div className="flex items-center gap-2 mb-4 pb-4 border-b border-[#c8dcc0]">
              <Ticket className="w-5 h-5 text-[#7a9871]" />
              <span className="text-[#4a6741]">Booking ID: #{booking.booking_id}</span>
            </div>
            
            <div className="space-y-3">
              <div>
                <div className="text-[#8a9a84] mb-1">Guest Name</div>
                <div className="text-[#4a6741]">{booking.user_name}</div>
              </div>
              
              <div>
                <div className="text-[#8a9a84] mb-1">Email</div>
                <div className="text-[#4a6741]">{booking.user_email}</div>
              </div>
              
              <div>
                <div className="text-[#8a9a84] mb-1">Movie</div>
                <div className="text-[#4a6741]">{booking.event_title}</div>
              </div>
              
              <div>
                <div className="text-[#8a9a84] mb-1">Date</div>
                <div className="text-[#4a6741]">
                  {new Date(booking.date).toLocaleDateString('en-US', { 
                    weekday: 'long', 
                    month: 'long', 
                    day: 'numeric',
                    year: 'numeric'
                  })}
                </div>
              </div>
              
              <div>
                <div className="text-[#8a9a84] mb-1">Number of Seats</div>
                <div className="text-[#4a6741]">{booking.seats_booked}</div>
              </div>
            </div>
          </div>

          <div className="bg-[#f4e8d0]/30 rounded-lg p-4 mb-6 border border-[#f4e8d0]">
            <p className="text-[#6b8464] text-center">
              A confirmation email has been sent to <span className="text-[#4a6741]">{booking.user_email}</span>
            </p>
          </div>

          <button
            onClick={onClose}
            className="w-full py-3 px-4 rounded-full bg-[#7a9871] text-white hover:bg-[#6b8464] transition-colors"
          >
            Book More Tickets
          </button>
        </div>
      </div>
    </div>
  );
}
