import React from 'react';
import { MapPin, ExternalLink } from 'lucide-react';
import { Location } from '../types';

interface LocationDisplayProps {
  location: Location;
}

export function LocationDisplay({ location }: LocationDisplayProps) {
  return (
    <div className="space-y-2">
      <div className="flex items-center space-x-2">
        <MapPin className="h-5 w-5 text-gray-500" />
        <span>{location.description}</span>
      </div>
      {location.mapsUrl && (
        <a
          href={location.mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2 text-blue-500 hover:text-blue-600"
        >
          <ExternalLink className="h-4 w-4" />
          <span>View on Google Maps</span>
        </a>
      )}
    </div>
  );
}