import { Component, Input } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ModalCvComponent } from '../modal-cv/modal-cv.component';
import { EducationList, ExperienceList, LanguageList, TechnologyList, CertificationList, SoftSkillList } from './interface-cv';

@Component({
  selector: 'app-curriculum',
  templateUrl: './curriculum.component.html',
  styleUrls: ['./curriculum.component.css']
})

export class CurriculumComponent {

  constructor(
    public dialog: MatDialog,
  ) {}

  states = [
    { name: 'Pernambuco', value: 'pe' },
    { name: 'Alagoas', value: 'al' },
    { name: 'Sergipe', value: 'se' },
    { name: 'Ceará', value: 'ce' }
  ];

  @Input()
  name: string | undefined;
  @Input()
  email: string | undefined;
  nameFormControl = new FormControl('', [Validators.required]);
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  education!: Array<EducationList>;
  experience!: Array<ExperienceList>;
  language!: Array<LanguageList>;
  technology!: Array<TechnologyList>;
  certification!: Array<CertificationList>;
  softSkill!: Array<SoftSkillList>;
  selectedState: string | undefined;
  disableName = false;
  // checkbox tipo contrato
  researchGrant = false;
  internship = false;
  clt = false;
  pj = false;
  // checkbox modalidade
  inPerson = false;
  remote = false;
  hybrid = false;
  // checkbox carga horaria
  halfTime = false;
  fullTime = false;
  // checkbox nvl experiencia
  beginner = false;
  intermediary = false;
  advanced = false;


  getErrorMessage() {
    if (this.nameFormControl.hasError('required')) {
      return 'Este campo é obrigatório!';
    }

    return this.emailFormControl.hasError('email') ? 'Esse não é um email válido!' : '';
  }

  clickSelectedState(state: string) {
    this.selectedState = state;
  }

  clickSave() {
    if (!this.name || !this.email || !this.selectedState) {
      console.log('campos obrigatorios nao preenchidos!')
    }
  }
  
  selectResearchGrant(check: boolean) {
    this.researchGrant = check;
  }

  selectInternship(check: boolean) {
    this.internship = check;
  }

  selectClt(check: boolean) {
    this.clt = check;
  }

  selectPj(check: boolean) {
    this.pj = check;
  }

  selectInPerson(check: boolean) {
    this.inPerson = check;
  }

  selectRemote(check: boolean) {
    this.remote = check;
  }

  selectHybrid(check: boolean) {
    this.hybrid = check;
  }

  selectHalfTime(check: boolean) {
    this.halfTime = check;
  }

  selectFullTime(check: boolean) {
    this.fullTime = check;
  }

  selectBeginner(check: boolean) {
    this.beginner = check;
  }

  selectIntermediary(check: boolean) {
    this.intermediary = check;
  }

  selectAdvanced(check: boolean) {
    this.advanced = check;
  }

  openDialog(typeField: string) {
    const modalOpen = this.dialog.open(ModalCvComponent, {
      disableClose: true,
      data: { Field: typeField }
    });
    if (typeField == 'education') {
      modalOpen.afterClosed().subscribe(result => {
        if (result) {
          this.education = result;
        }
      });
    }
    else if (typeField == 'experiences') {
      modalOpen.afterClosed().subscribe(result => {
        if (result) {
          this.experience = result;
        }
      });
    }
    else if (typeField == 'languages') {
      modalOpen.afterClosed().subscribe(result => {
        if (result) {
          this.language = result;
        }
      });
    }
    else if (typeField == 'technologies') {
      modalOpen.afterClosed().subscribe(result => {
        if (result) {
          this.technology = result;
        }
      });
    }
    else if (typeField == 'certifications') {
      modalOpen.afterClosed().subscribe(result => {
        if (result) {
          this.certification = result;
        }
      });
    }
    else if (typeField == 'softSkills') {
      modalOpen.afterClosed().subscribe(result => {
        if (result) {
          this.softSkill = result;
        }
      });
    }
  }

  public saveInfo() {
    console.log('nameFormControl -> ', this.nameFormControl.value);
    console.log('emailFormControl -> ', this.emailFormControl.value);
    console.log('selectedState -> ', this.selectedState);
    this.disableName = true;
  }

  public deleteField(fieldType: string) {
    if (fieldType == 'education') {
      this.education = [];
    }
    else if (fieldType == 'experience') {
      this.experience = [];
    }
    else if (fieldType == 'language') {
      this.language = [];
    }
    else if (fieldType == 'technology') {
      this.technology = [];
    }
    else if (fieldType == 'certification') {
      this.certification = [];
    }
    else if (fieldType == 'softSkills') {
      this.softSkill = [];
    }
  }

}


