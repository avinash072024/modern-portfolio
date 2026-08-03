import { Injectable, NgZone, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { fromEvent, Observable, share } from 'rxjs';
import { io, Socket } from 'socket.io-client';
import { environment } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class SocketService {
  private platformId = inject(PLATFORM_ID);
  private socket: Socket | null = null;
  private socketUrl = environment.apiUrl.replace(/\/api\/?$/, '');

  constructor(private ngZone: NgZone) {}

  connect(): void {
    if (!isPlatformBrowser(this.platformId) || this.socket) {
      return;
    }

    this.socket = io(this.socketUrl, {
      path: '/socket.io',
      transports: ['websocket'],
      autoConnect: true,
    });

    this.socket.on('connect', () => {
      this.ngZone.run(() => {
        console.log('Socket connected:', this.socket?.id);
      });
    });

    this.socket.on('disconnect', (reason: any) => {
      this.ngZone.run(() => {
        console.log('Socket disconnected:', reason);
      });
    });

    this.socket.on('connect_error', (error: any) => {
      this.ngZone.run(() => {
        console.warn('Socket connect error:', error);
      });
    });
  }

  disconnect(): void {
    if (this.socket) {
      this.socket.disconnect();
      this.socket = null;
    }
  }

  onEvent<T = any>(eventName: string): Observable<T> {
    if (!isPlatformBrowser(this.platformId)) {
      return new Observable<T>((subscriber) => subscriber.complete());
    }

    if (!this.socket) {
      this.connect();
    }

    return fromEvent<T>(this.socket as Socket, eventName).pipe(share());
  }
}
