import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { Constants } from './models/constants';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: HomeComponent,
        title: `${Constants.APP_NAME} | Home`
    },
    {
        path: 'about',
        component: AboutComponent,
        title: `${Constants.APP_NAME} | About Me`
    },
    {
        path: 'contact',
        component: ContactComponent,
        title: `${Constants.APP_NAME} | Contact Me`
    },
];
