import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Constants } from '../../models/constants';
import { AboutMe } from '../../interfaces/about-me';
import { TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-footer',
  imports: [RouterLink, TitleCasePipe],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  currentYear: number = new Date().getFullYear();
  myInformation: AboutMe = Constants.ABOUT_ME;
}
