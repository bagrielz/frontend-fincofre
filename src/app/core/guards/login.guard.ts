import { inject, PLATFORM_ID } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { isPlatformBrowser } from '@angular/common';

export const LoginGuard: CanActivateFn = () => {
  const authService = inject(AuthService);
  const router = inject(Router);
  const platformId = inject(PLATFORM_ID);

  if (!isPlatformBrowser(platformId)) {
    return true;
  }

  if (authService.isLoggedIn()) {
    router.navigateByUrl('/inicio');
    return false;
  }

  return true;
};
