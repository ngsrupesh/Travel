import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-basic-info-step',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatRadioModule,
    MatCheckboxModule,
    MatButtonModule
  ],
  templateUrl: './basic-info-step.component.html',
  styleUrls: ['./basic-info-step.component.css']
})
export class BasicInfoStepComponent {
  @Input() formGroup!: FormGroup;
  @Output() nextStep = new EventEmitter<void>();

  onNext() {
    if (this.formGroup.valid) {
      this.nextStep.emit();
    }
  }
}