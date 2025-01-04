import React from 'react';
import { Plane } from 'lucide-react';

interface HeaderProps {
  onAddEventClick: () => void;
}

export function Header({ onAddEventClick }: HeaderProps) {
  return (
    <header className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Plane className="h-8 w-8 text-blue-500 mr-3" />
            <h1 className="text-3xl font-bold text-gray-900">Costa Rica Trip Planner</h1>
          </div>
          <button
            onClick={onAddEventClick}
            className="flex items-center px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            <span className="mr-2">+</span>
            Add Event
          </button>
        </div>
      </div>
    </header>
  );
}