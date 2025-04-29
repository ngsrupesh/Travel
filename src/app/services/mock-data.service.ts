import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { UpcomingTrip, TravelHistory, RecommendedTrip, QuickAction } from '../models/dashboard.models';

@Injectable({
  providedIn: 'root'
})
export class MockDataService {
  private upcomingTrips: UpcomingTrip[] = [
    {
      destination: "Paris, France",
      dates: "March 15 - March 22, 2025",
      hotel: "Hotel Le Meurice",
      activities: ["Eiffel Tower Visit", "Seine River Cruise", "Louvre Museum"],
      budget: "$3000"
    },
    {
      destination: "Tokyo, Japan",
      dates: "April 5 - April 15, 2025",
      hotel: "The Ritz-Carlton Tokyo",
      activities: ["Shibuya Crossing", "Mt. Fuji Day Trip", "Sushi Tasting"],
      budget: "$4500"
    }
  ];

  private travelHistory: TravelHistory[] = [
    {
      destination: "New York, USA",
      dates: "January 10 - January 18, 2024",
      memorable_moments: ["Broadway Show", "Times Square NYE", "Empire State Building"],
      rating: "5/5"
    },
    {
      destination: "Rome, Italy",
      dates: "July 20 - July 27, 2024",
      memorable_moments: ["Colosseum Tour", "Vatican City", "Pasta Making Class"],
      rating: "4.5/5"
    }
  ];

  private recommendedTrips: RecommendedTrip[] = [
    {
      destination: "Santorini, Greece",
      reason: "You love beach vacations & scenic sunsets.",
      best_time: "May - September",
      estimated_budget: "$3200",
      top_activities: ["Sunset at Oia", "Boat Tour to Volcano", "Greek Wine Tasting"]
    },
    {
      destination: "Reykjavik, Iceland",
      reason: "You enjoy adventure and cold-weather destinations.",
      best_time: "November - February",
      estimated_budget: "$5000",
      top_activities: ["Northern Lights Tour", "Blue Lagoon Spa", "Glacier Hiking"]
    }
  ];

  private quickActions: QuickAction[] = [
    {
      icon: 'add_circle',
      label: 'Plan a New Trip',
      action: 'plan',
      color: 'primary'
    },
    {
      icon: 'local_offer',
      label: 'Find Last-Minute Deals',
      action: 'deals',
      color: 'accent'
    },
    {
      icon: 'psychology',
      label: 'Get AI Travel Suggestion',
      action: 'suggestions',
      color: 'primary'
    },
    {
      icon: 'account_balance_wallet',
      label: 'View Travel Budget',
      action: 'budget',
      color: 'warn'
    }
  ];

  getUpcomingTrips(): Observable<UpcomingTrip[]> {
    return of(this.upcomingTrips);
  }

  getTravelHistory(): Observable<TravelHistory[]> {
    return of(this.travelHistory);
  }

  getRecommendedTrips(): Observable<RecommendedTrip[]> {
    return of(this.recommendedTrips);
  }

  getQuickActions(): Observable<QuickAction[]> {
    return of(this.quickActions);
  }
}