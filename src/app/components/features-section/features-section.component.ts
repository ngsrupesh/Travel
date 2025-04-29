import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-features-section',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './features-section.component.html',
  styleUrls: ['./features-section.component.css']
})
export class FeaturesSectionComponent {
  features = [
    {
      icon: 'flight',
      title: 'AI-Powered Itinerary Planning',
      description: 'Personalized trips tailored to your travel style.'
    },
    {
      icon: 'explore',
      title: 'Smart Recommendations',
      description: 'Get location-based suggestions based on seasonality and trends.'
    },
    {
      icon: 'local_offer',
      title: 'Exclusive Travel Deals',
      description: 'Access the best flight and hotel offers.'
    },
    {
      icon: 'group',
      title: 'Community-Driven Insights',
      description: 'Get real reviews from real travelers.'
    }
  ];
}