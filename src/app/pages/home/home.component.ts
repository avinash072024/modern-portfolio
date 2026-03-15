import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as AOS from 'aos';
import { TestimonialsComponent } from '../../components/testimonials/testimonials.component';
import { CtaComponent } from '../../components/cta/cta.component';
import { RouterLink } from '@angular/router';
declare var $: any;

@Component({
  selector: 'app-home',
  imports: [CommonModule, RouterLink, TestimonialsComponent, CtaComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  // Typing Effect Logic
  readonly roles = ['Frontend Developer', 'Website Designer', 'Angular Specialist'];
  displayText = signal('');
  private roleIndex = 0;
  private charIndex = 0;
  private isDeleting = false;

  ngOnInit() {
    // AOS.init({ duration: 1000, once: true });
    this.type();
  }

  type() {
    const currentRole = this.roles[this.roleIndex];
    
    if (this.isDeleting) {
      this.displayText.set(currentRole.substring(0, this.charIndex - 1));
      this.charIndex--;
    } else {
      this.displayText.set(currentRole.substring(0, this.charIndex + 1));
      this.charIndex++;
    }

    let typeSpeed = this.isDeleting ? 50 : 100;

    if (!this.isDeleting && this.charIndex === currentRole.length) {
      typeSpeed = 2000; // Pause at end
      this.isDeleting = true;
    } else if (this.isDeleting && this.charIndex === 0) {
      this.isDeleting = false;
      this.roleIndex = (this.roleIndex + 1) % this.roles.length;
      typeSpeed = 500;
    }

    setTimeout(() => this.type(), typeSpeed);
  }

  downloadResume(): void {
    const link = document.createElement('a');
    link.setAttribute('target', '_blank');
    link.setAttribute('href', 'assets/resume/Avinash-Marbhal-Resume-Angular-Updated.pdf'); // Path to your file
    link.setAttribute('download', 'Avinash-Marbhal-Resume-Angular.pdf'); // Desired filename
    document.body.appendChild(link);
    link.click();
    link.remove();
    $('#staticBackdrop').modal('show');
  }
}