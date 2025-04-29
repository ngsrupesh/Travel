import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';

interface Perk {
  id: string;
  title: string;
  description: string;
  image: string;
  discount: string;
  category: string;
  membership: string;
  validUntil: Date;
}

@Component({
  selector: 'app-exclusive-perks',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatChipsModule
  ],
  templateUrl: './exclusive-perks.component.html',
  styleUrls: ['./exclusive-perks.component.css']
})
export class ExclusivePerksComponent {
  perks: Perk[] = [
    {
      id: '1',
      title: 'Hilton Hotels Discount',
      description: 'Save 15% on your next stay at any Hilton property worldwide',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945',
      discount: '15% OFF',
      category: 'Hotels',
      membership: 'AAA Member',
      validUntil: new Date('2025-12-31')
    },
    {
      id: '2',
      title: 'Priority Airport Lounge Access',
      description: 'Complimentary access to over 1,300 airport lounges worldwide',
      image: 'https://images.unsplash.com/photo-1545128485-c400e7702796',
      discount: 'FREE',
      category: 'Airport',
      membership: 'Delta SkyMiles Gold',
      validUntil: new Date('2025-12-31')
    },
    {
      id: '3',
      title: 'Car Rental Upgrade',
      description: 'Free car class upgrade on your next rental',
      image: 'https://images.unsplash.com/photo-1550355291-bbee04a92027',
      discount: 'FREE UPGRADE',
      category: 'Car Rental',
      membership: 'Marriott Bonvoy',
      validUntil: new Date('2025-06-30')
    }
  ];

  hasConnectedMemberships = this.perks.length > 0;
}