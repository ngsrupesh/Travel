import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-delete-confirmation',
  standalone: true,
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule,
    MatIconModule
  ],
  template: `
    <div class="p-6">
      <div class="flex items-center gap-4 mb-6">
        <mat-icon class="text-red-500 text-3xl">warning</mat-icon>
        <h2 class="text-xl font-bold">Delete Profile</h2>
      </div>
      
      <p class="text-gray-600 mb-6">
        Are you sure you want to delete your profile? This action cannot be undone.
      </p>

      <div class="flex justify-end gap-4">
        <button mat-button (click)="onCancel()">Cancel</button>
        <button mat-raised-button color="warn" (click)="onConfirm()">
          Delete Profile
        </button>
      </div>
    </div>
  `
})
export class DeleteConfirmationComponent {
  constructor(private dialogRef: MatDialogRef<DeleteConfirmationComponent>) {}

  onConfirm(): void {
    this.dialogRef.close(true);
  }

  onCancel(): void {
    this.dialogRef.close(false);
  }
}