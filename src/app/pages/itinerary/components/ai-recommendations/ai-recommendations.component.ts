import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { Location } from '../../../../models/itinerary.models';

interface TravelPreferences {
  activities: string[];
  budget: string;
  pace: string;
}

@Component({
  selector: 'app-ai-recommendations',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatChipsModule,
    MatProgressSpinnerModule
  ],
  templateUrl: './ai-recommendations.component.html',
  styleUrls: ['./ai-recommendations.component.css']
})
export class AIRecommendationsComponent {
  @Input() tripType!: string;
  @Input() dates!: { startDate: string; endDate: string };
  @Input() locations!: Location[];
  @Input() preferences!: TravelPreferences;
  @Output() nextStep = new EventEmitter<void>();
  @Output() prevStep = new EventEmitter<void>();
  @Output() generatePlan = new EventEmitter<void>();

  isLoading = false;
  recommendations: any[] = [];

  generateRecommendations() {
    this.isLoading = true;
    // Simulate API call
    setTimeout(() => {
      this.recommendations = this.getDummyRecommendations();
      this.isLoading = false;
      this.generatePlan.emit();
    }, 2000);
  }

  private getDummyRecommendations() {
    return [
      {
        day: 1,
        location: this.locations[0]?.city || 'Unknown Location',
        activities: [
          { name: 'Eiffel Tower', time: '9:00 AM - 11:00 AM' },
          { name: 'Seine River Cruise', time: '2:00 PM - 4:00 PM' }
        ]
      },
      {
        day: 2,
        location: this.locations[0]?.city || 'Unknown Location',
        activities: [
          { name: 'Louvre Museum', time: '10:00 AM - 2:00 PM' },
          { name: 'Champs-Élysées', time: '3:00 PM - 5:00 PM' }
        ]
      }
    ];
  }

  onNext() {
    this.nextStep.emit();
  }

  onPrevious() {
    this.prevStep.emit();
  }
}