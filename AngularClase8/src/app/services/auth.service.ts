import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap, throwError, catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseApiUrl = 'https://localhost:7147/api';
  private apiUrl = `${this.baseApiUrl}/account`;

  constructor(private http: HttpClient) {}

  login(credentials: { email: string, password: string }){
    return this.http.post(`${this.apiUrl}/login`, credentials)
      .pipe(
        tap((response: any) => {
          localStorage.setItem('authToken', response.token);
          localStorage.setItem('roles', response.roles);
        })
        ,
        catchError(error => {
          console.error("Error: ", error);
          return throwError(() => { new Error(error.message) });
        })
      )
  }

  logout(){
    localStorage.removeItem('authToken');
  }

  getToken(){
    return localStorage.getItem('authToken');
  }

  isLoggedIn(){
    return !!this.getToken();
  }

  getRoles() {
    var roles = localStorage.getItem('roles');
    console.log(roles);
    return roles || "";
  }
}
