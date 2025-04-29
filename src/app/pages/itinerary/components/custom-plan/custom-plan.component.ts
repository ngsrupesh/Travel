import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { CdkDragDrop, DragDropModule, moveItemInArray } from '@angular/cdk/drag-drop';
import { ItineraryPlan, Activity } from '../../../../models/itinerary.models';

type TransportMode = 'walking' | 'train' | 'car' | 'ferry';
type TrafficLevel = 'low' | 'medium' | 'high';

@Component({
  selector: 'app-custom-plan',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatChipsModule,
    MatListModule,
    MatMenuModule,
    DragDropModule
  ],
  templateUrl: './custom-plan.component.html',
  styleUrls: ['./custom-plan.component.css']
})
export class CustomPlanComponent implements OnInit {
  @Input() initialPlan!: ItineraryPlan;
  @Output() planFinalized = new EventEmitter<ItineraryPlan>();
  @Output() prevStep = new EventEmitter<void>();

  customizedPlan: ItineraryPlan | null = null;
  selectedTransport: TransportMode = 'walking';

  // Mock weather data
  private weatherData = {
    morning: { temp: '18°C', condition: 'Sunny' },
    afternoon: { temp: '24°C', condition: 'Partly Cloudy' },
    evening: { temp: '20°C', condition: 'Clear' }
  };

  // Water routes - could be expanded based on actual data
  private waterRoutes = [
    { from: 'Venice', to: 'Murano' },
    { from: 'Athens', to: 'Santorini' },
    { from: 'Hong Kong', to: 'Macau' }
  ];

  ngOnInit() {
    console.log('[CustomPlanComponent] Initializing with plan:', this.initialPlan);
    this.customizedPlan = JSON.parse(JSON.stringify(this.initialPlan));
    this.sortActivitiesByDistance();
  }

  getWeatherInfo(time: string | undefined): string {
    if (!time) return `${this.weatherData.morning.temp} - ${this.weatherData.morning.condition}`;
    
    const hour = parseInt(time.split(':')[0]);
    if (hour >= 6 && hour < 12) {
      return `${this.weatherData.morning.temp} - ${this.weatherData.morning.condition}`;
    } else if (hour >= 12 && hour < 18) {
      return `${this.weatherData.afternoon.temp} - ${this.weatherData.afternoon.condition}`;
    } else {
      return `${this.weatherData.evening.temp} - ${this.weatherData.evening.condition}`;
    }
  }

  getTrafficInfo(time: string | undefined): string {
    if (!time) return 'Light traffic';
    
    const trafficLevel = this.getTrafficLevel(time);
    switch (trafficLevel) {
      case 'low': return 'Light traffic';
      case 'medium': return 'Moderate traffic';
      case 'high': return 'Heavy traffic';
      default: return 'Light traffic';
    }
  }

  getTrafficClass(time: string | undefined): string {
    if (!time) return 'traffic-low';
    return `traffic-${this.getTrafficLevel(time)}`;
  }

  private getTrafficLevel(time: string): TrafficLevel {
    const hour = parseInt(time.split(':')[0]);
    
    // Morning rush hour
    if (hour >= 7 && hour <= 9) {
      return 'high';
    }
    // Evening rush hour
    if (hour >= 16 && hour <= 18) {
      return 'high';
    }
    // Mid-day
    if (hour >= 10 && hour <= 15) {
      return 'medium';
    }
    // Early morning or late evening
    return 'low';
  }

  onActivityDrop(event: CdkDragDrop<any[]>, dayIndex: number) {
    if (this.customizedPlan) {
      const activities = this.customizedPlan.dailyItineraries[dayIndex].activities;
      moveItemInArray(activities, event.previousIndex, event.currentIndex);
      this.updateDistances(dayIndex);
    }
  }

  isWaterRoute(activity: Activity): boolean {
    if (!this.customizedPlan) return false;
    
    const currentCity = activity.location.city;
    const dayIndex = this.customizedPlan.dailyItineraries.findIndex(day => 
      day.activities.includes(activity)
    );
    
    if (dayIndex === -1) return false;
    
    const activityIndex = this.customizedPlan.dailyItineraries[dayIndex].activities.indexOf(activity);
    const previousLocation = activityIndex > 0 
      ? this.customizedPlan.dailyItineraries[dayIndex].activities[activityIndex - 1].location.city
      : this.customizedPlan.dailyItineraries[dayIndex].location.city;

    return this.waterRoutes.some(route => 
      (route.from === previousLocation && route.to === currentCity) ||
      (route.from === currentCity && route.to === previousLocation)
    );
  }

