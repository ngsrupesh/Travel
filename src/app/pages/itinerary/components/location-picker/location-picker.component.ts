import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { Location } from '../../../../models/itinerary.models';

@Component({
  selector: 'app-location-picker',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatChipsModule
  ],
  templateUrl: './location-picker.component.html',
  styleUrls: ['./location-picker.component.css']
})
export class LocationPickerComponent {
  @Input() formGroup!: FormGroup;
  @Output() locationsSelected = new EventEmitter<Location[]>();
  @Output() nextStep = new EventEmitter<void>();
  @Output() prevStep = new EventEmitter<void>();

  selectedLocations: Location[] = [];
  searchText: string = '';
  showSuggestions: boolean = false;

  constructor() {
    console.log('[LocationPickerComponent] Initialized');
  }

  addSampleLocation(city: string) {
    console.log(`[LocationPickerComponent] Adding sample location (${city})`);
    let location: Location;
    
    switch(city) {
      case 'Paris':
        location = {
          city: 'Paris',
          country: 'France',
          coordinates: { lat: 48.8566, lng: 2.3522 }
        };
        break;
      case 'London':
        location = {
          city: 'London',
          country: 'United Kingdom',
          coordinates: { lat: 51.5074, lng: -0.1278 }
        };
        break;
      case 'Tokyo':
        location = {
          city: 'Tokyo',
          country: 'Japan',
          coordinates: { lat: 35.6762, lng: 139.6503 }
        };
        break;
      default:
        return;
    }

    if (!this.selectedLocations.some(loc => loc.city === location.city)) {
      this.addLocation(location);
      this.searchText = '';
      this.showSuggestions = false;
    }
  }

  addLocation(location: Location) {
    console.log('[LocationPickerComponent] Adding location:', location);
    this.selectedLocations.push(location);
    this.formGroup.patchValue({ destinations: this.selectedLocations });
    this.locationsSelected.emit(this.selectedLocations);
    console.log('[LocationPickerComponent] Updated locations:', this.selectedLocations);
  }

  removeLocation(index: number) {
    console.log('[LocationPickerComponent] Removing location at index:', index);
    this.selectedLocations.splice(index, 1);
    this.formGroup.patchValue({ destinations: this.selectedLocations });
    this.locationsSelected.emit(this.selectedLocations);
    console.log('[LocationPickerComponent] Updated locations:', this.selectedLocations);
  }

  onSearchInput() {
    this.showSuggestions = this.searchText.length > 0;
  }

  onNext() {
    console.log('[LocationPickerComponent] Next clicked, form valid:', this.formGroup.valid);
    console.log('[LocationPickerComponent] Selected locations:', this.selectedLocations);
    if (this.formGroup.valid && this.selectedLocations.length > 0) {
      this.nextStep.emit();
    }
  }

  onPrevious() {
    console.log('[LocationPickerComponent] Previous clicked');
    this.prevStep.emit();
  }
}