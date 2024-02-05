import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountSettingsService {
  private apiUrl = 'http://localhost:3000/user';
  private userToken = localStorage.getItem('TOKEN');
  private userId = localStorage.getItem('USER_ID')

  constructor(private http: HttpClient) {}


  updateEmail(email: string,): Observable<any> {
    const body = {
      "email": email
    };
    const url = `${this.apiUrl}/update/${this.userId}`;
    return this.http.put(url, body);
  }
// função antiga para chamada da api
  updatePassword(userId: number, password: string,): Observable<any> {
    const body = {
      "password": password
    };
    // const url = `${this.apiUrl}/update/${userId}`;
    const url = `${this.apiUrl}/update/1`;
    return this.http.put(url, body);
  }
// nova função para chamada de api
  updatePasswordd( currentPassword: string, newPassword: string): Observable<any> {
    const body = {
      "currentPassword": currentPassword,
      "newPassword": newPassword
    };
    // const url = `${this.apiUrl}/update/${userId}`;
    const url = `${this.apiUrl}/update/${this.userId}`;
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.userToken}`
    });
    return this.http.put(url, body, { headers });
  }



  getUserEmail(): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.userToken}`
    });
    const url = `${this.apiUrl}/email/${this.userId}`;
    return this.http.get(url, { headers });
  }
}
