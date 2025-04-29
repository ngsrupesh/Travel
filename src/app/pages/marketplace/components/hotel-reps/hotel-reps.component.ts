import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { MatTooltipModule } from '@angular/material/tooltip';
import { HotelRep } from '../../../../models/marketplace.models';

@Component({
  selector: 'app-hotel-reps',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatChipsModule,
    MatTooltipModule
  ],
  templateUrl: './hotel-reps.component.html',
  styleUrls: ['./hotel-reps.component.css']
})
export class HotelRepsComponent {
  hotelReps: HotelRep[] = [
    {
      id: '1',
      name: 'Priya Sharma',
      title: 'Front Desk Manager',
      avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg',
      hotel: {
        name: 'The Orchid Residency',
        location: {
          city: 'New Jersey',
          country: 'USA'
        }
      },
      languages: ['Hindi', 'English'],
      availability: {
        startTime: '09:00',
        endTime: '21:00',
        timezone: 'EST'
      },
      specialties: [
        'Booking Support',
        'Room Upgrades',
        'Dietary Requests',
        'Emergency Handling'
      ],
      responseTime: '< 2 hours',
      isVerified: true
    },
    {
      id: '2',
      name: 'Carlos Rodriguez',
      title: 'Guest Relations Manager',
      avatar: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg',
      hotel: {
        name: 'Marina Bay Resort',
        location: {
          city: 'Miami',
          country: 'USA'
        }
      },
      languages: ['Spanish', 'English', 'Portuguese'],
      availability: {
        startTime: '08:00',
        endTime: '20:00',
        timezone: 'EST'
      },
      specialties: [
        'VIP Services',
        'Event Planning',
        'Local Tours',
        'Transportation'
      ],
      responseTime: '< 1 hour',
      isVerified: true
    }
  ];

  contactRep(repId: string): void {
    console.log('Contacting rep:', repId);
  }

  requestCallback(repId: string): void {
    console.log('Requesting callback from rep:', repId);
  }
}