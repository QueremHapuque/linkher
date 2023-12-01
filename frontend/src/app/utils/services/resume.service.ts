import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders  } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ResumeService {
  private apiUrl = 'http://localhost:3000/users/resume'
  private token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiZW1haWwiOiJxdWVyZW0ubGltYUBlbWFpbC5jb20iLCJpc0FkbWluIjpmYWxzZSwiaWF0IjoxNzAxNDAzOTYyLCJleHAiOjE3MDE0MjE5NjJ9.nupTQ1OmCfkSnxq92RwZZEUjfPkOedCBdtPUDca1m00'; 

  constructor(private http: HttpClient) { }

  setAuthToken(token: string) {
    this.token = token;
  }

  createResume(userId: number, name: string, email: string, state: string, education: Record<string, string>, experience: Record<string, string>,
    languages: Record<string, string>, technologies: Record<string, string>, certifications: Record<string, string>, softSkills: string,
    isSearch: boolean, isInternship: boolean, isClt: boolean, isPj: boolean, isInPerson: boolean, isRemote: boolean, isHybrid: boolean,
    isHalfTime: boolean, isThreeQuarters: boolean, isFullTime: boolean, isJunior: boolean, isPleno: boolean, isSenior: boolean) {
      const data = {
        'userId': userId,
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
        'Authorization': `Bearer ${this.token}`
      });
      return this.http.post(`${this.apiUrl}/create`, data, { headers }).subscribe(
        response => console.log(response),
        error => console.error(error)
      );
    }
}
