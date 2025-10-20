import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { TokenService } from '../../core/services/token.service';

@Injectable({ providedIn: 'root' })
export class AuthTokenHelperService {
  constructor(
    private tokenService: TokenService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  getToken(): string | null {
    if (!isPlatformBrowser(this.platformId)) return null;
    return this.tokenService.returnToken();
  }

  hasToken(): boolean {
    return !!this.getToken();
  }

  runIfBrowser<T>(callback: () => T): T | null {
    if (!isPlatformBrowser(this.platformId)) return null;
    return callback();
  }
}
