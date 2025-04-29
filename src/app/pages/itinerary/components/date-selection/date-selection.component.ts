import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-date-selection',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './date-selection.component.html',
  styleUrls: ['./date-selection.component.css']
})
export class DateSelectionComponent {
  @Input() formGroup!: FormGroup;
  @Output() datesSelected = new EventEmitter<{ start: string; end: string }>();
  @Output() nextStep = new EventEmitter<void>();
  @Output() prevStep = new EventEmitter<void>();

  minDate = new Date();
  maxDate = new Date(new Date().setFullYear(new Date().getFullYear() + 2));

  getDurationInDays(): number {
    const startDate = this.formGroup.get('startDate')?.value;
    const endDate = this.formGroup.get('endDate')?.value;
    if (startDate && endDate) {
      const diffTime = Math.abs(endDate.getTime() - startDate.getTime());
      return Math.ceil(diffTime / (1000 * 60 * 60 * 24)) + 1;
    }
    return 0;
  }

  onDateChange() {
    const startDate = this.formGroup.get('startDate')?.value;
    const endDate = this.formGroup.get('endDate')?.value;
    
    if (startDate && endDate) {
      this.datesSelected.emit({
        start: startDate.toISOString(),
        end: endDate.toISOString()
      });
    }
  }

  onNext() {
    if (this.formGroup.valid) {
      this.nextStep.emit();
    }
  }

  onPrevious() {
    this.prevStep.emit();
  }
}