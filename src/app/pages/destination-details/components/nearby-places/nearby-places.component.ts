import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-nearby-places',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatIconModule, MatButtonModule],
  template: `
    <div class="places-container">
      <div class="places-grid">
        <mat-card *ngFor="let place of mockPlaces" class="place-card">
          <img [src]="place.image" [alt]="place.name" class="place-image">
          <mat-card-content>
            <h3 class="place-name">{{place.name}}</h3>
            <div class="place-rating">
              <mat-icon class="star-icon">star</mat-icon>
              <span>{{place.rating}}</span>
            </div>
            <p class="place-type">{{place.type}}</p>
            <p class="place-distance">{{place.distance}} away</p>
          </mat-card-content>
          <mat-card-actions>
            <button mat-button color="primary">View Details</button>
            <button mat-button color="accent">Get Directions</button>
          </mat-card-actions>
        </mat-card>
      </div>
    </div>
  `,
  styles: [`
    .places-container {
      @apply w-full;
    }
    .places-grid {
      @apply grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6;
    }
    .place-card {
      @apply hover:shadow-lg transition-shadow;
    }
    .place-image {
      @apply w-full h-48 object-cover;
    }
    .place-name {
      @apply text-lg font-semibold text-gray-900 mb-2;
    }
    .place-rating {
      @apply flex items-center gap-1 text-yellow-500 mb-2;
    }
    .place-type {
      @apply text-gray-600 mb-1;
    }
    .place-distance {
      @apply text-sm text-gray-500;
    }
  `]
})
export class NearbyPlacesComponent {
  @Input() latitude!: number;
  @Input() longitude!: number;

  mockPlaces = [
    {
      name: 'Le Meurice',
      type: 'Luxury Hotel',
      rating: 4.8,
      distance: '500m',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945'
    },
    {
      name: 'Café de Flore',
      type: 'Restaurant',
      rating: 4.5,
      distance: '1km',
      image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24'
    },
    {
      name: 'Louvre Museum',
      type: 'Museum',
      rating: 4.9,
      distance: '2km',
      image: 'https://images.unsplash.com/photo-1499856871958-5b9627545d1a'
    }
  ];
}