export interface TravelEvent {
  id: string;
  startDate: Date;
  endDate?: Date;
  type: 'flight' | 'accommodation' | 'activity' | 'restaurant';
  title: string;
  description?: string;
  location: Location;
  links?: string[];
  price?: number;
  notes?: string;
}

export interface Location {
  description: string;
  mapsUrl?: string;
  coordinates?: {
    lat: number;
    lng: number;
  };
}