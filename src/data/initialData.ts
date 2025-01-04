import { TravelEvent } from '../types';

export const initialEvents: TravelEvent[] = [
  {
    id: '1',
    startDate: new Date('2025-04-18T10:00:00'),
    type: 'flight',
    title: 'Flight to Toronto',
    location: {
      description: 'London Heathrow Airport',
      mapsUrl: 'https://goo.gl/maps/LHYrEfuMQxJyNhxK7'
    },
    description: 'First leg of journey to Costa Rica'
  },
  {
    id: '2',
    startDate: new Date('2025-04-18T15:00:00'),
    type: 'flight',
    title: 'Flight to San José',
    location: {
      description: 'Toronto Pearson International Airport',
      mapsUrl: 'https://goo.gl/maps/QVxU4S8VVMU2K6Su7'
    },
    description: 'Second leg of journey to Costa Rica'
  },
  {
    id: '3',
    startDate: new Date('2025-04-19'),
    type: 'activity',
    title: 'Travel to La Fortuna',
    location: {
      description: 'La Fortuna, Costa Rica',
      mapsUrl: 'https://goo.gl/maps/4J6mZwQUqGv7JTQP6'
    },
    description: 'Transfer from San José to La Fortuna'
  }
];