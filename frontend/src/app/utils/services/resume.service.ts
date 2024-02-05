import { Injectable } from '@angular/core';
import { Curriculum, EducationList, ExperienceList, LanguageList, TechnologyList, CertificationList, SoftSkillList } from 'src/app/curriculum/interface-cv';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResumeService {
  private apiUrl = 'http://localhost:3000/users/resume'
  private apiUrl2 = 'http://localhost:3000/user/resume'
  private userToken = localStorage.getItem('TOKEN');
  private userId = localStorage.getItem('USER_ID');

  constructor(private http: HttpClient) { }

  listResume(): Observable<Curriculum> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.userToken}`
    });
    return this.http.get<Curriculum>(`${this.apiUrl}/${this.userId}`,{ headers })
  }

  createResume(name: string, email: string, state: string, education: EducationList[], experience: ExperienceList[], languages: LanguageList[],
    technologies: TechnologyList[], certifications: CertificationList[], softSkills: SoftSkillList[], isSearch: boolean, isInternship: boolean,
    isClt: boolean, isPj: boolean, isInPerson: boolean, isRemote: boolean, isHybrid: boolean, isHalfTime: boolean, isThreeQuarters: boolean,
    isFullTime: boolean, isJunior: boolean, isPleno: boolean, isSenior: boolean): Observable<Curriculum> {
    const data = {
      'userId': this.userId,
      'name': name,
      'email': email,
      'state': state,
      'education': education,
      'experience': experience,
      'languages': languages,
      'technologies': technologies,
      'certifications': certifications,
      'softSkills': softSkills,
      'isSearch': isSearch,
      'isInternship': isInternship,
      'isClt': isClt,
      'isPj': isPj,
      'isInPerson': isInPerson,
      'isRemote': isRemote,
      'isHybrid': isHybrid,
      'isHalfTime': isHalfTime,
      'isThreeQuarters': isThreeQuarters,
      'isFullTime': isFullTime,
      'isJunior': isJunior,
      'isPleno': isPleno,
      'isSenior': isSenior
    };
  
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.userToken}`
    });
  
    return this.http.post<Curriculum>(`${this.apiUrl}/create`, data, { headers });
  }

    updateResume(id: number, name: string, email: string, state: string, education: EducationList[], experience: ExperienceList[], languages: LanguageList[],
      technologies: TechnologyList[], certifications: CertificationList[], softSkills: SoftSkillList[], isSearch: boolean, isInternship: boolean,
      isClt: boolean, isPj: boolean, isInPerson: boolean, isRemote: boolean, isHybrid: boolean, isHalfTime: boolean, isThreeQuarters: boolean,
      isFullTime: boolean, isJunior: boolean, isPleno: boolean, isSenior: boolean): Observable<Curriculum> {
      const data = {
        'id': id,
        'name': name,
        'email': email,
        'state': state,
        'education': education,
        'experience': experience,
        'languages': languages,
        'technologies': technologies,
        'certifications': certifications,
        'softSkills': softSkills,
        'isSearch': isSearch,
        'isInternship': isInternship,
        'isClt': isClt,
        'isPj': isPj,
        'isInPerson': isInPerson,
        'isRemote': isRemote,
        'isHybrid': isHybrid,
        'isHalfTime': isHalfTime,
        'isThreeQuarters': isThreeQuarters,
        'isFullTime': isFullTime,
        'isJunior': isJunior,
        'isPleno': isPleno,
        'isSenior': isSenior
      }
      const headers = new HttpHeaders({
        'Authorization': `Bearer ${this.userToken}`
      });
      return this.http.put<Curriculum>(`${this.apiUrl2}/update/${this.userId}`, data, { headers })
    }
}