  getFerryInfo(distance: number): string {
    const timeInMinutes = Math.round((distance / 20) * 60);
    return `${this.formatDistance(distance)} - ${timeInMinutes} min`;
  }

  private sortActivitiesByDistance() {
    if (this.customizedPlan) {
      this.customizedPlan.dailyItineraries.forEach((day, index) => {
        day.activities.sort((a, b) => {
          const distanceA = this.calculateDistance(
            day.location.coordinates?.lat || 0,
            day.location.coordinates?.lng || 0,
            a.location.coordinates?.lat || 0,
            a.location.coordinates?.lng || 0
          );
          const distanceB = this.calculateDistance(
            day.location.coordinates?.lat || 0,
            day.location.coordinates?.lng || 0,
            b.location.coordinates?.lat || 0,
            b.location.coordinates?.lng || 0
          );
          return distanceA - distanceB;
        });
        this.updateDistances(index);
      });
    }
  }

  private updateDistances(dayIndex: number) {
    if (!this.customizedPlan) return;

    const activities = this.customizedPlan.dailyItineraries[dayIndex].activities;
    const cityLocation = this.customizedPlan.dailyItineraries[dayIndex].location;

    activities.forEach((activity, index) => {
      if (index === 0) {
        activity.distanceFromPrevious = this.calculateDistance(
          cityLocation.coordinates?.lat || 0,
          cityLocation.coordinates?.lng || 0,
          activity.location.coordinates?.lat || 0,
          activity.location.coordinates?.lng || 0
        );
      } else {
        activity.distanceFromPrevious = this.calculateDistance(
          activities[index - 1].location.coordinates?.lat || 0,
          activities[index - 1].location.coordinates?.lng || 0,
          activity.location.coordinates?.lat || 0,
          activity.location.coordinates?.lng || 0
        );
      }
    });
  }

  private calculateDistance(lat1: number, lon1: number, lat2: number, lon2: number): number {
    const R = 6371;
    const dLat = this.deg2rad(lat2 - lat1);
    const dLon = this.deg2rad(lon2 - lon1);
    const a = 
      Math.sin(dLat/2) * Math.sin(dLat/2) +
      Math.cos(this.deg2rad(lat1)) * Math.cos(this.deg2rad(lat2)) * 
      Math.sin(dLon/2) * Math.sin(dLon/2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    const distance = R * c;
    return Math.round(distance * 10) / 10;
  }

  private deg2rad(deg: number): number {
    return deg * (Math.PI/180);
  }

  formatDistance(distance: number | undefined): string {
    if (!distance) return 'N/A';
    if (distance < 1) {
      return `${Math.round(distance * 1000)}m`;
    }
    return `${distance}km`;
  }

  getTransportIcon(mode: TransportMode): string {
    switch (mode) {
      case 'walking': return 'directions_walk';
      case 'train': return 'train';
      case 'car': return 'directions_car';
      case 'ferry': return 'directions_boat';
      default: return 'directions_walk';
    }
  }

  setTransport(mode: TransportMode) {
    this.selectedTransport = mode;
  }

  getTrainInfo(distance: number): string {
    const timeInMinutes = Math.round((distance / 60) * 60);
    return `${this.formatDistance(distance)} - ${timeInMinutes} min`;
  }

  getDrivingInfo(distance: number): string {
    const timeInMinutes = Math.round((distance / 30) * 60);
    return `${this.formatDistance(distance)} - ${timeInMinutes} min`;
  }

  finalizePlan() {
    console.log('[CustomPlanComponent] Finalizing plan:', this.customizedPlan);
    if (this.customizedPlan) {
      this.planFinalized.emit(this.customizedPlan);
    }
  }

  onPrevious() {
    console.log('[CustomPlanComponent] Going back to previous step');
    this.prevStep.emit();
  }
}