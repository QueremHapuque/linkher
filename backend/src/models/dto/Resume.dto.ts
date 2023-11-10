interface ResumeDto {
  id: number;
  userId: number;
  name: string;
  email: string;
  state: string;
  education: Record<string, string>;
  experience: Record<string, string>;
  languages: Record<string, string>;
  technologies: Record<string, string>;
  certifications: Record<string, string>;
  softSkills: string;
  contractType: 'CLT' | 'ESTÁGIO' | 'PJ';
  seniority: 'JUNIOR' | 'PLENO' | 'SENIOR';
  modality: 'PRESENCIAL' | 'REMOTO' | 'HÍBRIDO';
  workingHours: '20' | '30' | '40';
}

export default ResumeDto;
