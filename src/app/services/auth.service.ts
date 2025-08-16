import { Injectable, signal } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { UserService } from './user.service';

interface AuthResponse {
  token: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isAuthenticated = signal<boolean>(false);
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient, private userService: UserService) {}

  authenticate(
    login: string,
    password: string
  ): Observable<HttpResponse<AuthResponse>> {
    return this.http
      .post<AuthResponse>(
        `${this.apiUrl}/auth/login`,
        { login, password },
        { observe: 'response' }
      )
      .pipe(
        tap((res) => {
          const authToken = res.body?.token || '';
          this.userService.saveToken(authToken);
        })
      );
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
