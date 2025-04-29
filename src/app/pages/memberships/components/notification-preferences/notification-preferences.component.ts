import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';

interface NotificationSetting {
  id: string;
  title: string;
  description: string;
  enabled: boolean;
  icon: string;
}

@Component({
  selector: 'app-notification-preferences',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatSlideToggleModule,
    MatIconModule,
    FormsModule
  ],
  templateUrl: './notification-preferences.component.html',
  styleUrls: ['./notification-preferences.component.css']
})
export class NotificationPreferencesComponent {
  settings: NotificationSetting[] = [
    {
      id: 'expiring-points',
      title: 'Expiring Points',
      description: 'Get notified when your points are about to expire',
      enabled: true,
      icon: 'schedule'
    },
    {
      id: 'new-deals',
      title: 'New Deals',
      description: 'Receive alerts for new deals available through your memberships',
      enabled: true,
      icon: 'local_offer'
    },
    {
      id: 'tier-upgrade',
      title: 'Tier Upgrade Eligibility',
      description: "Get notified when you're close to reaching the next membership tier",
      enabled: true,
      icon: 'upgrade'
    },
    {
      id: 'point-balance',
      title: 'Point Balance Updates',
      description: 'Receive monthly updates about your points balance',
      enabled: false,
      icon: 'account_balance'
    }
  ];

  onToggleChange(setting: NotificationSetting) {
    console.log(`${setting.title} notifications ${setting.enabled ? 'enabled' : 'disabled'}`);
  }
}