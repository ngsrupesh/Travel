import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';

interface TravelGroup {
  id: string;
  name: string;
  description: string;
  memberCount: number;
  posts: number;
  image: string;
  tags: string[];
  lastActive: string;
}

@Component({
  selector: 'app-travel-groups',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatChipsModule
  ],
  templateUrl: './travel-groups.component.html',
  styleUrls: ['./travel-groups.component.css']
})
export class TravelGroupsComponent {
  groups: TravelGroup[] = [
    {
      id: '1',
      name: 'Solo Travelers Connect',
      description: 'A vibrant community for solo travelers to share experiences, plan meetups, and support each other on their independent journeys.',
      memberCount: 2500,
      posts: 450,
      image: 'https://images.unsplash.com/photo-1501555088652-021faa106b9b',
      tags: ['SoloTravel', 'Adventure', 'Tips'],
      lastActive: '2 hours ago'
    },
    {
      id: '2',
      name: 'Adventure Seekers',
      description: 'Join fellow thrill-seekers exploring the world. From mountain climbing to deep-sea diving, we do it all!',
      memberCount: 1800,
      posts: 320,
      image: 'https://images.unsplash.com/photo-1527004013197-933c4bb611b3',
      tags: ['Adventure', 'Sports', 'Outdoors'],
      lastActive: '1 day ago'
    },
    {
      id: '3',
      name: 'Foodies Around the World',
      description: 'Discover local cuisines, share food recommendations, and connect with travelers who believe food is the best way to experience culture.',
      memberCount: 3000,
      posts: 680,
      image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0',
      tags: ['Food', 'Culture', 'Cuisine'],
      lastActive: '5 hours ago'
    }
  ];

  joinGroup(groupId: string) {
    console.log('Joining group:', groupId);
  }
}