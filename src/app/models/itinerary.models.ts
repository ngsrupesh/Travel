export interface TripType {
  id: string;
  name: string;
  icon: string;
  description: string;
  tooltip: string;
}

export interface DietaryPreference {
  id: string;
  name: string;
  icon: string;
  description: string;
}

export interface FoodOptions {
  cuisinePreferences: string[];
  dietType: string;
  religiousPreferences: string[];
  allergyAwareness: string[];
  spiceLevel: string;
}

export interface Location {
  city: string;
  country: string;
  placeId?: string;
  coordinates?: {
    lat: number;
    lng: number;
    safetyRating?: SafetyRating;
  };
}

export interface SafetyRating {
  overall: number;
  categories: {
    soloTraveler: boolean;
    womenSafety: boolean;
    familyFriendly: boolean;
    nightSafety: boolean;
    emergencyServices: boolean;
  };
  details: {
    lighting: string;
    policePresence: string;
    hospitalDistance: string;
    safetyTips: string[];
  };
}

export interface TransportOption {
  type: string;
  icon: string;
  services: string[];
  estimatedTime: string;
  estimatedCost: string;
  pickupPoint?: string;
  dropoffPoint?: string;
  recommended?: boolean;
  recommendationReason?: string;
  bookingUrl?: string;
}

export interface Activity {
  id: string;
  name: string;
  location: Location;
  duration: number; // in minutes
  startTime?: string;
  category: string;
  description?: string;
  distanceFromPrevious?: number; // Distance from previous activity or city center in kilometers
}

export interface DailyItinerary {
  date: string;
  location: Location;
  activities: Activity[];
}

export interface ItineraryPlan {
  tripType: string;
  startDate: string;
  endDate: string;
  destinations: Location[];
  preferences: {
    activities: string[];
    budget: string;
    pace: string;
    food: FoodOptions;
  };
  dailyItineraries: DailyItinerary[];
}