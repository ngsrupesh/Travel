import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';

interface Membership {
  id: string;
  name: string;
  logo: string;
  number: string;
  status: 'Active' | 'Inactive' | 'Expired';
  points: number;
  tier: string;
  expiryDate: Date;
  portalUrl: string;
}

@Component({
  selector: 'app-connected-memberships',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatChipsModule
  ],
  templateUrl: './connected-memberships.component.html',
  styleUrls: ['./connected-memberships.component.css']
})
export class ConnectedMembershipsComponent {
  memberships: Membership[] = [
    {
      id: '1',
      name: 'Marriott Bonvoy',
      logo: 'https://logos-world.net/wp-content/uploads/2021/08/Marriott-Logo.png',
      number: '1234 5678 9012',
      status: 'Active',
      points: 50000,
      tier: 'Platinum Elite',
      expiryDate: new Date('2025-12-31'),
      portalUrl: 'https://www.marriott.com'
    },
    {
      id: '2',
      name: 'Delta SkyMiles',
      logo: 'https://logos-world.net/wp-content/uploads/2021/08/Delta-Logo.png',
      number: '9876 5432 1098',
      status: 'Active',
      points: 75000,
      tier: 'Gold Medallion',
      expiryDate: new Date('2025-12-31'),
      portalUrl: 'https://www.delta.com'
    }
  ];

  hasConnectedMemberships = this.memberships.length > 0;

  getStatusColor(status: string): string {
    switch (status) {
      case 'Active':
        return 'status-active';
      case 'Inactive':
        return 'status-inactive';
      case 'Expired':
        return 'status-expired';
      default:
        return '';
    }
  }

  addNewMembership() {
    console.log('Opening membership linking dialog');
  }
}