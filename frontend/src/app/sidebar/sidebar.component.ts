import { Component, EventEmitter, Output } from '@angular/core';
import { navbarData } from './nav-data';
import { Router } from '@angular/router';

interface SideNavToggle {
  screenWidth: number;
  collapsed: boolean;
}

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {

  @Output() toggleSideNav: EventEmitter<SideNavToggle> = new EventEmitter();
  collapsed = false;
  screenWidth = 0;
  navData = navbarData;

  constructor(private router: Router) {}

  navigateTo(routeLink: string) {
    const currentPath = this.router.url;
    if (currentPath) {
      this.router.navigateByUrl('/', { replaceUrl: true });
    }
    this.router.navigateByUrl(routeLink, { replaceUrl: true });
  }

  toggleCollapse(): void {
    this.collapsed = !this.collapsed;
    this.toggleSideNav.emit({collapsed: this.collapsed, screenWidth: this.screenWidth});
  }

  closeSidenav(): void {
    this.collapsed = false;
    this.toggleSideNav.emit({collapsed: this.collapsed, screenWidth: this.screenWidth});
  }

}