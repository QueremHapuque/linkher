import { Request } from 'express';

export interface ReqJobVacanciesDto extends Request {
  body: IJobVacancie;
}
export interface IJobVacancie {
  id?: number;
  user_id?: number;
  name?: string;
  oportunity_type?: 'Vaga de emprego' | 'Edital de Pesquisa';
  company?: string;
  link?: string;
  description?: string;
  requeriments?: string;
  local?: string;
  expire_date?: Date;
  is_affirmative?: boolean;
  contract_type?: 'CLT' | 'ESTÁGIO' | 'PJ';
  seniority?: 'JUNIOR' | 'PLENO' | 'SENIOR';
  modality?: 'PRESENCIAL' | 'REMOTO' | 'HÍBRIDO';
  working_hours?: '20' | '30' | '40';
  is_secure?: boolean;
}
