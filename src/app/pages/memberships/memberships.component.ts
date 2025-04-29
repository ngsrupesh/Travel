import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { MatChipsModule } from '@angular/material/chips';
import { MatDialogModule } from '@angular/material/dialog';
import { MatBadgeModule } from '@angular/material/badge';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { FormsModule } from '@angular/forms';
import { ConnectedMembershipsComponent } from './components/connected-memberships/connected-memberships.component';
import { ExclusivePerksComponent } from './components/exclusive-perks/exclusive-perks.component';
import { NotificationPreferencesComponent } from './components/notification-preferences/notification-preferences.component';

@Component({
  selector: 'app-memberships',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatTabsModule,
    MatChipsModule,
    MatDialogModule,
    MatBadgeModule,
    MatSlideToggleModule,
    FormsModule,
    ConnectedMembershipsComponent,
    ExclusivePerksComponent,
    NotificationPreferencesComponent
  ],
  templateUrl: './memberships.component.html',
  styleUrls: ['./memberships.component.css']
})
export class MembershipsComponent {}