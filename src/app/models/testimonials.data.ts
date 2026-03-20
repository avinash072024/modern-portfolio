import { Testimonial } from '../interfaces/testimonial';

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: 'Samantha Lee',
    position: 'CTO',
    company: 'Fintech Solutions',
    message: 'Avinash delivered a clean, maintainable Angular app and improved performance by 30%. Highly recommended.',
    rating: 5,
    stars: Array.from({ length: 5 }, (_, i) => i)
  },
  {
    id: 2,
    name: 'Raj Patel',
    position: 'Product Manager',
    company: 'RetailPro',
    message: 'Great communication and attention to detail. The theme and responsive layout exceeded expectations.',
    rating: 5,
    stars: Array.from({ length: 5 }, (_, i) => i)
  },
  {
    id: 3,
    name: 'Lina Gomez',
    position: 'Founder',
    company: 'GreenStart',
    message: 'Delivered on time and provided thoughtful suggestions to improve UX and accessibility.',
    rating: 4,
    stars: Array.from({ length: 4 }, (_, i) => i)
  },
  {
    id: 4,
    name: 'Michael Chen',
    position: 'Engineering Lead',
    company: 'CloudNova',
    message: 'Strong Angular skills and a pragmatic approach to problem solving. Would hire again.',
    rating: 5,
    stars: Array.from({ length: 5 }, (_, i) => i)
  },
  {
    id: 5,
    name: 'Olivia Brown',
    position: 'CEO',
    company: 'DesignWorks',
    message: 'The project quality was excellent; the codebase is easy to extend and maintain.',
    rating: 5,
    stars: Array.from({ length: 5 }, (_, i) => i)
  }
];
