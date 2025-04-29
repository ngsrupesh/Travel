import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';

@Component({
  selector: 'app-call-to-action',
  standalone: true,
  imports: [CommonModule, MatButtonModule],
  templateUrl: './call-to-action.component.html',
  styleUrls: ['./call-to-action.component.css']
})
export class CallToActionComponent {
  constructor(private router: Router) {}

  navigateToOnboarding() {
    this.router.navigate(['/onboarding']);
  }
}