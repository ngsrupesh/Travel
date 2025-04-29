import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-activities-step',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    MatButtonModule
  ],
  templateUrl: './activities-step.component.html',
  styleUrls: ['./activities-step.component.css']
})
export class ActivitiesStepComponent {
  @Input() formGroup!: FormGroup;
  @Output() nextStep = new EventEmitter<void>();

  onNext() {
    if (this.formGroup.valid) {
      this.nextStep.emit();
    }
  }
}