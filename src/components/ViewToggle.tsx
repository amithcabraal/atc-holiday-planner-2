import React from 'react';
import { List, CalendarDays } from 'lucide-react';

interface ViewToggleProps {
  view: 'calendar' | 'list';
  onViewChange: (view: 'calendar' | 'list') => void;
}

export function ViewToggle({ view, onViewChange }: ViewToggleProps) {
  return (
    <div className="flex space-x-2 bg-gray-100 rounded-lg p-1">
      <button
        onClick={() => onViewChange('calendar')}
        className={`flex items-center px-3 py-2 rounded-md ${
          view === 'calendar'
            ? 'bg-white text-blue-600 shadow'
            : 'text-gray-600 hover:text-gray-900'
        }`}
      >
        <CalendarDays className="w-5 h-5 mr-2" />
        Calendar
      </button>
      <button
        onClick={() => onViewChange('list')}
        className={`flex items-center px-3 py-2 rounded-md ${
          view === 'list'
            ? 'bg-white text-blue-600 shadow'
            : 'text-gray-600 hover:text-gray-900'
        }`}
      >
        <List className="w-5 h-5 mr-2" />
        List
      </button>
    </div>
  );
}