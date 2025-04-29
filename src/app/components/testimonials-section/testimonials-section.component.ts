import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-testimonials-section',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  templateUrl: './testimonials-section.component.html',
  styleUrls: ['./testimonials-section.component.css']
})
export class TestimonialsSectionComponent {
  testimonials = [
    {
      quote: "This platform made my trip seamless! The AI itinerary was spot on!",
      author: "Emma",
      role: "Solo Traveler",
      avatar: "https://i.pravatar.cc/150?img=1"
    },
    {
      quote: "Loved the personalized recommendations. Best vacation ever!",
      author: "John & Lisa",
      role: "Honeymooners",
      avatar: "https://i.pravatar.cc/150?img=2"
    },
    {
      quote: "Saved so much time planning my business trip. Highly recommend!",
      author: "Michael",
      role: "Frequent Flyer",
      avatar: "https://i.pravatar.cc/150?img=3"
    }
  ];
}