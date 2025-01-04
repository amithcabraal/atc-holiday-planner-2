import React from 'react';
import { TravelEvent } from '../types';
import { MonthView } from './Calendar/MonthView';

interface CalendarProps {
  events: TravelEvent[];
  onEventClick: (event: TravelEvent) => void;
}

export function Calendar({ events, onEventClick }: CalendarProps) {
  // Find the earliest event date
  const initialDate = events.length > 0
    ? [...events].sort((a, b) => a.startDate.getTime() - b.startDate.getTime())[0].startDate
    : new Date();

  return (
    <MonthView 
      events={events}
      onEventClick={onEventClick}
      initialDate={initialDate}
    />
  );
}