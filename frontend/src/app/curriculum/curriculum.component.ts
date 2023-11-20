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
  education!: Array<EducationList>;
  experience!: Array<ExperienceList>;
  language!: Array<LanguageList>;
  technology!: Array<TechnologyList>;
  certification!: Array<CertificationList>;
  softSkill!: Array<SoftSkillList>;
  selectedState: string | undefined;
  listCounty: any;
  nameFormControl = new FormControl('', [Validators.required]);
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  
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


