import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';

interface Post {
  id: string;
  title: string;
  author: string;
  avatar: string;
  content: string;
  comments: number;
  likes: number;
  shares: number;
  tags: string[];
}

@Component({
  selector: 'app-discussion-feed',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatChipsModule
  ],
  templateUrl: './discussion-feed.component.html',
  styleUrls: ['./discussion-feed.component.css']
})
export class DiscussionFeedComponent {
  posts: Post[] = [
    {
      id: '1',
      title: 'Best Budget-Friendly Destinations in Europe',
      author: '@TravelWithEmma',
      avatar: 'https://i.pravatar.cc/150?img=1',
      content: "After exploring Europe for 3 months on a budget, I have discovered some hidden gems that will not break the bank. From charming hostels in Porto to secret beaches in Croatia, here are my top picks for budget travelers!",
      comments: 12,
      likes: 45,
      shares: 8,
      tags: ['BudgetTravel', 'Europe', 'Backpacking']
    },
    {
      id: '2',
      title: 'Solo Travel Safety Tips for Women',
      author: '@NomadicNina',
      avatar: 'https://i.pravatar.cc/150?img=2',
      content: "As a solo female traveler who has visited over 30 countries, I want to share my essential safety tips. From choosing accommodations to navigating new cities, these insights will help you travel with confidence.",
      comments: 8,
      likes: 32,
      shares: 15,
      tags: ['SoloTravel', 'Safety', 'WomenWhoTravel']
    },
    {
      id: '3',
      title: 'Hidden Gems in Thailand',
      author: '@ExplorerMike',
      avatar: 'https://i.pravatar.cc/150?img=3',
      content: "Forget the tourist traps! I have spent months exploring Thailand's lesser-known spots. From secret waterfalls in Chiang Mai to untouched islands in the Andaman Sea, here is your guide to Thailand's hidden paradise.",
      comments: 20,
      likes: 60,
      shares: 12,
      tags: ['Thailand', 'HiddenGems', 'Adventure']
    }
  ];

  likePost(postId: string) {
    const post = this.posts.find(p => p.id === postId);
    if (post) {
      post.likes++;
    }
  }

  commentOnPost(postId: string) {
    console.log('Opening comments for post:', postId);
  }

  sharePost(postId: string) {
    console.log('Sharing post:', postId);
  }
}