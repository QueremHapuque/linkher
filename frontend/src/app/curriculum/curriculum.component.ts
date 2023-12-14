import { Component, Input, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { EducationList, ExperienceList, LanguageList, TechnologyList, CertificationList, SoftSkillList, Curriculum } from './interface-cv';
import { Router } from '@angular/router';

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
    private router: Router,
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
  // Informações básicas
  name!: string;
  email!: string;
  selectedState!: string;
  // Formação
  courseName!: string;
  institution!: string;
  // Experiências
  officeName!: string;
  company!: string;
  // Idiomas
  languageName!: string;
  expertiseLanguage!: string;
  // Tecnologias
  technologieName!: string;
  expertiseTechnologie!: string;
  // Certificações
  certificationName!: string;
  certificationInstitution!: string;
  // Experiências
  softSkill!: string;

  nameFormControl = new FormControl('', [Validators.required]);
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  education!: EducationList[];
  experience!: ExperienceList[];
  language!: LanguageList[];
  technology!: TechnologyList[];
  certification!: CertificationList[];
  softSkills!: SoftSkillList[];
  isNew = true;
  newFormation = false;
  newExperience = false;
  newLanguage = false;
  newTechnologie = false;
  newCertification = false;
  newSoftskill = false;
  disableName = false;
  disableEmail = false;
  disableState = false;
  disableFormation = false;
  disableCheckboxes = false;
  curriculum!: Curriculum;

  @Input()
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

  ngOnInit() {
    const userToken = localStorage.getItem('TOKEN');
    if (!userToken) {
      this.router.navigateByUrl('', { replaceUrl: true });
    }
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

  addFormation() {
    this.newFormation = true;
  }

  addExperience() {
    this.newExperience = true;
  }

  addLanguage() {
    this.newLanguage = true;
  }

  addTechnologie() {
    this.newTechnologie = true;
  }

  addCertification() {
    this.newCertification = true;
  }

  addSoftskill() {
    this.newSoftskill = true;
  }

  saveFormation() {
    const newFormation: EducationList = {
      institution: this.institution,
      courseName: this.courseName
    };
    this.education.push(newFormation);
    this.updateCurriculum();
    this.courseName = '';
    this.institution = '';
  }

  saveExperience() {
    const newExperience: ExperienceList = {
      officeName: this.officeName,
      company: this.company
    };
    this.experience.push(newExperience);
    this.updateCurriculum();
  }

  saveLanguage() {
    const newLanguage: LanguageList = {
      languageName: this.languageName,
      expertiseLanguage: this.expertiseLanguage
    };
    this.language.push(newLanguage);
    this.updateCurriculum();
  }

  saveTechnologie() {
    const newTechnologie: TechnologyList = {
      technologieName: this.technologieName,
      expertiseTechnologie: this.expertiseTechnologie
    };
    this.technology.push(newTechnologie);
    this.updateCurriculum();
  }

  saveCertification() {
    const newCertification: CertificationList = {
      certificationName: this.certificationName,
      certificationInstitution: this.certificationInstitution
    };
    this.certification.push(newCertification);
    this.updateCurriculum();
  }

  saveSoftskill() {
    const newSoftskill: SoftSkillList = {
      softSkill: this.softSkill
    };
    console.log('this.softSkills ->> ', this.softSkills);
    this.softSkills.push(newSoftskill);
    console.log("this.softSkills -> ", this.softSkills);
    // this.updateCurriculum();
    this.softSkill = '';
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

    console.log('this.softSkills aaa -> ', this.softSkills);
    console.log('curriculum.softSkills -> ', curriculum.softSkills);

    for (let i = 0; i < this.softSkills.length; i++) {
      console.log(this.softSkills[i]);
    }
  }

  getCurriculum() {
    this.resumeService.listResume().subscribe(
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

    this.resumeService.createResume(this.name, this.email, this.selectedState, education, experience, language, technology, certification, softSkills,
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
    const education: Record<string, string> = {};
    this.education.forEach(item => {
      education[item.institution] = item.courseName;
    });
    const experience: Record<string, string> = {};
    this.experience.forEach(item => {
      experience[item.company] = item.officeName;
    });

    const language: Record<string, string> = {};
    this.language.forEach(item => {
      language[item.languageName] = item.expertiseLanguage;
    });

    const technology: Record<string, string> = {};
    this.technology.forEach(item => {
      technology[item.technologieName] = item.expertiseTechnologie;
    });

    const certification: Record<string, string> = {};
    this.certification.forEach(item => {
      certification[item.certificationInstitution] = item.certificationName;
    });
    const softSkills: string = this.softSkills.join(', ');

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

  async deleteFormation(formation: EducationList) {
    this.education = this.education.filter(item => item !== formation);
    await this.delay(1000);
    this.updateCurriculum();
  }

  async deleteExperience(experience: ExperienceList) {
    this.experience = this.experience.filter(item => item !== experience);
    await this.delay(1000);
    this.updateCurriculum();
  }

  async deleteLanguage(language: LanguageList) {
    this.language = this.language.filter(item => item !== language);
    await this.delay(1000);
    this.updateCurriculum();
  }

  async deleteTechnologie(technology: TechnologyList) {
    this.technology = this.technology.filter(item => item !== technology);
    await this.delay(1000);
    this.updateCurriculum();
  }

  async deleteCertification(certification: CertificationList) {
    this.certification = this.certification.filter(item => item !== certification);
    await this.delay(1000);
    this.updateCurriculum();
  }

  async deleteSoftskill(softSkill: SoftSkillList) {
    this.softSkills = this.softSkills.filter(item => item !== softSkill);
    await this.delay(1000);
    this.updateCurriculum();
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


