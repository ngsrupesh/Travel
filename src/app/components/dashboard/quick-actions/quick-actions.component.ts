import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';
import { MockDataService } from '../../../services/mock-data.service';
import { QuickAction } from '../../../models/dashboard.models';

@Component({
  selector: 'app-quick-actions',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatIconModule],
  templateUrl: './quick-actions.component.html',
  styleUrls: ['./quick-actions.component.css']
})
export class QuickActionsComponent implements OnInit {
  quickActions: QuickAction[] = [];

  constructor(
    private mockDataService: MockDataService,
    private router: Router
  ) {}

  ngOnInit() {
    this.mockDataService.getQuickActions().subscribe(actions => {
      this.quickActions = actions;
    });
  }

  handleAction(action: string) {
    switch (action) {
      case 'plan':
        this.router.navigate(['/itinerary']);
        break;
      case 'deals':
        this.router.navigate(['/marketplace']);
        break;
      case 'suggestions':
        // Handle AI suggestions
        break;
      case 'budget':
        // Handle budget tracking
        break;
    }
  }
}