import React, { useState } from 'react';
import { TravelEvent } from '../types';
import { LinkManager } from './LinkManager';
import { LocationDisplay } from './LocationDisplay';
import { Edit2, Save, X } from 'lucide-react';

interface EventDetailsProps {
  event: TravelEvent;
  onUpdate: (event: TravelEvent) => void;
}

export function EventDetails({ event, onUpdate }: EventDetailsProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedEvent, setEditedEvent] = useState(event);

  const handleSave = () => {
    onUpdate(editedEvent);
    setIsEditing(false);
  };

  return (
    <div className="bg-white rounded-lg shadow p-6">
      {/* ... header ... */}
      
      <div className="space-y-4">
        <div>
          <LocationDisplay location={event.location} />
          <p className="mt-2"><strong>Date:</strong> {new Date(event.startDate).toLocaleDateString()}</p>
          {event.description && (
            <p className="mt-2"><strong>Description:</strong> {event.description}</p>
          )}
        </div>
        
        {/* ... links section ... */}
      </div>
    </div>
  );
}