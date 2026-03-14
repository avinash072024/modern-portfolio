import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { AboutMe } from '../../interfaces/about-me';
import { Constants } from '../../models/constants';

@Component({
  selector: 'app-contact',
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  isSending = signal(false);
  isSuccess = signal(false);
  myInformation: AboutMe = Constants.ABOUT_ME;

  onSubmit(form: NgForm) {
    if (form.valid) {
      this.isSending.set(true);

      // Simulate API call logic
      setTimeout(() => {
        this.isSending.set(false);
        this.isSuccess.set(true);
        form.reset();

        // Clear success message after 5 seconds
        setTimeout(() => this.isSuccess.set(false), 5000);
      }, 2000);
    }
  }
}