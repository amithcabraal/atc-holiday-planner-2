import React from 'react';
import { TravelEvent } from '../../types';
import { Clock, MapPin } from 'lucide-react';

interface CalendarDayProps {
  day: { date: Date; events: TravelEvent[] } | null;
  onEventClick: (event: TravelEvent) => void;
}

export function CalendarDay({ day, onEventClick }: CalendarDayProps) {
  if (!day) {
    return <div className="bg-gray-50 h-32 p-2" />;
  }

  const { date, events } = day;
  const isToday = new Date().toDateString() === date.toDateString();

  return (
    <div className={`bg-white h-32 p-2 ${isToday ? 'bg-blue-50' : ''}`}>
      <div className={`text-sm mb-1 ${isToday ? 'font-bold text-blue-600' : 'text-gray-500'}`}>
        {date.getDate()}
      </div>
      <div className="space-y-1 overflow-y-auto max-h-24">
        {events.map(event => (
          <button
            key={event.id}
            onClick={() => onEventClick(event)}
            className="w-full text-left p-1 rounded text-xs hover:bg-gray-100 group"
          >
            <div className="flex items-center space-x-1">
              <Clock className="w-3 h-3 text-gray-500" />
              <span className="font-medium truncate">
                {event.title}
              </span>
            </div>
            <div className="flex items-center space-x-1 text-gray-500">
              <MapPin className="w-3 h-3" />
              <span className="truncate">{event.location.description}</span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}