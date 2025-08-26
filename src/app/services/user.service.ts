import { Injectable } from '@angular/core';
import { User } from '../shared/models/user.interface';
import { environment } from '../../environments/environment.development';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiUrl: string = environment.apiUrl;

  constructor(private http: HttpClient) {}

  register(user: User): Observable<User> {
    return this.http.post<User>(`${this.apiUrl}/usuarios/cadastrar`, user);
  }

  get(token: string | null): Observable<User> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });

    return this.http.get<User>(`${this.apiUrl}/usuarios/detalhar`, { headers });
  }

  update(token: string | null): Observable<User> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });

    return this.http.patch<User>(`${this.apiUrl}/usuarios/alterar`, {
      headers,
    });
  }
}
