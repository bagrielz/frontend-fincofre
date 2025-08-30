import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment.development';
import { User } from '../../shared/models/user.model';

@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  private apiUrl: string = environment.apiUrl;

  constructor(private http: HttpClient) {}

  register(user: User): Observable<User> {
    return this.http.post<User>(`${this.apiUrl}/usuarios/cadastrar`, user);
  }
}
