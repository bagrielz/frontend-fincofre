import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';

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
    return this.storageService.getItem(KEY);
  }

  hasToken() {
    return !!this.returnToken();
  }
}
