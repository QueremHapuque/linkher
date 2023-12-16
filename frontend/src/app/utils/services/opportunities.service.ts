import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OpportunitiesService {
  private apiUrl = 'http://localhost:3000/user';
  private userToken = localStorage.getItem('TOKEN');
  private userId = localStorage.getItem('USER_ID')

  constructor(private http: HttpClient) {}


  getOpportunities(): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.userToken}`
    });
    const url = `${this.apiUrl}/jobVacancies/${this.userId}`;
    return this.http.get(url, { headers });
  }
}
