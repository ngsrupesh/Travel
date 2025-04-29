import { Location } from './itinerary.models';

export interface HotelDeal {
  id: string;
  name: string;
  location: Location;
  price_per_night: number;
  rating: number;
  amenities: string[];
  image: string;
  description: string;
  available_dates: {
    start: string;
    end: string;
  };
  discount_percentage?: number;
}

export interface FlightDeal {
  id: string;
  from: Location;
  to: Location;
  airline: string;
  departure_time: string;
  arrival_time: string;
  price: number;
  class: string;
  stops: number;
  duration: string;
  image?: string;
  discount_percentage?: number;
}

export interface Activity {
  id: string;
  name: string;
  location: Location;
  price: number;
  duration: string;
  rating: number;
  image: string;
  description: string;
  category: string;
  included: string[];
  discount_percentage?: number;
}

export interface HotelRep {
  id: string;
  name: string;
  title: string;
  avatar: string;
  hotel: {
    name: string;
    location: Location;
  };
  languages: string[];
  availability: {
    startTime: string;
    endTime: string;
    timezone: string;
  };
  specialties: string[];
  responseTime: string;
  isVerified: boolean;
}