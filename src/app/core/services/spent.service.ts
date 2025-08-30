import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class SpentService {
  private apiUrl: string = environment.apiUrl;

  constructor(private http: HttpClient) {}
}
