import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';
import { jwtDecode } from 'jwt-decode';

const KEY = 'token';

@Injectable({
  providedIn: 'root',
})
export class TokenService {
  constructor(private storageService: StorageService) {}

  saveToken(token: string) {
    this.storageService.setItem(KEY, token);
  }

  deleteToken() {
    this.storageService.removeItem(KEY);
  }

  returnToken(): string | null {
    const token = this.storageService.getItem(KEY);
    if (!token) return null;

    if (this.isTokenExpired(token)) {
      this.deleteToken();
      return null;
    }

    return token;
  }

  hasToken() {
    return !!this.returnToken();
  }

  private isTokenExpired(token: string): boolean {
    try {
      const decoded: any = jwtDecode(token);
      const now = Math.floor(Date.now() / 1000);
      return decoded.exp < now;
    } catch (error) {
      console.error('Erro ao decodificar o token:', error);
      return true;
    }
  }
}
