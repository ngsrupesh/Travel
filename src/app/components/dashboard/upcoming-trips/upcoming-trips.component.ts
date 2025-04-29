import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { MatButtonModule } from '@angular/material/button';
import { MockDataService } from '../../../services/mock-data.service';
import { UpcomingTrip } from '../../../models/dashboard.models';

@Component({
  selector: 'app-upcoming-trips',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatIconModule, MatChipsModule, MatButtonModule],
  templateUrl: './upcoming-trips.component.html',
  styleUrls: ['./upcoming-trips.component.css']
})
export class UpcomingTripsComponent implements OnInit {
  upcomingTrips: UpcomingTrip[] = [];

  constructor(private mockDataService: MockDataService) {}

  ngOnInit() {
    this.mockDataService.getUpcomingTrips().subscribe(trips => {
      this.upcomingTrips = trips;
    });
  }
}