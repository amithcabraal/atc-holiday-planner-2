import React, { useState } from 'react';
import { Calendar } from './components/Calendar';
import { ListView } from './components/ListView';
import { EventForm } from './components/EventForm';
import { EventDetails } from './components/EventDetails';
import { Header } from './components/Header';
import { ViewToggle } from './components/ViewToggle';
import { TravelEvent } from './types';
import { initialEvents } from './data/initialData';

export default function App() {
  const [events, setEvents] = useState<TravelEvent[]>(initialEvents);
  const [showForm, setShowForm] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<TravelEvent | null>(null);
  const [view, setView] = useState<'calendar' | 'list'>('calendar');

  const handleAddEvent = (newEvent: Omit<TravelEvent, 'id'>) => {
    const event = {
      ...newEvent,
      id: Math.random().toString(36).substr(2, 9)
    };
    setEvents([...events, event]);
    setShowForm(false);
  };

  const handleUpdateEvent = (updatedEvent: TravelEvent) => {
    setEvents(events.map(event => 
      event.id === updatedEvent.id ? updatedEvent : event
    ));
    setSelectedEvent(updatedEvent);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Header onAddEventClick={() => setShowForm(!showForm)} />
      
      <main className="max-w-7xl mx-auto px-4 py-6">
        <div className="mb-6 flex justify-between items-center">
          <ViewToggle view={view} onViewChange={setView} />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            {view === 'calendar' ? (
              <Calendar 
                events={events} 
                onEventClick={setSelectedEvent} 
              />
            ) : (
              <ListView 
                events={events} 
                onEventClick={setSelectedEvent} 
              />
            )}
          </div>
          <div>
            {showForm && (
              <div className="bg-white rounded-lg shadow p-6">
                <h2 className="text-xl font-semibold mb-4">Add New Event</h2>
                <EventForm onSubmit={handleAddEvent} />
              </div>
            )}
            {selectedEvent && !showForm && (
              <EventDetails 
                event={selectedEvent} 
                onUpdate={handleUpdateEvent}
              />
            )}
          </div>
        </div>
      </main>
    </div>
  );
}