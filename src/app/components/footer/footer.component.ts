import { Component, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Constants } from '../../models/constants';
import { AboutMe } from '../../interfaces/about-me';
import { TitleCasePipe } from '@angular/common';
import { ContactService } from '../../services/contact/contact.service';

@Component({
  selector: 'app-footer',
  imports: [RouterLink, TitleCasePipe],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent implements OnInit {
  currentYear: number = new Date().getFullYear();
  // myInformation: AboutMe = Constants.ABOUT_ME;
  myInformation: any;
  appName1: string = Constants.APP_NAME1;
  appName2: string = Constants.APP_NAME2;
  contactService = inject(ContactService);

  visitorCount: number = 0;

  ngOnInit(): void {
    this.getContactDetails();
  }

  getContactDetails(): void {
    this.contactService.getContact().subscribe({
      next: (res: any) => {
        if (res?.success && res?.contact) {
          this.myInformation = res.contact;
        }
      },
      error: (err: any) => {
        alert(err.error.message || 'Failed to load contact details');
      }
    });
  }
}
