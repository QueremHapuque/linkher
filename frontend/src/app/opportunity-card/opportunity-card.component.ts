import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-opportunity-card',
  templateUrl: './opportunity-card.component.html',
  styleUrls: ['./opportunity-card.component.css']
})
export class OpportunityCardComponent {
  @Input() opportunity: any;

}
