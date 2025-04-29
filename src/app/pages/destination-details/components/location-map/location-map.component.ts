import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-location-map',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  template: `
    <div class="map-container">
      <mat-card>
        <mat-card-content>
          <div class="map-placeholder">
            <p>Map will be displayed here</p>
            <p>Latitude: {{latitude}}</p>
            <p>Longitude: {{longitude}}</p>
          </div>
        </mat-card-content>
      </mat-card>
    </div>
  `,
  styles: [`
    .map-container {
      @apply w-full;
    }
    .map-placeholder {
      @apply h-[400px] flex flex-col items-center justify-center bg-gray-100 rounded-lg text-gray-600;
    }
  `]
})
export class LocationMapComponent {
  @Input() latitude!: number;
  @Input() longitude!: number;
  @Input() places: any[] = [];
}