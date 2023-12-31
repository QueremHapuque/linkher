import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://localhost:3000/users';

  constructor(private http: HttpClient) { }

  createUser(name: string, email: string, password: string): Observable<any> {
    const data = {
      'name': name,
      'email': email,
      'password': password
    };

    return this.http.post(`${this.apiUrl}/create`, data);
  }

  login(email: string, password: string): Observable<any> {
    const data = {
      'email': email,
      'password': password
    };

    return this.http.post(`${this.apiUrl}/login`, data);
  }

}
