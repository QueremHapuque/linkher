import { Request } from 'express';

export interface ReqResumeDto extends Request {
  body: IResume;
}

export interface EducationItem {
  courseName: string;
  institution: string;
}

export interface ExperiencieItem {
  officeName: string;
  company: string;
}

export interface LanguagesItem {
  languageName: string;
  expertiseLanguage: string;
}

export interface TechnologiesItem {
  technologieName: string;
  expertiseTechnologie: string;
}

export interface CertificationsItem {
  certificationName: string;
  certificationInstitution: string;
}

export interface SoftSkillItem {
  softSkill: string;
}

export interface IResume {
  id?: number;
  userId?: number;
  name?: string;
  email?: string;
  state?: string;
  city?: string;
  education?: EducationItem[];
  experience?: ExperiencieItem[];
  languages?: LanguagesItem[];
  technologies?: TechnologiesItem[];
  certifications?: CertificationsItem[];
  softSkills?: SoftSkillItem[];
  isClt?: boolean;
  isInternship?: boolean;
  isPj?: boolean;
  isSearch?: boolean;
  isJunior?: boolean;
  isPleno?: boolean;
  isSenior?: boolean;
  isInPerson?: boolean;
  isRemote?: boolean;
  isHybrid?: boolean;
  isHalfTime?: boolean;
  isThreeQuarters?: boolean;
  isFullTime?: boolean;
}
