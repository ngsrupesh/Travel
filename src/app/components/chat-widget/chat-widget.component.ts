import { Component, OnInit, ViewChild, ElementRef, AfterViewChecked } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';

interface ChatMessage {
  text: string;
  sender: 'user' | 'agent';
  timestamp: Date;
}

@Component({
  selector: 'app-chat-widget',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    FormsModule
  ],
  templateUrl: './chat-widget.component.html',
  styleUrls: ['./chat-widget.component.css']
})
export class ChatWidgetComponent implements OnInit, AfterViewChecked {
  @ViewChild('messagesContainer') private messagesContainer!: ElementRef;
  
  isOpen = false;
  messages: ChatMessage[] = [];
  newMessage = '';
  isTyping = false;

  ngOnInit() {
    // Add initial welcome message
    this.addMessage('Hello! 👋 How can we help you today?', 'agent');
  }

  ngAfterViewChecked() {
    this.scrollToBottom();
  }

  toggleChat() {
    this.isOpen = !this.isOpen;
    if (this.isOpen) {
      setTimeout(() => this.scrollToBottom(), 100);
    }
  }

  sendMessage() {
    if (this.newMessage.trim()) {
      this.addMessage(this.newMessage, 'user');
      
      // Show typing indicator
      this.isTyping = true;
      
      // Simulate agent response
      setTimeout(() => {
        this.isTyping = false;
        this.addMessage(this.getAutoResponse(), 'agent');
      }, 1500);

      this.newMessage = '';
    }
  }

  private addMessage(text: string, sender: 'user' | 'agent') {
    this.messages.push({
      text,
      sender,
      timestamp: new Date()
    });
  }

  private scrollToBottom(): void {
    try {
      this.messagesContainer.nativeElement.scrollTop = this.messagesContainer.nativeElement.scrollHeight;
    } catch(err) {}
  }

  private getAutoResponse(): string {
    const responses = [
      "Thanks for reaching out! One of our travel experts will get back to you shortly.",
      "I understand you're interested in traveling. Could you tell me more about your destination preferences?",
      "That's great! Have you considered checking out our latest travel deals?",
      "I'd be happy to help you plan your trip. What's your preferred travel date?",
      "Thanks for your message! Would you like to know more about our popular travel packages?"
    ];
    return responses[Math.floor(Math.random() * responses.length)];
  }
}