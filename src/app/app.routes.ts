import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { Constants } from './models/constants';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ServicesComponent } from './pages/services/services.component';
import { SkillsComponent } from './pages/skills/skills.component';
import { ProjectsComponent } from './pages/projects/projects.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: HomeComponent,
        title: `${Constants.APP_NAME} — Home`
    },
    {
        path: 'about',
        component: AboutComponent,
        title: `${Constants.APP_NAME} — About`
    },
    {
        path: 'contact',
        component: ContactComponent,
        title: `${Constants.APP_NAME} — Contact`
    },
    {
        path: 'services',
        component: ServicesComponent,
        title: `${Constants.APP_NAME} — Services`
    },
    {
        path: 'skills',
        component: SkillsComponent,
        title: `${Constants.APP_NAME} — Skills`
    },
    {
        path: 'projects',
        component: ProjectsComponent,
        title: `${Constants.APP_NAME} — Projects`
    },
    {
        path: '**',
        component: NotFoundComponent,
        title: '404 - Page not found'
    }
];
