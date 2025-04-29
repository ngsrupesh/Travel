import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatStepperModule } from '@angular/material/stepper';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { TripTypeComponent } from './components/trip-type/trip-type.component';
import { FoodOptionsComponent } from './components/food-options/food-options.component';
import { DateSelectionComponent } from './components/date-selection/date-selection.component';
import { LocationPickerComponent } from './components/location-picker/location-picker.component';
import { AIRecommendationsComponent } from './components/ai-recommendations/ai-recommendations.component';
import { CustomPlanComponent } from './components/custom-plan/custom-plan.component';
import { TripSummaryComponent } from './components/trip-summary/trip-summary.component';
import { ItineraryPlan, Location } from '../../models/itinerary.models';

interface DailyActivities {
  morning: Record<string, string>;
  afternoon: Record<string, string>;
  evening: Record<string, string>;
  coordinates: Record<string, { lat: number; lng: number; }>;
}

@Component({
  selector: 'app-itinerary',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatStepperModule,
    TripTypeComponent,
    FoodOptionsComponent,
    DateSelectionComponent,
    LocationPickerComponent,
    AIRecommendationsComponent,
    CustomPlanComponent,
    TripSummaryComponent
  ],
  templateUrl: './itinerary.component.html',
  styleUrls: ['./itinerary.component.css']
})
export class ItineraryComponent {
  showSummary = false;
  tripTypeForm: FormGroup = this.fb.group({
    tripType: ['', Validators.required]
  });

  dateSelectionForm: FormGroup = this.fb.group({
    startDate: ['', Validators.required],
    endDate: ['', Validators.required]
  });

  locationForm: FormGroup = this.fb.group({
    destinations: [[] as Location[], Validators.required]
  });

  foodOptionsForm: FormGroup = this.fb.group({
    cuisinePreferences: [[], Validators.required],
    dietType: ['', Validators.required],
    religiousPreferences: [[]],
    allergyAwareness: [[]],
    spiceLevel: ['', Validators.required]
  });

  generatedPlan: ItineraryPlan | null = null;

  private activities: DailyActivities[] = [
    {
      morning: {
        sightseeing: 'City Walking Tour',
        cultural: 'Museum Visit',
        adventure: 'Mountain Hiking',
        relaxation: 'Spa Treatment'
      },
      afternoon: {
        sightseeing: 'Local Market Visit',
        cultural: 'Cooking Class',
        adventure: 'Rock Climbing',
        relaxation: 'Beach Time'
      },
      evening: {
        sightseeing: 'Sunset Cruise',
        cultural: 'Traditional Dance Show',
        adventure: 'Night Safari',
        relaxation: 'Fine Dining'
      },
      coordinates: {
        'City Walking Tour': { lat: 51.5074, lng: -0.1278 },
        'Museum Visit': { lat: 51.5194, lng: -0.1270 },
        'Local Market Visit': { lat: 51.5120, lng: -0.1190 },
        'Cooking Class': { lat: 51.5130, lng: -0.1280 },
        'Sunset Cruise': { lat: 51.5080, lng: -0.1220 },
        'Traditional Dance Show': { lat: 51.5100, lng: -0.1260 }
      }
    },
    {
      morning: {
        sightseeing: 'Historical District Tour',
        cultural: 'Art Gallery Visit',
        adventure: 'Kayaking',
        relaxation: 'Yoga Session'
      },
      afternoon: {
        sightseeing: 'Botanical Gardens',
        cultural: 'Pottery Workshop',
        adventure: 'Zip Lining',
        relaxation: 'Pool Side Relaxation'
      },
      evening: {
        sightseeing: 'City Lights Tour',
        cultural: 'Local Music Concert',
        adventure: 'Stargazing Trek',
        relaxation: 'Rooftop Lounge'
      },
      coordinates: {
        'Historical District Tour': { lat: 51.5138, lng: -0.1320 },
        'Art Gallery Visit': { lat: 51.5090, lng: -0.1280 },
        'Botanical Gardens': { lat: 51.5150, lng: -0.1220 },
        'Pottery Workshop': { lat: 51.5160, lng: -0.1240 },
        'City Lights Tour': { lat: 51.5170, lng: -0.1260 },
        'Local Music Concert': { lat: 51.5180, lng: -0.1280 }
      }
    }
  ];

  constructor(private fb: FormBuilder) {
    console.log('[ItineraryComponent] Initialized');
  }

  onTripTypeSelected(tripType: string) {
    console.log('[ItineraryComponent] Trip type selected:', tripType);
    this.tripTypeForm.patchValue({ tripType });
  }

