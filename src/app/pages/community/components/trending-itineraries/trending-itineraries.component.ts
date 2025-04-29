import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';

interface Itinerary {
  id: string;
  title: string;
  author: string;
  avatar: string;
  likes: number;
  stops: string[];
  highlights: string[];
}

@Component({
  selector: 'app-trending-itineraries',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatChipsModule
  ],
  templateUrl: './trending-itineraries.component.html',
  styleUrls: ['./trending-itineraries.component.css']
})
export class TrendingItinerariesComponent {
  itineraries: Itinerary[] = [
    {
      id: '1',
      title: '7 Days in Japan - Culture & Food Tour',
      author: '@WanderlustJoe',
      avatar: 'https://i.pravatar.cc/150?img=4',
      likes: 120,
      stops: ['Tokyo', 'Kyoto', 'Osaka'],
      highlights: ['Sushi-making class', 'Arashiyama Bamboo Forest', 'Osaka street food']
    },
    {
      id: '2',
      title: 'The Ultimate US Road Trip (West Coast)',
      author: '@AdventureSeeker',
      avatar: 'https://i.pravatar.cc/150?img=5',
      likes: 98,
      stops: ['San Francisco', 'Los Angeles', 'Grand Canyon', 'Las Vegas'],
      highlights: ['Pacific Coast Highway', 'Yosemite', 'Vegas nightlife']
    },
    {
      id: '3',
      title: 'Backpacking Through South America',
      author: '@GlobalNomad',
      avatar: 'https://i.pravatar.cc/150?img=6',
      likes: 85,
      stops: ['Colombia', 'Peru', 'Bolivia', 'Chile'],
      highlights: ['Machu Picchu trek', 'Amazon rainforest tour', 'Uyuni Salt Flats']
    }
  ];
}