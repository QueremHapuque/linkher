import { Component, Input, OnInit} from '@angular/core';
import { OpportunitiesService } from '../utils/services/opportunities.service';

@Component({
  selector: 'app-opportunities',
  templateUrl: './opportunities.component.html',
  styleUrls: ['./opportunities.component.css']
})
export class OpportunitiesComponent implements OnInit {

  opportunities: any[] = [];

  constructor(private opportunitiesService: OpportunitiesService) {}

  ngOnInit() {
    this.loadOpportunities();
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
