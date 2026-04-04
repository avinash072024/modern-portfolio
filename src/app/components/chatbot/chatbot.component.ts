import { Component, ElementRef, OnInit, ViewChild, inject, signal, effect } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ChatService, ChatMessage } from '../../services/chat.service';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-chatbot',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './chatbot.component.html',
  styleUrl: './chatbot.component.scss',
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px) scale(0.95)' }),
        animate('200ms ease-out', style({ opacity: 1, transform: 'translateY(0) scale(1)' }))
      ]),
      transition(':leave', [
        animate('150ms ease-in', style({ opacity: 0, transform: 'translateY(20px) scale(0.95)' }))
      ])
    ])
  ]
})
export class ChatbotComponent implements OnInit {
  private chatService = inject(ChatService);
  
  @ViewChild('scrollContainer') private scrollContainer!: ElementRef;
  
  isOpen = signal(false);
  userInput = signal('');
  isLoading = signal(false);
  messages = signal<{ role: 'user' | 'model', text: string }[]>([]);
  
  constructor() {
    // Scroll to bottom whenever messages change
    effect(() => {
      this.messages();
      setTimeout(() => this.scrollToBottom(), 10);
    });
  }

  ngOnInit(): void {
    // Initial greeting
    this.messages.set([
      { role: 'model', text: "Hi! I'm Avinash's AI assistant. How can I help you today?" }
    ]);
  }

  toggleChat(): void {
    this.isOpen.update(v => !v);
  }

  sendMessage(): void {
    const text = this.userInput().trim();
    if (!text || this.isLoading()) return;

    // Add user message
    this.messages.update(prev => [...prev, { role: 'user', text }]);
    this.userInput.set('');
    this.isLoading.set(true);

    // Prepare history for API
    const history: ChatMessage[] = this.messages().slice(0, -1).map(m => ({
      role: m.role,
      parts: [{ text: m.text }]
    }));

    this.chatService.sendMessage(text, history).subscribe({
      next: (res) => {
        this.messages.update(prev => [...prev, { role: 'model', text: res.response }]);
        this.isLoading.set(false);
      },
      error: (err) => {
        console.error('Chat error:', err);
        this.messages.update(prev => [...prev, { 
          role: 'model', 
          text: "Sorry, I'm having trouble connecting right now. Please try again later." 
        }]);
        this.isLoading.set(false);
      }
    });
  }

  private scrollToBottom(): void {
    if (this.scrollContainer) {
      const el = this.scrollContainer.nativeElement;
      el.scrollTop = el.scrollHeight;
    }
  }
}
