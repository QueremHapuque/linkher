import { Component, Input, OnInit } from '@angular/core';
import { formatDate } from '@angular/common';
import { Router } from '@angular/router';
import { JobVacancieService } from '../utils/services/job-vacancie.service';

@Component({
  selector: 'app-register-opportunities',
  templateUrl: './register-opportunities.component.html',
  styleUrls: ['./register-opportunities.component.css']
})
export class RegisterOpportunitiesComponent implements OnInit {

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor(
    private router: Router,
    private jobVacancieService: JobVacancieService
  ) { }

  opportunitieTypes = [
    { name: 'Vaga de emprego', value: 'job' },
    { name: 'Edital de pesquisa', value: 'search' }
  ];

  isJob = false;
  isSearch = false;
  disableButtons = true;
  @Input()
  // entradas de texto
  opportunitieName!: string;
  opportunitieType!: string;
  company!: string;
  link!: string;
  description!: string;
  requeriments!: string;
  local!: string;
  expireDate!: string;
  // toggle
  isAffirmative = false;
  // checkboxes
  isInternship = false;
  isClt = false;
  isPj = false;
  isJunior = false;
  isPleno = false;
  isSenior = false;
  isInPerson = false;
  isRemote = false;
  isHybrid = false;
  isHalfTime = false;
  isThreeQuarters = false;
  isFullTime = false;

  ngOnInit() {
    const userToken = localStorage.getItem('TOKEN');
    if (!userToken) {
      this.router.navigateByUrl('', { replaceUrl: true });
    }
  }


  selectOpportunitieType() {
    if (this.opportunitieType == 'job') {
      this.isJob = true;
      this.isSearch = false;
    }
    else if (this.opportunitieType == 'search') {
      this.isSearch = true;
      this.isJob = false;
    }
    this.clearAll();
    this.disableButtons = false;
  }

  saveInfo() {
    const formattedDate = this.convertDate();
    if (!this.opportunitieName || !this.opportunitieType || !this.company || !this.link || !this.description || !this.requeriments || !this.local || !this.expireDate) {
      console.log('Campos obrigatórios não preenchidos!');
    }
    else {
      this.jobVacancieService.createOpportunitie(this.opportunitieName, this.isJob, this.isSearch, this.company, this.link, this.description, this.requeriments, this.local,
        formattedDate, this.isAffirmative, this.isInternship, this.isClt, this.isPj, this.isJunior, this.isPleno, this.isSenior, this.isInPerson, this.isRemote, this.isHybrid,
        this.isHalfTime, this.isThreeQuarters, this.isFullTime).subscribe(
          async (response) => {
            console.log("response ->>> ", response)
          },
          (error) => {
            console.error('Erro:', error.error.message);
            // this.showNotification('error', 'Erro!', error.error.message);
          }
        );
    }
  }

  cancel() {
    this.disableButtons = true;
    this.isJob = false;
    this.isSearch = false;
    this.opportunitieName = '';
    this.opportunitieType = '';
  }

  convertDate() {
    const date = new Date(this.expireDate);
    const newDate = formatDate(date, 'yyyy-MM-ddTHH:mm:ss', 'en-US');
    return newDate
  }

  clearAll() {
    this.opportunitieName = '';
    this.company = '';
    this.link = '';
    this.description = '';
    this.requeriments = '';
    this.local = '';
    this.expireDate = '';
    this.isAffirmative = false;
    this.isInternship = false;
    this.isClt = false;
    this.isPj = false;
    this.isJunior = false;
    this.isPleno = false;
    this.isSenior = false;
    this.isInPerson = false;
    this.isRemote = false;
    this.isHybrid = false;
    this.isHalfTime = false;
    this.isThreeQuarters = false;
    this.isFullTime = false;
  }
}
