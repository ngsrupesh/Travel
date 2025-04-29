import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { Router } from '@angular/router';
import { HotelDeal } from '../../../../models/marketplace.models';

@Component({
  selector: 'app-hotel-deals',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatChipsModule
  ],
  templateUrl: './hotel-deals.component.html',
  styleUrls: ['./hotel-deals.component.css']
})
export class HotelDealsComponent {
  hotels: HotelDeal[] = [
    {
      id: '1',
      name: 'Grand Plaza Hotel',
      location: {
        city: 'Paris',
        country: 'France'
      },
      price_per_night: 150,
      rating: 4.5,
      amenities: ['Free WiFi', 'Breakfast Included', 'Pool', 'Spa'],
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945',
      description: 'Luxury hotel in the heart of Paris with stunning Eiffel Tower views.',
      available_dates: {
        start: '2025-03-15',
        end: '2025-12-31'
      },
      discount_percentage: 20
    },
    {
      id: '2',
      name: 'Seaside Resort & Spa',
      location: {
        city: 'Bali',
        country: 'Indonesia'
      },
      price_per_night: 200,
      rating: 4.8,
      amenities: ['Private Beach', 'Infinity Pool', 'Restaurant', 'Yoga Classes'],
      image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b',
      description: 'Beachfront resort offering ultimate relaxation and luxury.',
      available_dates: {
        start: '2025-04-01',
        end: '2025-11-30'
      },
      discount_percentage: 15
    }
  ];

  constructor(private router: Router) {}

  bookHotel(hotel: HotelDeal) {
    this.router.navigate(['/payment'], {
      state: {
        bookingDetails: {
          title: hotel.name,
          amount: hotel.price_per_night,
          date: new Date(),
          location: `${hotel.location.city}, ${hotel.location.country}`
        }
      }
    });
  }
}