  onDatesSelected(dates: { start: string; end: string }) {
    console.log('[ItineraryComponent] Dates selected:', dates);
    this.dateSelectionForm.patchValue({
      startDate: new Date(dates.start),
      endDate: new Date(dates.end)
    });
  }

  onLocationsSelected(locations: Location[]) {
    console.log('[ItineraryComponent] Locations selected:', locations);
    this.locationForm.patchValue({ destinations: locations });
  }

  generateItinerary() {
    console.log('[ItineraryComponent] Generating itinerary...');
    
    if (!this.foodOptionsForm.valid) {
      console.error('[ItineraryComponent] Food options form is invalid');
      return;
    }

    const itineraryData = {
      ...this.tripTypeForm.value,
      ...this.dateSelectionForm.value,
      ...this.locationForm.value,
      ...this.foodOptionsForm.value
    };

    // Calculate number of days
    const startDate = new Date(itineraryData.startDate);
    const endDate = new Date(itineraryData.endDate);
    const daysDiff = Math.ceil((endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24)) + 1;

    // Create daily itineraries for each day
    const dailyItineraries = Array.from({ length: daysDiff }, (_, index) => {
      const currentDate = new Date(startDate);
      currentDate.setDate(startDate.getDate() + index);

      // Rotate through destinations if multiple are selected
      const destinationIndex = index % itineraryData.destinations.length;
      const location = itineraryData.destinations[destinationIndex];

      return {
        date: currentDate.toISOString(),
        location: location,
        activities: this.generateDailyActivities(location, index)
      };
    });

    // Create the complete itinerary plan
    this.generatedPlan = {
      tripType: itineraryData.tripType,
      startDate: itineraryData.startDate,
      endDate: itineraryData.endDate,
      destinations: itineraryData.destinations,
      preferences: {
        activities: [],
        budget: 'moderate',
        pace: 'moderate',
        food: {
          cuisinePreferences: itineraryData.cuisinePreferences || [],
          dietType: itineraryData.dietType || '',
          religiousPreferences: itineraryData.religiousPreferences || [],
          allergyAwareness: itineraryData.allergyAwareness || [],
          spiceLevel: itineraryData.spiceLevel || ''
        }
      },
      dailyItineraries: dailyItineraries
    };

    console.log('[ItineraryComponent] Generated plan:', this.generatedPlan);
  }

  private generateDailyActivities(location: Location, dayIndex: number) {
    const activityTypes = ['sightseeing', 'cultural', 'adventure', 'relaxation'] as const;
    type ActivityType = typeof activityTypes[number];
    
    // Use different activity sets for variety
    const activitySetIndex = dayIndex % this.activities.length;
    const selectedType = activityTypes[dayIndex % activityTypes.length];
    const dayActivities = [];

    // Morning Activity
    const morningActivity = this.activities[activitySetIndex].morning[selectedType];
    const morningCoords = this.activities[activitySetIndex].coordinates[morningActivity];
    dayActivities.push({
      id: `${dayIndex}-1`,
      name: morningActivity,
      location: {
        ...location,
        coordinates: morningCoords || location.coordinates
      },
      duration: 180,
      startTime: '09:00',
      category: selectedType,
      description: `Start your day with ${morningActivity} in ${location.city}`
    });

    // Afternoon Activity
    const afternoonActivity = this.activities[activitySetIndex].afternoon[selectedType];
    const afternoonCoords = this.activities[activitySetIndex].coordinates[afternoonActivity];
    dayActivities.push({
      id: `${dayIndex}-2`,
      name: afternoonActivity,
      location: {
        ...location,
        coordinates: afternoonCoords || location.coordinates
      },
      duration: 180,
      startTime: '14:00',
      category: selectedType,
      description: `Experience ${afternoonActivity} in ${location.city}`
    });

    // Evening Activity
    const eveningActivity = this.activities[activitySetIndex].evening[selectedType];
    const eveningCoords = this.activities[activitySetIndex].coordinates[eveningActivity];
    dayActivities.push({
      id: `${dayIndex}-3`,
      name: eveningActivity,
      location: {
        ...location,
        coordinates: eveningCoords || location.coordinates
      },
      duration: 180,
      startTime: '19:00',
      category: selectedType,
      description: `End your day with ${eveningActivity} in ${location.city}`
    });

    return dayActivities;
  }

  finalizePlan(plan: ItineraryPlan) {
    console.log('[ItineraryComponent] Finalizing plan:', plan);
    this.generatedPlan = plan;
    this.showSummary = true;
  }
}