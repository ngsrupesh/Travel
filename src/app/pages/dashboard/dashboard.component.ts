import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UpcomingTripsComponent } from '../../components/dashboard/upcoming-trips/upcoming-trips.component';
import { TravelHistoryComponent } from '../../components/dashboard/travel-history/travel-history.component';
import { RecommendedTripsComponent } from '../../components/dashboard/recommended-trips/recommended-trips.component';
import { QuickActionsComponent } from '../../components/dashboard/quick-actions/quick-actions.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    UpcomingTripsComponent,
    TravelHistoryComponent,
    RecommendedTripsComponent,
    QuickActionsComponent
  ],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {}