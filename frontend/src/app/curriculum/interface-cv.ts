export interface EducationList {
    courseName: string;
    institution: string;
}

export interface ExperienceList {
    officeName: string;
    company: string;
}

export interface LanguageList {
    languageName: string;
    expertiseLanguage: string;
}

export interface TechnologyList {
    technologieName: string;
    expertiseTechnologie: string;
}

export interface CertificationList {
    certificationName: string;
    certificationInstitution: string;
}

export interface SoftSkillList {
    softSkill: string;
}

export interface Curriculum {
    id: number;
    userId: number;
    name: string;
    email: string;
    state: string;
    education: EducationList[];
    experience: ExperienceList[];
    languages: LanguageList[];
    technologies: TechnologyList[];
    certifications: CertificationList[];
    softSkills: SoftSkillList[];
    isSearch: boolean;
    isInternship: boolean;
    isClt: boolean;
    isPj: boolean;
    isInPerson: boolean;
    isRemote: boolean;
    isHybrid: boolean;
    isHalfTime: boolean;
    isThreeQuarters: boolean;
    isFullTime: boolean;
    isJunior: boolean;
    isPleno: boolean;
    isSenior: boolean; 
}
