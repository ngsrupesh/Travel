import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatChipsModule } from '@angular/material/chips';
import { ItineraryPlan, TransportOption, Location as TripLocation, SafetyRating } from '../../../../models/itinerary.models';
import { Router, RouterLink } from '@angular/router';

interface PackingCategory {
  icon: string;
  name: string;
  items: PackingItem[];
}

interface PackingItem {
  name: string;
  status: 'allowed' | 'restricted' | 'recommended';
  localAvailability: boolean;
  tip: string;
}

interface TransportSection {
  icon: string;
  title: string;
  options: TransportOption[];
}

@Component({
  selector: 'app-trip-summary',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatChipsModule,
    MatExpansionModule,
    RouterLink,
    MatTooltipModule
  ],
  templateUrl: './trip-summary.component.html',
  styleUrls: ['./trip-summary.component.css']
})
export class TripSummaryComponent {
  @Input() plan!: ItineraryPlan;

  packingCategories: PackingCategory[] = [
    {
      icon: '🍼',
      name: 'Baby Essentials',
      items: [
        {
          name: 'Baby Formula',
          status: 'allowed',
          localAvailability: true,
          tip: 'Available at local pharmacies, but consider carrying a small amount for the journey.'
        },
        {
          name: 'Diapers',
          status: 'allowed',
          localAvailability: true,
          tip: 'Easily available locally. Pack enough for 2-3 days.'
        }
      ]
    },
    {
      icon: '💊',
      name: 'Medicines & Supplements',
      items: [
        {
          name: 'Prescription Medications',
          status: 'allowed',
          localAvailability: false,
          tip: 'Carry with original prescription and keep in hand luggage.'
        },
        {
          name: 'First Aid Kit',
          status: 'allowed',
          localAvailability: true,
          tip: 'Basic supplies available locally, but good to have during travel.'
        }
      ]
    },
    {
      icon: '🧘‍♀️',
      name: 'Health & Wellness',
      items: [
        {
          name: 'Yoga Mat',
          status: 'allowed',
          localAvailability: true,
          tip: 'Consider renting locally if your accommodation doesn\'t provide one.'
        }
      ]
    },
    {
      icon: '📱',
      name: 'Electronics & Gadgets',
      items: [
        {
          name: 'Power Bank',
          status: 'restricted',
          localAvailability: true,
          tip: 'Must be under 100Wh for air travel. Available locally if needed.'
        },
        {
          name: 'Universal Adapter',
          status: 'allowed',
          localAvailability: true,
          tip: 'Essential for international travel. Check voltage compatibility.'
        }
      ]
    }
  ];

  transportOptions: TransportSection = {
    icon: 'directions',
    title: 'Transportation Options',
    options: [
      {
        type: 'Rental Cars',
        icon: 'directions_car',
        services: ['Hertz', 'Avis', 'Enterprise'],
        estimatedTime: '45 mins',
        estimatedCost: '$50-80/day',
        pickupPoint: 'Airport Terminal 2',
        dropoffPoint: 'City Center',
        recommended: true,
        recommendationReason: 'Most flexible option for your itinerary',
        bookingUrl: '/marketplace/cars'
      },
      {
        type: 'Buses / Shuttles',
        icon: 'directions_bus',
        services: ['Greyhound', 'Megabus', 'FlixBus'],
        estimatedTime: '1h 15m',
        estimatedCost: '$15-25',
        pickupPoint: 'Central Bus Station',
        dropoffPoint: 'Downtown Terminal',
        bookingUrl: '/marketplace/buses'
      },
      {
        type: 'Trains',
        icon: 'train',
        services: ['Amtrak', 'VIA Rail', 'Eurostar'],
        estimatedTime: '1h',
        estimatedCost: '$30-45',
        pickupPoint: 'Union Station',
        dropoffPoint: 'Central Station',
        bookingUrl: '/marketplace/trains'
      },
      {
        type: 'Domestic Flights',
        icon: 'flight',
        services: ['Local Airlines'],
        estimatedTime: '1h 30m',
        estimatedCost: '$150-200',
        pickupPoint: 'Domestic Terminal',
        dropoffPoint: 'City Airport',
        bookingUrl: '/marketplace/flights'
      },
      {
        type: 'Rideshare / Taxi',
        icon: 'local_taxi',
        services: ['Uber', 'Lyft', 'Local Taxis'],
        estimatedTime: '35 mins',
        estimatedCost: '$35-45',
        recommended: true,
        recommendationReason: 'Best for short distances and convenience',
      },
      {
        type: 'Public Transport',
        icon: 'subway',
        services: ['Metro', 'Bus', 'Tram'],
        estimatedTime: '1h',
        estimatedCost: '$2-5',
        recommendationReason: 'Most economical option',
      },
      {
        type: 'Biking / Walking',
        icon: 'directions_bike',
        services: ['City Bikes', 'Walking Routes'],
        estimatedTime: 'Varies',
        estimatedCost: '$0-10',
        recommendationReason: 'Eco-friendly option',
      }
    ]
  };

  constructor(private router: Router) {}

  getStatusColor(status: string): string {
    switch (status) {
      case 'allowed': return 'text-green-600';
      case 'restricted': return 'text-yellow-600';
      case 'recommended': return 'text-blue-600';
      default: return 'text-gray-600';
    }
  }

  getStatusIcon(status: string): string {
    switch (status) {
      case 'allowed': return 'check_circle';
      case 'restricted': return 'warning';
      case 'recommended': return 'recommend';
      default: return 'info';
    }
  }

  downloadItinerary(): void {
    // Implementation for downloading itinerary
    console.log('Downloading itinerary...');
  }

  getSafetyRating(location: TripLocation): SafetyRating {
    // Mock safety rating data
    return {
      overall: 4.7,
      categories: {
        soloTraveler: true,
        womenSafety: true,
        familyFriendly: true,
        nightSafety: true,
        emergencyServices: true
      },
      details: {
        lighting: "Well-lit streets and public areas",
        policePresence: "Regular police patrols, especially in tourist areas",
        hospitalDistance: "Major hospital within 1.2 km",
        safetyTips: [
          "Keep valuables in hotel safe",
          "Use official taxi services",
          "Stay aware in crowded tourist spots",
          "Keep emergency numbers handy"
        ]
      }
    };
  }

  shareItinerary(): void {
    // Implementation for sharing itinerary
    console.log('Sharing itinerary...');
  }

  navigateToMarketplace(): void {
    this.router.navigate(['/marketplace']);
  }
}