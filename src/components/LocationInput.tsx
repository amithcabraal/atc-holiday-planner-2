import React from 'react';
import { MapPin, Link as LinkIcon } from 'lucide-react';
import { Location } from '../types';

interface LocationInputProps {
  value: Location;
  onChange: (location: Location) => void;
  required?: boolean;
}

export function LocationInput({ value, onChange, required }: LocationInputProps) {
  return (
    <div className="space-y-2">
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Location Description
        </label>
        <div className="mt-1 relative rounded-md shadow-sm">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <MapPin className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            value={value.description}
            onChange={(e) => onChange({ ...value, description: e.target.value })}
            className="block w-full pl-10 rounded-md border-gray-300 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter location description"
            required={required}
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Google Maps URL (optional)
        </label>
        <div className="mt-1 relative rounded-md shadow-sm">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <LinkIcon className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="url"
            value={value.mapsUrl || ''}
            onChange={(e) => onChange({ ...value, mapsUrl: e.target.value })}
            className="block w-full pl-10 rounded-md border-gray-300 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Paste Google Maps link"
          />
        </div>
      </div>
    </div>
  );
}