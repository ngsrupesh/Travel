import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatStepperModule } from '@angular/material/stepper';
import { BasicInfoStepComponent } from './steps/basic-info-step/basic-info-step.component';
import { TravelPreferencesStepComponent } from './steps/travel-preferences-step/travel-preferences-step.component';
import { ActivitiesStepComponent } from './steps/activities-step/activities-step.component';
import { RequirementsStepComponent } from './steps/requirements-step/requirements-step.component';
import { SummaryStepComponent } from './steps/summary-step/summary-step.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-onboarding',
  standalone: true,
  imports: [
    CommonModule,
    MatStepperModule,
    BasicInfoStepComponent,
    TravelPreferencesStepComponent,
    ActivitiesStepComponent,
    RequirementsStepComponent,
    SummaryStepComponent
  ],
  templateUrl: './onboarding.component.html',
  styleUrls: ['./onboarding.component.css']
})
export class OnboardingComponent implements OnInit {
  basicInfoForm: FormGroup = this.initializeBasicInfoForm();
  travelPreferencesForm: FormGroup = this.initializeTravelPreferencesForm();
  activitiesForm: FormGroup = this.initializeActivitiesForm();
  requirementsForm: FormGroup = this.initializeRequirementsForm();

  constructor(
    private fb: FormBuilder,
    private router: Router
  ) {}

  ngOnInit() {}

  private initializeBasicInfoForm(): FormGroup {
    return this.fb.group({
      gender: ['', Validators.required],
      familyTravel: ['', Validators.required],
      travelCompanions: this.fb.group({
        kids: [false],
        spouse: [false],
        parents: [false],
        otherRelatives: [false]
      }),
      travelPurpose: ['', Validators.required],
      travelFrequency: ['', Validators.required]
    });
  }

  private initializeTravelPreferencesForm(): FormGroup {
    return this.fb.group({
      annualBudget: ['', Validators.required],
      travelStyle: this.fb.group({
        luxury: [false],
        budget: [false],
        adventure: [false],
        cultural: [false],
        relaxation: [false]
      }),
      weatherPreference: ['', Validators.required],
      transportationModes: this.fb.group({
        flight: [false],
        train: [false],
        roadTrip: [false],
        cruise: [false]
      })
    });
  }

  private initializeActivitiesForm(): FormGroup {
    return this.fb.group({
      activities: this.fb.group({
        sightseeing: [false],
        trekking: [false],
        shopping: [false],
        foodAndDrink: [false],
        nightlife: [false]
      }),
      travelPersonality: this.fb.group({
        explorer: [false],
        relaxer: [false],
        cultureEnthusiast: [false],
        socialTraveler: [false],
        planner: [false],
        spontaneous: [false]
      })
    });
  }

  private initializeRequirementsForm(): FormGroup {
    return this.fb.group({
      dietaryPreferences: ['', Validators.required],
      accessibility: this.fb.group({
        wheelchair: [false],
        visualImpairment: [false],
        hearingImpairment: [false]
      })
    });
  }

  onSubmit() {
    if (this.basicInfoForm.valid && 
        this.travelPreferencesForm.valid && 
        this.activitiesForm.valid && 
        this.requirementsForm.valid) {
      
      const formData = {
        basicInfo: this.basicInfoForm.value,
        travelPreferences: this.travelPreferencesForm.value,
        activities: this.activitiesForm.value,
        requirements: this.requirementsForm.value
      };

      console.log('Form submitted:', formData);
      // Here you would typically send this data to your backend
      
      // Navigate to dashboard after successful submission
      this.router.navigate(['/dashboard']);
    }
  }
}