import React from 'react';
import { TravelEvent } from '../../types';
import { CalendarDay } from './CalendarDay';

interface CalendarGridProps {
  firstDay: Date;
  daysInMonth: number;
  events: TravelEvent[];
  currentDate: Date;
  onEventClick: (event: TravelEvent) => void;
}

export function CalendarGrid({ firstDay, daysInMonth, events, currentDate, onEventClick }: CalendarGridProps) {
  const startOffset = firstDay.getDay();
  const days = [];
  
  // Add empty cells for days before the first day of the month
  for (let i = 0; i < startOffset; i++) {
    days.push(null);
  }
  
  // Add cells for each day of the month
  for (let day = 1; day <= daysInMonth; day++) {
    const date = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
    const dayEvents = events.filter(event => {
      const eventDate = new Date(event.startDate);
      return eventDate.getDate() === day && 
             eventDate.getMonth() === date.getMonth() &&
             eventDate.getFullYear() === date.getFullYear();
    });
    days.push({ date, events: dayEvents });
  }

  return (
    <div className="grid grid-cols-7 gap-px bg-gray-200">
      {days.map((day, i) => (
        <CalendarDay 
          key={i}
          day={day}
          onEventClick={onEventClick}
        />
      ))}
    </div>
  );
}