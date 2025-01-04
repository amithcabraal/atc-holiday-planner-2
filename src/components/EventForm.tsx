import React, { useState } from 'react';
import { TravelEvent, Location } from '../types';
import { LinkManager } from './LinkManager';
import { LocationInput } from './LocationInput';

interface EventFormProps {
  onSubmit: (event: Omit<TravelEvent, 'id'>) => void;
  initialData?: TravelEvent;
}

export function EventForm({ onSubmit, initialData }: EventFormProps) {
  const [formData, setFormData] = useState({
    title: initialData?.title || '',
    type: initialData?.type || 'activity',
    startDate: initialData?.startDate ? new Date(initialData.startDate).toISOString().slice(0, 16) : '',
    endDate: initialData?.endDate ? new Date(initialData.endDate).toISOString().slice(0, 16) : '',
    location: initialData?.location || { description: '' },
    description: initialData?.description || '',
    links: initialData?.links || [],
    price: initialData?.price?.toString() || '',
    notes: initialData?.notes || ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      ...formData,
      startDate: new Date(formData.startDate),
      endDate: formData.endDate ? new Date(formData.endDate) : undefined,
      price: formData.price ? Number(formData.price) : undefined,
      type: formData.type as TravelEvent['type']
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* ... other form fields ... */}

      <div>
        <LocationInput
          value={formData.location}
          onChange={(location) => setFormData({ ...formData, location })}
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Links</label>
        <LinkManager
          links={formData.links}
          onChange={(links) => setFormData({ ...formData, links })}
        />
      </div>

      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      >
        {initialData ? 'Update Event' : 'Add Event'}
      </button>
    </form>
  );
}