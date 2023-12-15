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
  languages!: LanguageList[];
  technologies!: TechnologyList[];
  certifications!: CertificationList[];
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
    this.education = [{"courseName": '', "institution": ''}];
    this.experience = [{"officeName": '', "company": ''}];
    this.languages = [{"languageName": '', "expertiseLanguage": ''}];
    this.technologies = [{"technologieName": '', "expertiseTechnologie": ''}];
    this.certifications = [{"certificationName": '', "certificationInstitution": ''}];
    this.softSkills = [{"softSkill": ''}];
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
      courseName: this.courseName,
      institution: this.institution
    };
    this.curriculum.education.push(newFormation);
    console.log('this.curriculum.education -> ', this.curriculum.education)
    this.updateCurriculum();
    this.courseName = '';
    this.institution = '';
  }

  saveExperience() {
    const newExperience: ExperienceList = {
      officeName: this.officeName,
      company: this.company
    };
    this.curriculum.experience.push(newExperience);
    this.updateCurriculum();
  }

  saveLanguage() {
    const newLanguage: LanguageList = {
      languageName: this.languageName,
      expertiseLanguage: this.expertiseLanguage
    };
    this.curriculum.languages.push(newLanguage);
    this.updateCurriculum();
  }

  saveTechnologie() {
    const newTechnologie: TechnologyList = {
      technologieName: this.technologieName,
      expertiseTechnologie: this.expertiseTechnologie
    };
    this.curriculum.technologies.push(newTechnologie);
    this.updateCurriculum();
  }

  saveCertification() {
    const newCertification: CertificationList = {
      certificationName: this.certificationName,
      certificationInstitution: this.certificationInstitution
    };
    this.curriculum.certifications.push(newCertification);
    this.updateCurriculum();
  }

  saveSoftskill() {
    const newSoftskill: SoftSkillList = {
      softSkill: this.softSkill
    };
    this.curriculum.softSkills.push(newSoftskill);
    this.updateCurriculum();
    this.softSkill = '';
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
        }
      },
      (error) => {
        console.error(error);
      }
    );
  }

  saveCurriculum() {
    const education: EducationList = {
      courseName: this.courseName,
      institution: this.institution
    };
    this.education.push(education);
    const experience: ExperienceList = {
      officeName: this.officeName,
      company: this.company
    };
    this.experience.push(experience);
    const languages: LanguageList = {
      languageName: this.languageName,
      expertiseLanguage: this.expertiseLanguage
    };
    this.languages.push(languages);
    const technologies: TechnologyList = {
      technologieName: this.technologieName,
      expertiseTechnologie: this.expertiseTechnologie
    };
    this.technologies.push(technologies);
    const certifications: CertificationList = {
      certificationName: this.certificationName,
      certificationInstitution: this.certificationInstitution
    };
    this.certifications.push(certifications);
    const softSkills: SoftSkillList = {
      softSkill: this.softSkill
    };
    this.softSkills.push(softSkills);

    this.resumeService.createResume(this.name, this.email, this.selectedState, this.education, this.experience, this.languages, this.technologies, this.certifications,
      this.softSkills, this.researchGrant, this.internship, this.clt, this.pj, this.inPerson, this.remote, this.hybrid, this.halfTime, this.threeQuarters, this.fullTime,
      this.beginner, this.intermediary,
      this.advanced).subscribe(
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
    this.resumeService.updateResume(Number(localStorage.getItem('RESUME_ID')), this.name, this.email, this.selectedState, this.curriculum.education, this.curriculum.experience, this.curriculum.languages,
    this.curriculum.technologies, this.curriculum.certifications, this.curriculum.softSkills, this.researchGrant, this.internship, this.clt, this.pj, this.inPerson, this.remote, this.hybrid, this.halfTime,
    this.threeQuarters, this.fullTime, this.beginner, this.intermediary, this.advanced).subscribe(
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
    this.curriculum.education = this.curriculum.education.filter(item => item !== formation);
    await this.delay(1000);
    this.updateCurriculum();
  }

  async deleteExperience(experience: ExperienceList) {
    this.curriculum.experience = this.curriculum.experience.filter(item => item !== experience);
    await this.delay(1000);
    this.updateCurriculum();
  }

  async deleteLanguage(language: LanguageList) {
    this.curriculum.languages = this.curriculum.languages.filter(item => item !== language);
    await this.delay(1000);
    this.updateCurriculum();
  }

  async deleteTechnologie(technology: TechnologyList) {
    this.curriculum.technologies = this.curriculum.technologies.filter(item => item !== technology);
    await this.delay(1000);
    this.updateCurriculum();
  }

  async deleteCertification(certification: CertificationList) {
    this.curriculum.certifications = this.curriculum.certifications.filter(item => item !== certification);
    await this.delay(1000);
    this.updateCurriculum();
  }

  async deleteSoftskill(softSkill: SoftSkillList) {
    this.curriculum.softSkills = this.curriculum.softSkills.filter(item => item !== softSkill);
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


