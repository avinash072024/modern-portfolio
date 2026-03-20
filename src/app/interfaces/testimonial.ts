export interface Testimonial {
  id: number;
  name: string;
  position?: string;
  company?: string;
  message: string;
  rating: number; // 1-5
  stars: number[]; // precomputed array for template iteration
}
