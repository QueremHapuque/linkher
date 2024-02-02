import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-one',
  templateUrl: './page-one.component.html',
  styleUrls: ['./page-one.component.css']
})
export class PageOneComponent {
  constructor(private router: Router) {}

  navigateTo(routeLink: string) {
    const currentPath = this.router.url;
    if (currentPath) {
      this.router.navigateByUrl('/', { replaceUrl: true });
    }
    this.router.navigateByUrl(routeLink, { replaceUrl: true });
  }
}
