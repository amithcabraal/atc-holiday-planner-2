import React from 'react';
import { TravelEvent } from '../../types';
import { MonthView } from './MonthView';

interface CalendarProps {
  events: TravelEvent[];
  onEventClick: (event: TravelEvent) => void;
}

export function Calendar({ events, onEventClick }: CalendarProps) {
  return (
    <MonthView 
      events={events}
      onEventClick={onEventClick}
      currentDate={new Date()}
    />
  );
}