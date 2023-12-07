import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  constructor(
    private router: Router
  ) {}

  userName = 'user';

  ngOnInit() {
    this.userName = 'Querem Hapuque';
  }
  
  logout() {
    localStorage.clear();
    this.router.navigateByUrl('', { replaceUrl: true });
  }
}


