import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface Notification {
  id: string;
  title: string;
  message: string;
  type: 'info' | 'success' | 'warning' | 'error';
  timestamp: Date;
  read: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  private notifications = new BehaviorSubject<Notification[]>([
    {
      id: '1',
      title: 'New Travel Deal',
      message: 'Special 20% off on flights to Paris this weekend!',
      type: 'info',
      timestamp: new Date(Date.now() - 1000 * 60 * 30), // 30 minutes ago
      read: false
    },
    {
      id: '2',
      title: 'Trip Reminder',
      message: 'Your trip to Tokyo starts in 3 days. Time to start packing!',
      type: 'warning',
      timestamp: new Date(Date.now() - 1000 * 60 * 60 * 2), // 2 hours ago
      read: false
    },
    {
      id: '3',
      title: 'Booking Confirmed',
      message: 'Your hotel reservation in Rome has been confirmed.',
      type: 'success',
      timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24), // 1 day ago
      read: false
    }
  ]);

  getNotifications(): Observable<Notification[]> {
    return this.notifications.asObservable();
  }

  getUnreadCount(): Observable<number> {
    return new Observable(subscriber => {
      this.notifications.subscribe(notifications => {
        const count = notifications.filter(n => !n.read).length;
        subscriber.next(count);
      });
    });
  }

  markAsRead(id: string) {
    const updated = this.notifications.value.map(notification => 
      notification.id === id ? { ...notification, read: true } : notification
    );
    this.notifications.next(updated);
  }

  markAllAsRead() {
    const updated = this.notifications.value.map(notification => ({
      ...notification,
      read: true
    }));
    this.notifications.next(updated);
  }

  clearNotification(id: string) {
    const updated = this.notifications.value.filter(notification => 
      notification.id !== id
    );
    this.notifications.next(updated);
  }
}