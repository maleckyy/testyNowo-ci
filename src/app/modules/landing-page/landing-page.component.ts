import { Component, inject } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { NzIconModule } from 'ng-zorro-antd/icon';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [NzIconModule, RouterOutlet],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent {

  private router = inject(Router)

  navOptions = [
    {
      label: 'Angular-Calendar',
      path: 'calendar',
      icon: 'calendar'
    }
  ]

  navigateTo(path: string) {
    this.router.navigate([path])
  }
}
