import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment.development';
import { Spent } from '../../shared/models/spent.interface';

function getHeaders(token: string | null): HttpHeaders {
  return new HttpHeaders({
    Authorization: `Bearer ${token}`,
  });
}

@Injectable({
  providedIn: 'root',
})
export class SpentService {
  private apiUrl: string = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getAllSpents(token: string | null): Observable<Spent[]> {
    const headers = getHeaders(token);

    return this.http.get<Spent[]>(`${this.apiUrl}/gastos/listar`, { headers });
  }
}
