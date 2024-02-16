import { Component, Input, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { OpportunitiesService } from '../utils/services/opportunities.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  opportunities: any[] = [];

  constructor(
    private router: Router,
    private opportunitiesService: OpportunitiesService
  ) {}


  ngOnInit() {
    const userToken = localStorage.getItem('TOKEN');
    if (!userToken) {
      this.router.navigateByUrl('', { replaceUrl: true });
    }
    else {
      this.loadOpportunities();
    }
  }

  loadOpportunities() {
    this.opportunitiesService.getOpportunities().subscribe(
      (data) => {
        this.opportunities = data;
      },
      (error) => {
        console.error('Erro ao carregar as oportunidades:', error);
      }
    );
  }

}
