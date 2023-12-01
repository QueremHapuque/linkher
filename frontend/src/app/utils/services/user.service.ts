import { Injectable } from '@angular/core';

import { HttpClient  } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://localhost:3000/users'

  constructor(private http: HttpClient) { }

  createUser(email: string, password: string) {
    const data = {
      'email': email,
      'password': password
    }

    return this.http.post(`${this.apiUrl}/create`, data).subscribe(
      response => console.log(response),
      error => console.error(error)
    )
  }
}
