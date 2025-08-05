import { Injectable, signal } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isAuthenticated = signal<boolean>(false);
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  login(login: string, password: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/auth/login`, { login, password });
  }

  logout() {
    this.isAuthenticated.set(false);
  }

  setAuthenticated(value: boolean) {
    this.isAuthenticated.set(value);
  }

  getIsAutheticated() {
    return this.isAuthenticated();
  }
}
