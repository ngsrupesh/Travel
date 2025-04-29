import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { Router } from '@angular/router';
import { Activity } from '../../../../models/marketplace.models';

@Component({
  selector: 'app-activity-booking',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatChipsModule
  ],
  templateUrl: './activity-booking.component.html',
  styleUrls: ['./activity-booking.component.css']
})
export class ActivityBookingComponent {
  activities: Activity[] = [
    {
      id: 'A101',
      name: 'Eiffel Tower Guided Tour',
      location: {
        city: 'Paris',
        country: 'France'
      },
      price: 45,
      duration: '2 hours',
      rating: 4.8,
      image: 'https://images.unsplash.com/photo-1543349689-9a4d426bee8e',
      description: 'Skip the line and enjoy a guided tour of the Eiffel Tower with stunning city views.',
      category: 'Sightseeing',
      included: ['Skip-the-line access', 'Professional guide', 'Viewing deck access'],
      discount_percentage: 10
    },
    {
      id: 'A102',
      name: 'Grand Canyon Helicopter Tour',
      location: {
        city: 'Las Vegas',
        country: 'USA'
      },
      price: 300,
      duration: '1.5 hours',
      rating: 5.0,
      image: 'https://images.unsplash.com/photo-1474044159687-1ee9f3a51722',
      description: 'Experience breathtaking views of the Grand Canyon from above.',
      category: 'Adventure',
      included: ['Hotel pickup', 'Helicopter tour', 'Champagne toast'],
      discount_percentage: 15
    }
  ];

  constructor(private router: Router) {}

  bookActivity(activity: Activity) {
    this.router.navigate(['/payment'], {
      state: {
        bookingDetails: {
          title: activity.name,
          amount: activity.price,
          date: new Date(),
          location: `${activity.location.city}, ${activity.location.country}`
        }
      }
    });
  }
}