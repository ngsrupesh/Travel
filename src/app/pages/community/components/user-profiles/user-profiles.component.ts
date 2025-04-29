import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';

interface TravelerProfile {
  id: string;
  name: string;
  username: string;
  avatar: string;
  bio: string;
  countriesVisited: number;
  followers: number;
  specialties: string[];
  recentDestination: string;
}

@Component({
  selector: 'app-user-profiles',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatChipsModule
  ],
  templateUrl: './user-profiles.component.html',
  styleUrls: ['./user-profiles.component.css']
})
export class UserProfilesComponent {
  travelers: TravelerProfile[] = [
    {
      id: '1',
      name: 'Ben Thompson',
      username: '@BackpackerBen',
      avatar: 'https://i.pravatar.cc/150?img=7',
      bio: 'Budget travel expert, 30 countries and counting! Sharing tips for backpacking around the world.',
      countriesVisited: 30,
      followers: 15000,
      specialties: ['Budget Travel', 'Backpacking', 'Hostels'],
      recentDestination: 'Vietnam'
    },
    {
      id: '2',
      name: 'Elena Martinez',
      username: '@LuxuryLena',
      avatar: 'https://i.pravatar.cc/150?img=8',
      bio: 'Luxury travel enthusiast. Reviewing the finest hotels and experiences around the globe.',
      countriesVisited: 45,
      followers: 25000,
      specialties: ['Luxury Travel', 'Fine Dining', 'Spa Retreats'],
      recentDestination: 'Maldives'
    },
    {
      id: '3',
      name: 'Nina Chen',
      username: '@NomadicNina',
      avatar: 'https://i.pravatar.cc/150?img=9',
      bio: 'Solo female traveler focusing on safety tips and cultural experiences.',
      countriesVisited: 35,
      followers: 20000,
      specialties: ['Solo Travel', 'Safety Tips', 'Cultural Travel'],
      recentDestination: 'Morocco'
    },
    {
      id: '4',
      name: 'Alex Green',
      username: '@EcoExplorer',
      avatar: 'https://i.pravatar.cc/150?img=10',
      bio: 'Sustainable travel advocate. Exploring the world while minimizing environmental impact.',
      countriesVisited: 28,
      followers: 18000,
      specialties: ['Eco-Travel', 'Sustainability', 'Nature'],
      recentDestination: 'Costa Rica'
    }
  ];

  followUser(userId: string) {
    console.log('Following user:', userId);
  }
}