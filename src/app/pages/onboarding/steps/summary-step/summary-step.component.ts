import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-summary-step',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule
  ],
  templateUrl: './summary-step.component.html',
  styleUrls: ['./summary-step.component.css']
})
export class SummaryStepComponent {
  @Input() basicInfo: any;
  @Input() travelPreferences: any;
  @Input() activities: any;
  @Input() requirements: any;
  @Output() submit = new EventEmitter<void>();
  @Output() edit = new EventEmitter<void>();

  getSelectedItems(obj: Record<string, boolean>): string[] {
    return Object.entries(obj)
      .filter(([_, value]) => value)
      .map(([key, _]) => key);
  }

  onSubmit() {
    this.submit.emit();
  }

  onEdit() {
    this.edit.emit();
  }
}