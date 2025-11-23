import { useState, useEffect } from 'react';
import { Calendar, Users } from 'lucide-react';
import { Event } from '../App';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { unsplash_tool } from '../utils/unsplash';

interface EventCardProps {
  event: Event;
  onSelect: () => void;
}

export function EventCard({ event, onSelect }: EventCardProps) {
  const [imageUrl, setImageUrl] = useState<string>(event.image);

  useEffect(() => {
    // If the image is not already a URL (i.e., it's a search query), fetch from Unsplash
    if (!event.image.startsWith('http') && !event.image.startsWith('figma:') && !event.image.startsWith('/')) {
      unsplash_tool(event.image).then(url => setImageUrl(url));
    } else {
      setImageUrl(event.image);
    }
  }, [event.image]);

  const isLowAvailability = event.seats_available < event.seats_total * 0.3;
  const isSoldOut = event.seats_available === 0;

  return (
    <div className="bg-white rounded-2xl shadow-sm overflow-hidden hover:shadow-lg transition-shadow border-2 border-[#c8dcc0]">
      <div className="aspect-[3/4] overflow-hidden bg-[#e8f5e3]">
        <ImageWithFallback
          src={imageUrl}
          alt={event.title}
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="p-5">
        <div className="mb-3">
          <h3 className="text-[#4a6741] mb-1 line-clamp-2">{event.title}</h3>
          <p className="text-[#8a9a84]">({event.year})</p>
        </div>
        
        <div className="space-y-2 mb-4">
          <div className="flex items-center gap-2 text-[#6b8464]">
            <Calendar className="w-4 h-4" />
            <span>{new Date(event.date).toLocaleDateString('en-US', { 
              weekday: 'short', 
              month: 'short', 
              day: 'numeric',
              year: 'numeric'
            })}</span>
          </div>
          
          <div className="flex items-center gap-2 text-[#6b8464]">
            <Users className="w-4 h-4" />
            <span>
              {event.seats_available} / {event.seats_total} seats available
            </span>
          </div>
        </div>

        {isLowAvailability && !isSoldOut && (
          <div className="mb-3 px-3 py-1 bg-[#f4e8d0] rounded-full text-center">
            <span className="text-[#8a6b3d]">Limited Seats!</span>
          </div>
        )}

        {isSoldOut ? (
          <button
            disabled
            className="w-full py-2 px-4 rounded-full bg-[#d4d4d4] text-[#888888] cursor-not-allowed"
          >
            Sold Out
          </button>
        ) : (
          <button
            onClick={onSelect}
            className="w-full py-2 px-4 rounded-full bg-[#7a9871] text-white hover:bg-[#6b8464] transition-colors"
          >
            Book Tickets
          </button>
        )}
      </div>
    </div>
  );
}