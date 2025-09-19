import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { environment } from '../../../environments/environment.development';
import { SpentResponse } from '../../shared/models/spent-response.model';
import { Spent } from '../../shared/models/spent.model';

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

  private spentsSource = new BehaviorSubject<SpentResponse>({
    spents: [],
    total: 0,
  });
  private spentSource = new BehaviorSubject<Spent | null>(null);

  spentsResponse$ = this.spentsSource.asObservable();
  spentResponse$ = this.spentSource.asObservable();

  constructor(private http: HttpClient) {}

  getAllSpents(token: string | null) {
    const headers = getHeaders(token);

    this.http
      .get<SpentResponse>(`${this.apiUrl}/gastos/listar`, {
        headers,
      })
      .subscribe((res) => {
        this.spentsSource.next(res);
      });
  }

  getSpentsByType(token: string | null, type?: string) {
    const headers = getHeaders(token);
    let url = `${this.apiUrl}/gastos/listar-por-tipo`;
    if (type) {
      url += `?type=${type}`;
    }

    this.http.get<SpentResponse>(url, { headers }).subscribe((res) => {
      this.spentsSource.next(res);
    });
  }

  getSpentById(token: string | null, id: number | undefined) {
    const headers = getHeaders(token);
    let url = `${this.apiUrl}/gastos/detalhar`;
    if (id) {
      url += `/${id}`;
    }

    this.http.get<Spent>(url, { headers }).subscribe((res) => {
      this.spentSource.next(res);
    });
  }
}
