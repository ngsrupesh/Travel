import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule, MatTabGroup } from '@angular/material/tabs';
import { TrendingItinerariesComponent } from './components/trending-itineraries/trending-itineraries.component';
import { TravelGroupsComponent } from './components/travel-groups/travel-groups.component';
import { UserProfilesComponent } from './components/user-profiles/user-profiles.component';
import { DiscussionFeedComponent } from './components/discussion-feed/discussion-feed.component';
import { SocialConnectComponent } from './components/social-connect/social-connect.component';
import { VerifiedGuidesComponent } from './components/verified-guides/verified-guides.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-community',
  standalone: true,
  imports: [
    CommonModule,
    MatTabsModule,
    MatIconModule,
    MatButtonModule,
    MatTooltipModule,
    MatInputModule,
    MatFormFieldModule,
    TrendingItinerariesComponent,
    SocialConnectComponent,
    TravelGroupsComponent,
    UserProfilesComponent,
    DiscussionFeedComponent,
    VerifiedGuidesComponent
  ],
  templateUrl: './community.component.html',
  styleUrls: ['./community.component.css']
})
export class CommunityComponent implements AfterViewInit {
  @ViewChild(MatTabGroup) tabGroup!: MatTabGroup;
  activeTabIndex = 0;

  ngAfterViewInit() {
    // Ensure the tab group is properly initialized before handling changes
    setTimeout(() => {
      if (this.tabGroup) {
        this.tabGroup.selectedIndex = this.activeTabIndex;
      }
    });
  }

  onTabChange(index: number) {
    if (this.tabGroup) {
      this.activeTabIndex = index;
    }
  }
}