import React from 'react';
import { TravelEvent } from '../types';
import { Calendar, MapPin, Link as LinkIcon } from 'lucide-react';

interface ListViewProps {
  events: TravelEvent[];
  onEventClick: (event: TravelEvent) => void;
}

export function ListView({ events, onEventClick }: ListViewProps) {
  const sortedEvents = [...events].sort((a, b) => a.startDate.getTime() - b.startDate.getTime());

  return (
    <div className="bg-white rounded-lg shadow">
      <div className="p-4 border-b">
        <h2 className="text-lg font-semibold">Trip Timeline</h2>
      </div>
      <div className="divide-y">
        {sortedEvents.map((event) => (
          <div
            key={event.id}
            onClick={() => onEventClick(event)}
            className="p-4 hover:bg-gray-50 cursor-pointer"
          >
            <div className="flex justify-between items-start">
              <div className="flex-1">
                <h3 className="font-medium text-lg">{event.title}</h3>
                <div className="mt-1 space-y-1">
                  <div className="flex items-center text-sm text-gray-600">
                    <Calendar className="w-4 h-4 mr-2" />
                    {new Date(event.startDate).toLocaleDateString()}
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <MapPin className="w-4 h-4 mr-2" />
                    {event.location.description}
                  </div>
                  {event.links && event.links.length > 0 && (
                    <div className="flex items-center text-sm text-gray-600">
                      <LinkIcon className="w-4 h-4 mr-2" />
                      {event.links.length} link(s)
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}