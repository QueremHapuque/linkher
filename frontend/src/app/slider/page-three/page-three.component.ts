import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-three',
  templateUrl: './page-three.component.html',
  styleUrls: ['./page-three.component.css']
})
export class PageThreeComponent {
  constructor(private router: Router) {}

  navigateTo(routeLink: string) {
    const currentPath = this.router.url;
    if (currentPath) {
      this.router.navigateByUrl('/', { replaceUrl: true });
    }
    this.router.navigateByUrl(routeLink, { replaceUrl: true });
  }
}
