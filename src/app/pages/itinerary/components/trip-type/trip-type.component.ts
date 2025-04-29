import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { TripType } from '../../../../models/itinerary.models';

@Component({
  selector: 'app-trip-type',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatTooltipModule,
    MatCheckboxModule
  ],
  templateUrl: './trip-type.component.html',
  styleUrls: ['./trip-type.component.css']
})
export class TripTypeComponent {
  @Input() formGroup!: FormGroup;
  @Output() tripTypeSelected = new EventEmitter<string>();
  @Output() nextStep = new EventEmitter<void>();

  showTravelCompanions = false;

  travelCompanions = [
    { icon: '🍼', label: 'Toddler (0-3 yrs)', control: new FormControl(false) },
    { icon: '🧒', label: 'Kids (4-12 yrs)', control: new FormControl(false) },
    { icon: '🧓', label: 'Seniors / Elderly Travelers', control: new FormControl(false) },
    { icon: '👫', label: 'Adults only', control: new FormControl(false) }
  ];

  tripTypes: TripType[] = [
    {
      id: 'family',
      name: 'Family',
      icon: 'family_restroom',
      description: 'Kid-friendly attractions and leisure trips',
      tooltip: 'Includes options for toddlers, young kids, and multigenerational travel'
    },
    {
      id: 'solo',
      name: 'Solo',
      icon: 'person',
      description: 'Backpacking and self-guided tours',
      tooltip: 'Perfect for independent travelers seeking adventure and self-discovery'
    },
    {
      id: 'business',
      name: 'Business',
      icon: 'business_center',
      description: 'Meetings and networking events',
      tooltip: 'Optimized for productive business travel with convenient amenities'
    },
    {
      id: 'couples',
      name: 'Couples',
      icon: 'favorite',
      description: 'Romantic getaways',
      tooltip: 'Romantic experiences and intimate settings for couples'
    },
    {
      id: 'adventure',
      name: 'Adventure',
      icon: 'terrain',
      description: 'Trekking and water sports',
      tooltip: 'Thrilling outdoor activities and adrenaline-pumping experiences'
    },
    {
      id: 'cultural',
      name: 'Cultural',
      icon: 'museum',
      description: 'Museums and historical sites',
      tooltip: 'Immersive cultural experiences and historical exploration'
    }
  ];

  selectTripType(tripType: string): void {
    this.showTravelCompanions = tripType === 'family';
    this.tripTypeSelected.emit(tripType);
  }

  onNext(): void {
    if (this.formGroup.valid) {
      this.nextStep.emit();
    }
  }
}