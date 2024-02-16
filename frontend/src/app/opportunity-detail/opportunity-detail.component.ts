import { Component, OnInit  } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { OpportunitiesService } from '../utils/services/opportunities.service';

@Component({
  selector: 'app-opportunity-detail',
  templateUrl: './opportunity-detail.component.html',
  styleUrls: ['./opportunity-detail.component.css']
})
export class OpportunityDetailComponent implements OnInit {
  opportunityId:string | any;
  opportunity: any;
  opportunities: any[] = [];
  linkVacancie: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private opportunitiesService: OpportunitiesService
    ) {}

  ngOnInit() {
    // Recupera o parâmetro 'id' da URL
    this.opportunityId = this.route.snapshot.paramMap.get('id');

    // Agora, você pode usar opportunityId para carregar os detalhes específicos da oportunidade
    // usando um serviço ou de qualquer outra forma que você tenha implementado.
    // this.loadOpportunity();
    this.loadGambiarraOpportunity();
  }

  loadOpportunity() {
    this.opportunitiesService.getOpportunity(this.opportunityId).subscribe(
      (data) => {
        this.opportunity = data;
        console.log(`Opportunity: ${this.opportunity.name}`)
      },
      (error) => {
        console.error('Erro ao carregar as oportunidade:', error);
      }
    );
  }

  loadGambiarraOpportunity() {
    this.opportunitiesService.getOpportunities().subscribe(
      (data) => {
        this.opportunities = data;
        this.linkVacancie = this.opportunities[0]['link']
        console.log('this.linkVacancie -> ', this.linkVacancie)

        // Encontrar a oportunidade desejada com base no opportunityId
        this.opportunity = this.opportunities.find(op => op.id.toString() === this.opportunityId.toString());

        if (!this.opportunity) {
          console.error(`Oportunidade com ID ${this.opportunityId} não encontrada.`);
        }

        console.log(`Opportunity: ${this.opportunity}`);
      },
      (error) => {
        console.error('Erro ao carregar as oportunidades:', error);
      }
    );
  }

  returnHome() {
    this.router.navigateByUrl('/home', { replaceUrl: true });
  }
}
