import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-weather-info',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatIconModule],
  template: `
    <div class="weather-container">
      <mat-card class="weather-card">
        <mat-card-content>
          <div class="weather-info">
            <mat-icon class="weather-icon">wb_sunny</mat-icon>
            <div class="weather-details">
              <h3>Current Weather</h3>
              <p class="temperature">22°C</p>
              <p class="condition">Sunny</p>
            </div>
          </div>
          <div class="weather-stats">
            <div class="stat">
              <span class="label">Humidity</span>
              <span class="value">65%</span>
            </div>
            <div class="stat">
              <span class="label">Wind</span>
              <span class="value">12 km/h</span>
            </div>
          </div>
        </mat-card-content>
      </mat-card>
    </div>
  `,
  styles: [`
    .weather-container {
      @apply w-full;
    }
    .weather-card {
      @apply max-w-md mx-auto;
    }
    .weather-info {
      @apply flex items-center gap-6 mb-6;
    }
    .weather-icon {
      @apply text-6xl text-yellow-500;
    }
    .weather-details h3 {
      @apply text-lg font-medium text-gray-700;
    }
    .temperature {
      @apply text-3xl font-bold text-gray-900;
    }
    .condition {
      @apply text-gray-600;
    }
    .weather-stats {
      @apply grid grid-cols-2 gap-4;
    }
    .stat {
      @apply flex flex-col text-center p-3 bg-gray-50 rounded-lg;
    }
    .label {
      @apply text-sm text-gray-600;
    }
    .value {
      @apply text-lg font-medium text-gray-900;
    }
  `]
})
export class WeatherInfoComponent implements OnInit {
  @Input() latitude!: number;
  @Input() longitude!: number;

  ngOnInit() {
    // Here we would typically fetch weather data
    console.log(`Fetching weather for: ${this.latitude}, ${this.longitude}`);
  }
}