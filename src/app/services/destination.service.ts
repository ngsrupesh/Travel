import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DestinationService {
  private mockDestination = {
    id: 1,
    name: 'Paris',
    description: 'The capital of France, known for its art, fashion, and culture.',
    image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34',
    location: {
      latitude: 48.8566,
      longitude: 2.3522
    },
    rating: 4.8,
    visitorsCount: '10M+',
    hotels: '1,000+',
    weather: {
      temperature: '15°C',
      humidity: '60%',
      condition: 'Cloudy'
    },
    reviews: [
      {
        user: 'Alice',
        rating: 5,
        comment: 'Amazing experience, loved the Eiffel Tower!'
      },
      {
        user: 'Bob',
        rating: 4,
        comment: 'Great food and history, but a bit crowded.'
      }
    ],
    nearbyPlaces: [
      {
        name: 'Le Meurice Hotel',
        type: 'Hotel',
        rating: 4.8,
        distance: '500m'
      },
      {
        name: 'Café de Flore',
        type: 'Restaurant',
        rating: 4.5,
        distance: '1km'
      }
    ]
  };

  getDestination(id: string): Observable<any> {
    // Simulate API call
    return of(this.mockDestination).pipe(delay(1000));
  }
}