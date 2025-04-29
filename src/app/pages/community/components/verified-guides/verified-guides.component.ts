import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';

interface Guide {
  id: string;
  name: string;
  avatar: string;
  location: {
    city: string;
    country: string;
  };
  rating: number;
  reviewCount: number;
  yearsExperience: number;
  bio: string;
  specialties: string[];
  languages: string[];
  availability: {
    nextAvailable: Date;
    typicalResponse: string;
  };
  hourlyRate: number;
  isVerified: boolean;
}

interface ExperienceOption {
  value: number;
  label: string;
}

@Component({
  selector: 'app-verified-guides',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatIconModule,
    MatChipsModule,
    MatCardModule,
    MatButtonModule,
    MatTooltipModule
  ],
  templateUrl: './verified-guides.component.html',
  styleUrls: ['./verified-guides.component.css']
})
export class VerifiedGuidesComponent {
  guides: Guide[] = [
    {
      id: '1',
      name: 'John Smith',
      avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg',
      location: {
        city: 'Paris',
        country: 'France'
      },
      rating: 4.8,
      reviewCount: 127,
      yearsExperience: 5,
      bio: 'Experienced guide with deep knowledge of Parisian art and culture',
      specialties: ['Art & Museums', 'Architecture'],
      languages: ['English', 'French'],
      availability: {
        nextAvailable: new Date('2025-01-15'),
        typicalResponse: '< 2 hours'
      },
      hourlyRate: 45,
      isVerified: true
    },
    {
      id: '2',
      name: 'Maria Rodriguez',
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg',
      location: {
        city: 'Barcelona',
        country: 'Spain'
      },
      rating: 4.9,
      reviewCount: 203,
      yearsExperience: 7,
      bio: 'Passionate about sharing Spanish culture, history, and culinary traditions',
      specialties: ['Food & Culinary', 'History & Heritage'],
      languages: ['English', 'Spanish', 'Catalan'],
      availability: {
        nextAvailable: new Date('2025-02-05'),
        typicalResponse: '< 1 hour'
      },
      hourlyRate: 50,
      isVerified: true
    }
  ];

  filters = {
    experience: [],
    specialties: [],
    languages: [],
    location: null as string | null,
    rating: null as number | null
  };

  experienceOptions: ExperienceOption[] = [
    { value: 1, label: '1+ years' },
    { value: 3, label: '3+ years' },
    { value: 5, label: '5+ years' },
    { value: 10, label: '10+ years' }
  ];

  specialtyOptions: string[] = [
    'Art & Museums',
    'Architecture',
    'Food & Culinary',
    'History & Heritage',
    'Adventure & Sports',
    'Nature & Wildlife',
    'Photography',
    'Local Culture'
  ];

  languageOptions: string[] = [
    'English',
    'Spanish',
    'French',
    'German',
    'Italian',
    'Portuguese',
    'Chinese',
    'Japanese'
  ];

  bookGuide(guideId: string): void {
    console.log(`Booking guide with ID: ${guideId}`);
    // Implementation for booking a guide would go here
  }

  contactGuide(guideId: string): void {
    console.log(`Contacting guide with ID: ${guideId}`);
    // Implementation for contacting a guide would go here
  }

  viewProfile(guideId: string): void {
    console.log(`Viewing profile of guide with ID: ${guideId}`);
    // Implementation for viewing a guide's profile would go here
  }
}