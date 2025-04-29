import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-travel-preferences-step',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatRadioModule,
    MatCheckboxModule,
    MatButtonModule,
    MatSelectModule
  ],
  templateUrl: './travel-preferences-step.component.html',
  styleUrls: ['./travel-preferences-step.component.css']
})
export class TravelPreferencesStepComponent {
  @Input() formGroup!: FormGroup;
  @Output() nextStep = new EventEmitter<void>();

  budgetRanges = [
    { value: 'under_1000', label: '<$1,000' },
    { value: '1000_5000', label: '$1,000 - $5,000' },
    { value: '5000_10000', label: '$5,000 - $10,000' },
    { value: 'over_10000', label: '$10,000+' }
  ];

  onNext() {
    if (this.formGroup.valid) {
      this.nextStep.emit();
    }
  }
}