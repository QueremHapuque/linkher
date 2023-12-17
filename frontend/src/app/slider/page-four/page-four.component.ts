import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-four',
  templateUrl: './page-four.component.html',
  styleUrls: ['./page-four.component.css']
})
export class PageFourComponent {
  constructor(private router: Router) {}

  navigateTo(routeLink: string) {
    const currentPath = this.router.url;
    if (currentPath) {
      this.router.navigateByUrl('/', { replaceUrl: true });
    }
    this.router.navigateByUrl(routeLink, { replaceUrl: true });
  }
}
