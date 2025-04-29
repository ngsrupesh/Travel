import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-payment',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatSelectModule
  ],
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  paymentForm: FormGroup;
  bookingDetails: any;
  isProcessing = false;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.paymentForm = this.createForm();
  }

  ngOnInit() {
    // Get booking details from route state
    const navigation = this.router.getCurrentNavigation();
    if (navigation?.extras.state) {
      this.bookingDetails = navigation.extras.state['bookingDetails'];
    }
  }

  private createForm(): FormGroup {
    return this.fb.group({
      cardName: ['', Validators.required],
      cardNumber: ['', [Validators.required, Validators.pattern('^[0-9]{16}$')]],
      expiryMonth: ['', [Validators.required, Validators.min(1), Validators.max(12)]],
      expiryYear: ['', [Validators.required, Validators.min(2024)]],
      cvv: ['', [Validators.required, Validators.pattern('^[0-9]{3,4}$')]],
      saveCard: [false]
    });
  }

  onSubmit() {
    if (this.paymentForm.valid) {
      this.isProcessing = true;
      // Simulate payment processing
      setTimeout(() => {
        this.isProcessing = false;
        this.router.navigate(['/dashboard'], {
          state: { paymentSuccess: true }
        });
      }, 2000);
    }
  }

  onCancel() {
    this.router.navigate(['/marketplace']);
  }

  getErrorMessage(field: string): string {
    const control = this.paymentForm.get(field);
    if (control?.hasError('required')) {
      return 'This field is required';
    }
    if (control?.hasError('pattern')) {
      switch (field) {
        case 'cardNumber':
          return 'Please enter a valid 16-digit card number';
        case 'cvv':
          return 'Please enter a valid CVV';
        default:
          return 'Invalid format';
      }
    }
    return '';
  }
}