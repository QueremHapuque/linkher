import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders  } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class JobVacancieService {
  private apiUrl = 'http://localhost:3000/users/jobVacancie'
  private userToken = localStorage.getItem('TOKEN');
  private userId = localStorage.getItem('USER_ID');

  constructor(private http: HttpClient) { }

  createOpportunitie(name: string, isJob: boolean, isSearch: boolean, company: string, link: string, description: string,
    requeriments: string, local: string, expireDate: string, isAffirmative: boolean, isInternship: boolean, isClt: boolean, isPj: boolean, isJunior: boolean,
    isPleno: boolean, isSenior: boolean, isInPerson: boolean, isRemote: boolean, isHybrid: boolean, isHalfTime: boolean, isThreeQuarters: boolean,
    isFullTime: boolean): Observable<any> {
      const data ={
        'user_id': this.userId,
        'name': name,
        'is_job': isJob,
        'is_researchCall': isSearch,
        'company': company,
        'link': link,
        'description': description,
        'requeriments': requeriments,
        'local': local,
        'expire_date': expireDate,
        'is_affirmative': isAffirmative,
        'is_internship': isInternship,
        'is_clt': isClt,
        'is_pj': isPj,
        'is_junior': isJunior,
        'is_pleno': isPleno,
        'is_senior': isSenior,
        'is_inPerson': isInPerson,
        'is_remote': isRemote,
        'is_hybrid': isHybrid,
        'is_halfTime': isHalfTime,
        'is_threeQuarters': isThreeQuarters,
        'is_fullTime': isFullTime
      };

      const headers = new HttpHeaders({
        'Authorization': `Bearer ${this.userToken}`
      });

      return this.http.post(`${this.apiUrl}/create`, data, { headers });
    }
}