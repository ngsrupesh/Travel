import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-user-reviews',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, MatIconModule],
  template: `
    <div class="reviews-container">
      <div class="reviews-header">
        <h3>User Reviews</h3>
        <button mat-raised-button color="primary">Write a Review</button>
      </div>
      
      <div class="reviews-list">
        <mat-card *ngFor="let review of reviews" class="review-card">
          <mat-card-header>
            <mat-card-title>{{review.user}}</mat-card-title>
            <div class="rating">
              <mat-icon *ngFor="let star of [].constructor(review.rating)" class="star-icon">star</mat-icon>
            </div>
          </mat-card-header>
          <mat-card-content>
            <p>{{review.comment}}</p>
          </mat-card-content>
        </mat-card>
      </div>
    </div>
  `,
  styles: [`
    .reviews-container {
      @apply space-y-6;
    }
    .reviews-header {
      @apply flex justify-between items-center mb-6;
    }
    .reviews-header h3 {
      @apply text-xl font-semibold text-gray-900;
    }
    .reviews-list {
      @apply space-y-4;
    }
    .review-card {
      @apply hover:shadow-md transition-shadow;
    }
    .rating {
      @apply flex gap-1 mt-2;
    }
    .star-icon {
      @apply text-yellow-500;
    }
  `]
})
export class UserReviewsComponent {
  @Input() destinationId!: number;
  @Input() reviews: any[] = [];
}