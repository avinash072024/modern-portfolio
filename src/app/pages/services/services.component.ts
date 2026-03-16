import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { CtaComponent } from "../../components/cta/cta.component";

@Component({
  selector: 'app-services',
  imports: [CtaComponent],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent {
  router = inject(Router);

  goToContact(): void {
    alert('Clicked');
    this.router.navigateByUrl('/contact');
  }
}
