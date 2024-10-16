import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  console.log('authGuard');

  const authService = inject(AuthService);
  const router = inject(Router);
  const isAuthenticated = authService.isLoggedIn();

  if(!isAuthenticated) {
    router.navigate(['/login']);
    return false;
  }

  return true;
};