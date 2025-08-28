import { Injectable, signal } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { TokenService } from './token.service';
import { jwtDecode } from 'jwt-decode';
import { User } from '../shared/interfaces/user.interface';

interface AuthResponse {
  token: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = environment.apiUrl;
  private userSubject = new BehaviorSubject<User | null>(null);

  constructor(private http: HttpClient, private tokenService: TokenService) {
    if (this.tokenService.hasToken()) {
      this.decodeJWT();
    }
  }

  decodeJWT() {
    const token = this.tokenService.returnToken();
    if (!token) {
      return console.log('Token vazio');
    }
    const user = jwtDecode<User>(token);
    this.userSubject.next(user);
  }

  authenticate(
    login: string,
    password: string
  ): Observable<HttpResponse<AuthResponse>> {
    return this.http.post<AuthResponse>(
      `${this.apiUrl}/auth/login`,
      { login, password },
      { observe: 'response' }
    );
  }

  saveToken(token: string) {
    this.tokenService.saveToken(token);
    this.decodeJWT();
  }

  getUser() {
    return this.userSubject.asObservable();
  }

  getCurrentUser() {
    return this.userSubject.value;
  }

  isLoggedIn(): boolean {
    return this.tokenService.hasToken();
  }

  logout() {
    this.tokenService.deleteToken();
    this.userSubject.next(null);
  }
}
