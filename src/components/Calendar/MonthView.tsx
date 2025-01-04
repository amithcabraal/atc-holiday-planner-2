import React, { useState, useEffect } from 'react';
import { TravelEvent } from '../../types';
import { CalendarHeader } from './CalendarHeader';
import { CalendarGrid } from './CalendarGrid';
import { getDaysInMonth, getFirstDayOfMonth } from '../../utils/dateUtils';

interface MonthViewProps {
  events: TravelEvent[];
  onEventClick: (event: TravelEvent) => void;
  initialDate?: Date;
}

export function MonthView({ events, onEventClick, initialDate }: MonthViewProps) {
  // Initialize with the month of the first event, or today if no events
  const [currentDate, setCurrentDate] = useState(() => {
    if (initialDate) return initialDate;
    if (events.length > 0) {
      const firstEvent = [...events].sort((a, b) => 
        a.startDate.getTime() - b.startDate.getTime()
      )[0];
      return new Date(firstEvent.startDate);
    }
    return new Date();
  });

  const firstDay = getFirstDayOfMonth(currentDate);
  const daysInMonth = getDaysInMonth(currentDate);

  const handlePreviousMonth = () => {
    setCurrentDate(prev => new Date(prev.getFullYear(), prev.getMonth() - 1, 1));
  };

  const handleNextMonth = () => {
    setCurrentDate(prev => new Date(prev.getFullYear(), prev.getMonth() + 1, 1));
  };

  return (
    <div className="bg-white rounded-lg shadow">
      <CalendarHeader 
        currentDate={currentDate}
        onPreviousMonth={handlePreviousMonth}
        onNextMonth={handleNextMonth}
      />
      <CalendarGrid 
        firstDay={firstDay}
        daysInMonth={daysInMonth}
        events={events}
        currentDate={currentDate}
        onEventClick={onEventClick}
      />
    </div>
  );
}