import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './modules/landing-page/landing-page.component';

export const routes: Routes = [
  {
    path:'',
    component: LandingPageComponent,
    children: [
      {
        path:'calendar',
        loadComponent: () => import('./modules/angular-calendar/angular-calendar.component').then(x => x.AngularCalendarComponent)
      }
    ]
  },
];
