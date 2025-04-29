import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-requirements-step',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatRadioModule,
    MatCheckboxModule,
    MatButtonModule
  ],
  templateUrl: './requirements-step.component.html',
  styleUrls: ['./requirements-step.component.css']
})
export class RequirementsStepComponent {
  @Input() formGroup!: FormGroup;
  @Output() nextStep = new EventEmitter<void>();

  onNext() {
    if (this.formGroup.valid) {
      this.nextStep.emit();
    }
  }
}