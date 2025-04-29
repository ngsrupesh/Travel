import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { MockDataService } from '../../../services/mock-data.service';
import { TravelHistory } from '../../../models/dashboard.models';

@Component({
  selector: 'app-travel-history',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatIconModule, MatChipsModule],
  templateUrl: './travel-history.component.html',
  styleUrls: ['./travel-history.component.css']
})
export class TravelHistoryComponent implements OnInit {
  travelHistory: TravelHistory[] = [];

  constructor(private mockDataService: MockDataService) {}

  ngOnInit() {
    this.mockDataService.getTravelHistory().subscribe(history => {
      this.travelHistory = history;
    });
  }
}