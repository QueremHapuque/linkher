// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class AcconutSettingsService {

//   constructor() { }
// }



// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
// export class AccountSettingsService {
//   private baseUrl = 'http://localhost:3000/user/update/1';

//   constructor(private http: HttpClient) {}

//   updateEmail(email: string): Observable<any> {
//     // Supondo que você precise enviar apenas o novo email para a API
//     const body = { email };

//     return this.http.put(this.baseUrl, body);
//   }
// }

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountSettingsService {
  private apiUrl = 'http://localhost:3000/user';

  constructor(private http: HttpClient) {}

  // updateEmail(userId: number, email: string, password: string): Observable<any> {
  //   const body = {
  //     email,
  //     password,
  //     is_admin: false
  //   };
  updateEmail(userId: number, email: string,): Observable<any> {
    const body = {
      email
    };
    // const url = `${this.apiUrl}/update/${userId}`;
    const url = `${this.apiUrl}/update/1`;
    return this.http.put(url, body);
  }
}
