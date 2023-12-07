import { Component, Input, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ModalCvComponent } from '../modal-cv/modal-cv.component';
import { EducationList, ExperienceList, LanguageList, TechnologyList, CertificationList, SoftSkillList, Curriculum } from './interface-cv';

import { ResumeService } from '../utils/services/resume.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-curriculum',
  templateUrl: './curriculum.component.html',
  styleUrls: ['./curriculum.component.css']
})

export class CurriculumComponent implements OnInit {

  constructor(
    public dialog: MatDialog,
    private resumeService: ResumeService,
    private messageService: MessageService
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
  @Input()
  selectedState!: string;
  nameFormControl = new FormControl('', [Validators.required]);
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  education!: EducationList[];
  experience!: ExperienceList[];
  language!: LanguageList[];
  technology!: TechnologyList[];
  certification!: CertificationList[];
  softSkills!: SoftSkillList[];
  isNew = true;
  disableName = false;
  disableEmail = false;
  disableState = false;
  disableCheckboxes = false;
  userId!: number;
  
  curriculum!: Curriculum;

  // checkbox tipo contrato
  @Input()
  researchGrant = false;
  @Input()
  internship = false;
  @Input()
  clt = false;
  @Input()
  pj = false;
  // checkbox modalidade
  @Input()
  inPerson = false;
  @Input()
  remote = false;
  @Input()
  hybrid = false;
  // checkbox carga horaria
  @Input()
  halfTime = false;
  @Input()
  threeQuarters = false;
  @Input()
  fullTime = false;
  // checkbox nvl experiencia
  @Input()
  beginner = false;
  @Input()
  intermediary = false;
  @Input()
  advanced = false;

  ngOnInit() {
    this.getCurriculum();
  }

  setCheckboxes(curriculum: Curriculum) {
    this.researchGrant = curriculum.isSearch;
    this.internship = curriculum.isInternship;
    this.clt = curriculum.isClt;
    this.pj = curriculum.isPj;
    this.inPerson = curriculum.isInPerson;
    this.remote = curriculum.isRemote;
    this.hybrid = curriculum.isHybrid;
    this.halfTime = curriculum.isHalfTime;
    this.threeQuarters = curriculum.isThreeQuarters;
    this.fullTime = curriculum.isFullTime;
    this.beginner = curriculum.isJunior;
    this.intermediary = curriculum.isPleno;
    this.advanced = curriculum.isSenior;
  }

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
          this.softSkills = result;
        }
      });
    }
  }

  editName() {
    this.disableName = false;
  }

  editEmail() {
    this.disableEmail = false;
  }

  editState() {
    this.disableState = false;
  }
  
  editPreferences() {
    this.disableCheckboxes = false;
  }

  saveInfo() {
    this.disableName = true;
    this.disableEmail = true;
    this.disableState = true;
    this.updateCurriculum();
  }

  transformObjectToArray(curriculum: Curriculum) {
    // education
    this.education = Object.entries(curriculum.education).map(([institution, courseName]) => {
      return { institution, courseName } as unknown as EducationList;
    });

    // experience
    this.experience = Object.entries(curriculum.experience).map(([officeName, company]) => {
      return { officeName, company } as unknown as ExperienceList;
    });

    // languages
    this.language = Object.entries(curriculum.languages).map(([languageName, expertiseLanguage]) => {
      return { languageName, expertiseLanguage } as unknown as LanguageList;
    });

    // technologies
    this.technology = Object.entries(curriculum.technologies).map(([technologieName, expertiseTechnologie]) => {
      return { technologieName, expertiseTechnologie } as unknown as TechnologyList;
    });

    // certifications
    this.certification = Object.entries(curriculum.certifications).map(([certificationName, certificationInstitution]) => {
      return { certificationName, certificationInstitution } as unknown as CertificationList;
    });

    // soft skills
    this.softSkills = [{ softSkill: curriculum.softSkills } as unknown as SoftSkillList];
  }

  getCurriculum() {
    if (localStorage.getItem('USER_ID')) {
      const userIdString = localStorage.getItem('USER_ID');
      this.userId = userIdString !== null ? Number(userIdString) : 0;
    }
    this.resumeService.listResume(this.userId).subscribe(
      (response) => {
        this.curriculum = response;
        if (this.curriculum) {
          localStorage.setItem('RESUME_ID', String(response.id));
          this.isNew = false;
          this.disableName = true;
          this.disableEmail = true;
          this.disableState = true;
          this.disableCheckboxes = true;
          this.name = this.curriculum.name;
          this.email = this.curriculum.email;
          this.selectedState = this.curriculum.state;
          this.setCheckboxes(this.curriculum);
          this.transformObjectToArray(this.curriculum); // APAGAR ESSA FUNÇÃO QUANDO O BACK SUBIR ATUALIZAÇÃO
        }
      },
      (error) => {
        console.error(error);
      }
    );
  }

  saveCurriculum() {
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
      [this.technology[0].technologieName]: this.technology[0].expertiseTechnologie
    };
    const certification: Record<string, string> = {
      [this.certification[0].certificationInstitution]: this.certification[0].certificationName
    };
    const softSkills: string = this.softSkills[0].softSkill;

    this.resumeService.createResume(this.userId, this.name, this.email, this.selectedState, education, experience, language, technology, certification, softSkills,
      this.researchGrant, this.internship, this.clt, this.pj, this.inPerson, this.remote, this.hybrid, this.halfTime, this.threeQuarters, this.fullTime, this.beginner,
      this.intermediary, this.advanced).subscribe(
        async (response) => {
          console.log('response -> ', response)
          this.showNotification('success', 'Currículo criado com sucesso!', '');
          await this.delay(2000);
          location.reload();
        },
        (error) => {
          console.error('Erro:', error.error.message);
          this.showNotification('error', 'Erro!', error.error.message);
        }
      );
  }

  updateCurriculum() {
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
      [this.technology[0].technologieName]: this.technology[0].expertiseTechnologie
    };
    const certification: Record<string, string> = {
      [this.certification[0].certificationInstitution]: this.certification[0].certificationName
    };
    const softSkills: string = this.softSkills[0].softSkill;

    this.resumeService.updateResume(Number(localStorage.getItem('RESUME_ID')), this.name, this.email, this.selectedState, education, experience, language, technology,
    certification, softSkills, this.researchGrant, this.internship, this.clt, this.pj, this.inPerson, this.remote, this.hybrid, this.halfTime, this.threeQuarters,
    this.fullTime, this.beginner, this.intermediary, this.advanced).subscribe(
      async (response) => {
        console.log('response -> ', response)
        this.showNotification('success', 'Currículo atualizado com sucesso!', '');
        await this.delay(2000);
        location.reload();
      },
      (error) => {
        console.error('Erro:', error.error.message);
        this.showNotification('error', 'Erro!', error.error.message);
      }
    );
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
      this.softSkills = [];
    }
  }

  showNotification(severity: string, summary: string, message: string) {
    this.messageService.add({ severity: severity, summary: summary, detail: message });
  }


  public delay(ms: number): Promise<boolean> {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(true);
      }, ms);
    });
  }
}


