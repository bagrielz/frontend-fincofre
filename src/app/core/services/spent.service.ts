import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, catchError, Observable, of } from 'rxjs';
import { environment } from '../../../environments/environment.development';
import { SpentResponse } from '../../shared/models/spent-response.model';
import { Spent } from '../../shared/models/spent.model';
import { TokenService } from './token.service';
import { isPlatformBrowser } from '@angular/common';
import { AuthTokenHelperService } from '../../shared/helpers/auth.helper';

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

  constructor(
    private http: HttpClient,
    private authHelper: AuthTokenHelperService
  ) {}

  createSpent(token: string | null, data: Partial<Spent>): Observable<Spent> {
    const headers = getHeaders(token);

    return this.http.post<Spent>(`${this.apiUrl}/gastos/cadastrar`, data, {
      headers,
    });
  }

  getAllSpents() {
    this.authHelper.runIfBrowser(() => {
      const token = this.authHelper.getToken();
      if (!token) return;

      const headers = getHeaders(token);
      this.http
        .get<SpentResponse>(`${this.apiUrl}/gastos/listar`, {
          headers,
        })
        .pipe(
          catchError((err) => {
            console.warn('Nenhum gasto encontrado', err);
            return of({ spents: [], total: 0 });
          })
        )
        .subscribe((res) => {
          this.spentsSource.next(res);
        });
    });
  }

  getSpentsByType(type?: string) {
    this.authHelper.runIfBrowser(() => {
      const token = this.authHelper.getToken();
      if (!token) return;

      const headers = getHeaders(token);
      let url = `${this.apiUrl}/gastos/listar-por-tipo`;
      if (type) {
        url += `?type=${type}`;
      }

      this.http
        .get<SpentResponse>(url, { headers })
        .pipe(
          catchError((err) => {
            console.warn('Nenhum gasto encontrado', err);
            return of({ spents: [], total: 0 });
          })
        )
        .subscribe((res) => {
          this.spentsSource.next(res);
        });
    });
  }

  getSpentById(
    token: string | null,
    id: number | undefined
  ): Observable<Spent> {
    const headers = getHeaders(token);
    let url = `${this.apiUrl}/gastos/detalhar`;
    if (id) {
      url += `/${id}`;
    }

    return this.http.get<Spent>(url, { headers });
  }

  updateSpent(
    token: string | null,
    data: Partial<Spent>,
    id: number
  ): Observable<Spent> {
    const headers = getHeaders(token);
    if (!id) {
      console.error('ID não existe');
    }
    const url = `${this.apiUrl}/gastos/atualizar/${id}`;

    return this.http.patch<Spent>(url, data, { headers });
  }
}
