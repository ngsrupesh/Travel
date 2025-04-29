import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { LocationMapComponent } from './components/location-map/location-map.component';
import { UserReviewsComponent } from './components/user-reviews/user-reviews.component';
import { WeatherInfoComponent } from './components/weather-info/weather-info.component';
import { NearbyPlacesComponent } from './components/nearby-places/nearby-places.component';
import { DestinationService } from '../../services/destination.service';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-destination-details',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatTabsModule,
    MatProgressSpinnerModule,
    LocationMapComponent,
    UserReviewsComponent,
    WeatherInfoComponent,
    NearbyPlacesComponent
  ],
  providers: [DestinationService],
  templateUrl: './destination-details.component.html',
  styleUrls: ['./destination-details.component.css']
})
export class DestinationDetailsComponent implements OnInit {
  destination: any;
  loading = true;
  error: string | null = null;

  constructor(
    private route: ActivatedRoute,
    private destinationService: DestinationService
  ) {}

  ngOnInit() {
    this.route.params.pipe(
      switchMap(params => this.destinationService.getDestination(params['id']))
    ).subscribe({
      next: (data) => {
        this.destination = data;
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Failed to load destination details';
        this.loading = false;
        console.error('Error loading destination:', err);
      }
    });
  }
}