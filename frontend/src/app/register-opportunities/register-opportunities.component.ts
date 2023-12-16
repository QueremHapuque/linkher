import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-register-opportunities',
  templateUrl: './register-opportunities.component.html',
  styleUrls: ['./register-opportunities.component.css']
})
export class RegisterOpportunitiesComponent {

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor() { }

  opportunitieTypes = [
    { name: 'Vaga de emprego', value: 'job' },
    { name: 'Edital de pesquisa', value: 'search' }
  ];

  @Input()
  opportunitieName!: string;
  opportunitieType!: string;
  isJob = false;
  isSearch = false;
  isAffirmative = false;
  isInternship = false;

  selectOpportunitieType() {
    if (this.opportunitieType == 'job') {
      this.isJob = true;
      this.isSearch = false;
    }
    else {
      this.isSearch = true;
      this.isJob = false;
    }
  }

  saveInfo() {
    console.log('bimbancia');
  }

  cancel() {
    this.isJob = false;
    this.isSearch = false;
    this.opportunitieName = '';
    this.opportunitieType = '';
  }
}
