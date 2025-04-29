import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { Router } from '@angular/router';
import { FlightDeal } from '../../../../models/marketplace.models';

@Component({
  selector: 'app-flight-deals',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatChipsModule
  ],
  templateUrl: './flight-deals.component.html',
  styleUrls: ['./flight-deals.component.css']
})
export class FlightDealsComponent {
  flights: FlightDeal[] = [
    {
      id: 'F202',
      from: {
        city: 'New York',
        country: 'USA'
      },
      to: {
        city: 'Los Angeles',
        country: 'USA'
      },
      airline: 'Delta Airlines',
      departure_time: '2025-03-15T08:00:00',
      arrival_time: '2025-03-15T11:00:00',
      price: 250,
      class: 'Economy',
      stops: 0,
      duration: '3h',
      image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05',
      discount_percentage: 15
    },
    {
      id: 'F203',
      from: {
        city: 'Dubai',
        country: 'UAE'
      },
      to: {
        city: 'London',
        country: 'UK'
      },
      airline: 'Emirates',
      departure_time: '2025-04-10T22:00:00',
      arrival_time: '2025-04-11T06:00:00',
      price: 720,
      class: 'Business',
      stops: 1,
      duration: '8h',
      image: 'https://images.unsplash.com/photo-1542296332-2e4473faf563',
      discount_percentage: 10
    }
  ];

  constructor(private router: Router) {}

  bookFlight(flight: FlightDeal) {
    this.router.navigate(['/payment'], {
      state: {
        bookingDetails: {
          title: `${flight.from.city} to ${flight.to.city}`,
          amount: flight.price,
          date: new Date(flight.departure_time),
          location: `${flight.airline} - ${flight.class}`
        }
      }
    });
  }
}