export interface UpcomingTrip {
  destination: string;
  dates: string;
  hotel: string;
  activities: string[];
  budget: string;
}

export interface TravelHistory {
  destination: string;
  dates: string;
  memorable_moments: string[];
  rating: string;
}

export interface RecommendedTrip {
  destination: string;
  reason: string;
  best_time: string;
  estimated_budget: string;
  top_activities: string[];
}

export interface QuickAction {
  icon: string;
  label: string;
  action: string;
  color: string;
}