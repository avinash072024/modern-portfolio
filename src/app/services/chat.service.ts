import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

export interface ChatMessage {
  role: 'user' | 'model';
  parts: { text: string }[];
}

export interface ChatResponse {
  response: string;
  isMock: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  private http = inject(HttpClient);
  // During development/SSR we might want to target the local server
  // If environment.apiUrl points elsewhere, we might need to adjust
  private apiUrl = `${environment.apiUrl}/chat`; 

  sendMessage(message: string, history: ChatMessage[]): Observable<ChatResponse> {
    return this.http.post<ChatResponse>(this.apiUrl, { message, history });
  }
}
