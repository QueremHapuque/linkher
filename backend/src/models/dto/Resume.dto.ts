import { Request } from 'express';

export interface ReqResumeDto extends Request {
  body: IResume;
}
export interface IResume {
  id?: number;
  userId?: number;
  name?: string;
  email?: string;
  state?: string;
  city?: string;
  education?: Record<string, string>;
  experience?: Record<string, string>;
  languages?: Record<string, string>;
  technologies?: Record<string, string>;
  certifications?: Record<string, string>;
  softSkills?: string;
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
