import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { MatButtonModule } from '@angular/material/button';
import { MockDataService } from '../../../services/mock-data.service';
import { RecommendedTrip } from '../../../models/dashboard.models';

@Component({
  selector: 'app-recommended-trips',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatIconModule, MatChipsModule, MatButtonModule],
  templateUrl: './recommended-trips.component.html',
  styleUrls: ['./recommended-trips.component.css']
})
export class RecommendedTripsComponent implements OnInit {
  recommendedTrips: RecommendedTrip[] = [];

  constructor(private mockDataService: MockDataService) {}

  ngOnInit() {
    this.mockDataService.getRecommendedTrips().subscribe(trips => {
      this.recommendedTrips = trips;
    });
  }
}