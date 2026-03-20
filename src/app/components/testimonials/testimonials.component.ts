import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Testimonial } from '../../interfaces/testimonial';
import { TESTIMONIALS } from '../../models/testimonials.data';

@Component({
  selector: 'app-testimonials',
  imports: [CommonModule],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.scss'
})
export class TestimonialsComponent {
  testimonials: Testimonial[] = TESTIMONIALS;
}
