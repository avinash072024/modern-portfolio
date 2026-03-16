import { Component, HostListener, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import * as AOS from 'aos';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { ThemeService } from './services/theme/theme.service';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'modern-portfolio';

  constructor(
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object,
    private themeService: ThemeService
  ) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd && isPlatformBrowser(this.platformId)) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    });
  }

  ngOnInit() {
    AOS.init({
      duration: 1000,
      // once: true,
      mirror: false
    });
  }

  @HostListener('document:keydown', ['$event'])
  onKeyDown(event: KeyboardEvent) {
    // Disable Ctrl+C (Copy)
    if (event.ctrlKey && event.key === 'c') {
      event.preventDefault();
    }

    // Disable Ctrl+P (Print)
    if (event.ctrlKey && event.key === 'p') {
      event.preventDefault();
    }

    // Disable F12 (Inspect Element)
    if (event.key === 'F12') {
      event.preventDefault();
    }

    // Disable Ctrl+Shift+I (Inspect Element)
    if (event.ctrlKey && event.shiftKey && event.key === 'I') {
      event.preventDefault();
    }

    // Disable Ctrl+U (View Source)
    if (event.ctrlKey && event.key === 'u') {
      event.preventDefault();
    }
  }
}
