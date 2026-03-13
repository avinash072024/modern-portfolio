import { Component, HostListener, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ThemeService } from '../../services/theme/theme.service';
import { Constants } from '../../models/constants';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  themeService = inject(ThemeService);
  isScrolled = signal(false);
  appName1: string = Constants.APP_NAME1;
  appName2: string = Constants.APP_NAME2;

  skins = [
    { name: 'Default Blue', class: 'default-blue', hex: '#0d6efd' },
    { name: 'Emerald', class: 'emerald-green', hex: '#198754' },
    { name: 'Purple', class: 'vibrant-purple', hex: '#6610f2' },
    { name: 'Hot Pink', class: 'hot-pink', hex: '#d63384' },
    { name: 'Sunset', class: 'sunset-orange', hex: '#fd7e14' },
    { name: 'Cyan Wave', class: 'cyan-wave', hex: '#0dcaf0' },
    { name: 'Crimson', class: 'crimson-red', hex: '#dc3545' }
  ];

  navLinks= [
    { id: 1, path: '/home', label: 'Home' },
    { id: 2, path: '/about', label: 'About Me' },
    { id: 3, path: '/projects', label: 'Projects' },
    { id: 4, path: '/skills', label: 'Skills' },
    { id: 5, path: '/contact', label: 'Contact Me' },
  ]

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled.set(window.scrollY > 50);
  }
}
