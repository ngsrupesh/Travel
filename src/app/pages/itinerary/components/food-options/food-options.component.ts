import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTooltipModule } from '@angular/material/tooltip';
import { DietaryPreference } from '../../../../models/itinerary.models';

@Component({
  selector: 'app-food-options',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatChipsModule,
    MatSelectModule,
    MatFormFieldModule,
    MatTooltipModule
  ],
  templateUrl: './food-options.component.html',
  styleUrls: ['./food-options.component.css']
})
export class FoodOptionsComponent {
  @Input() formGroup!: FormGroup;
  @Output() nextStep = new EventEmitter<void>();
  @Output() prevStep = new EventEmitter<void>();

  cuisineOptions: string[] = [
    'Indian', 'Thai', 'Chinese', 'Mexican', 'Italian', 'Mediterranean',
    'Japanese', 'French', 'Greek', 'Vietnamese', 'Korean', 'Middle Eastern'
  ];

  dietTypes: DietaryPreference[] = [
    {
      id: 'vegetarian',
      name: 'Vegetarian',
      icon: '🥗',
      description: 'No meat, fish, or poultry'
    },
    {
      id: 'vegan',
      name: 'Vegan',
      icon: '🌱',
      description: 'No animal products'
    },
    {
      id: 'eggetarian',
      name: 'Eggetarian',
      icon: '🥚',
      description: 'Vegetarian + eggs'
    },
    {
      id: 'non-veg',
      name: 'Non-Vegetarian',
      icon: '🍖',
      description: 'All types of food'
    }
  ];

  religiousPreferences: string[] = [
    'Halal', 'Kosher', 'Jain'
  ];

  allergyOptions: string[] = [
    'Nut-Free', 'Gluten-Free', 'Dairy-Free', 'Shellfish-Free',
    'Egg-Free', 'Soy-Free'
  ];

  spiceLevels: string[] = [
    'Mild', 'Medium', 'Spicy', 'Extra Spicy'
  ];

  onNext() {
    if (this.formGroup.valid) {
      this.nextStep.emit();
    }
  }

  onPrevious() {
    this.prevStep.emit();
  }
}