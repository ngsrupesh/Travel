import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { HotelDealsComponent } from './components/hotel-deals/hotel-deals.component';
import { FlightDealsComponent } from './components/flight-deals/flight-deals.component';
import { ActivityBookingComponent } from './components/activity-booking/activity-booking.component';
import { HotelRepsComponent } from './components/hotel-reps/hotel-reps.component';

@Component({
  selector: 'app-marketplace',
  standalone: true,
  imports: [
    CommonModule,
    MatTabsModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatChipsModule,
    HotelDealsComponent,
    FlightDealsComponent,
    ActivityBookingComponent,
    HotelRepsComponent
  ],
  templateUrl: './marketplace.component.html',
  styleUrls: ['./marketplace.component.css']
})
export class MarketplaceComponent {}