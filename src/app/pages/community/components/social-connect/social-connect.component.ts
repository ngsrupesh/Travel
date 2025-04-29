import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { MatTooltipModule } from '@angular/material/tooltip';

interface SocialPlatform {
  name: string;
  icon: string;
  color: string;
  isConnected: boolean;
  sharingOptions: string[];
}

@Component({
  selector: 'app-social-connect',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatChipsModule,
    MatTooltipModule
  ],
  templateUrl: './social-connect.component.html',
  styleUrls: ['./social-connect.component.css']
})
export class SocialConnectComponent {
  platforms: SocialPlatform[] = [
    {
      name: 'Instagram',
      icon: 'photo_camera',
      color: 'bg-pink-500',
      isConnected: false,
      sharingOptions: ['Trip highlights', 'Reels', 'Photos']
    },
    {
      name: 'Facebook',
      icon: 'facebook',
      color: 'bg-blue-600',
      isConnected: false,
      sharingOptions: ['Itinerary updates', 'Trip invites', 'Photo albums']
    },
    {
      name: 'WhatsApp',
      icon: 'chat',
      color: 'bg-green-500',
      isConnected: false,
      sharingOptions: ['Trip invites', 'Plan sharing', 'Group chats']
    },
    {
      name: 'X (Twitter)',
      icon: 'tag',
      color: 'bg-black',
      isConnected: false,
      sharingOptions: ['Trip updates', 'Travel tips', 'Location check-ins']
    },
    {
      name: 'Threads',
      icon: 'forum',
      color: 'bg-gray-900',
      isConnected: false,
      sharingOptions: ['Trip moments', 'Travel journal', 'Quick updates']
    }
  ];

  connectPlatform(platform: SocialPlatform): void {
    platform.isConnected = true;
  }

  disconnectPlatform(platform: SocialPlatform): void {
    platform.isConnected = false;
  }
}