import { Component, Input } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ModalCvComponent } from '../modal-cv/modal-cv.component';
import { EducationList, ExperienceList, LanguageList, TechnologyList, CertificationList, SoftSkillList } from './interface-cv';

import { ResumeService } from '../utils/services/resume.service';

@Component({
  selector: 'app-curriculum',
  templateUrl: './curriculum.component.html',
  styleUrls: ['./curriculum.component.css']
})

export class CurriculumComponent {

  constructor(
    public dialog: MatDialog,
    private resumeService: ResumeService
  ) {}

  states = [
    { name: 'Pernambuco', value: 'pe' },
    { name: 'Alagoas', value: 'al' },
    { name: 'Sergipe', value: 'se' },
    { name: 'Ceará', value: 'ce' }
  ];

  @Input()
  name!: string;
  @Input()
  email!: string;
  nameFormControl = new FormControl('', [Validators.required]);
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  education!: EducationList[];
  experience!: ExperienceList[];
  language!: LanguageList[];
  technology!: TechnologyList[];
  certification!: CertificationList[];
  softSkill!: SoftSkillList[];
  selectedState!: string;
  disableName = false;
  tetaDura: string[] = [];
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
  threeQuarters = false;
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

  clickSelectedState(state: string) {
    this.selectedState = state;
  }

  clickSave() {
    const education: Record<string, string> = {
      [this.education[0].institution]: this.education[0].courseName
    };
    const experience: Record<string, string> = {
      [this.experience[0].company]: this.experience[0].officeName
    };
    const language: Record<string, string> = {
      [this.language[0].languageName]: this.language[0].expertiseLanguage
    };
    const technology: Record<string, string> = {
      [this.technology[0].technologieName]: this.technology[0].expertiseTechnologiee
    };
    const certification: Record<string, string> = {
      [this.certification[0].certificationInstitution]: this.certification[0].certificationName
    };
    const softSkills: string = this.softSkill[0].softSkill;
    this.resumeService.createResume(1, this.name, this.email, this.selectedState, education, experience, language, technology, certification, softSkills, this.researchGrant,
      this.internship, this.clt, this.pj, this.inPerson, this.remote, this.hybrid, this.halfTime, this.threeQuarters, this.fullTime, this.beginner, this.intermediary, this.advanced);
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

  selectThreeQuarters(check: boolean) {
    this.threeQuarters = check;
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


