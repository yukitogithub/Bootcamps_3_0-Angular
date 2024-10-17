import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const roleGuard: CanActivateFn = (route, state) => {
  console.log('roleGuard');
  
  const authService = inject(AuthService);
  const router = inject(Router);
  
  const expectedRole: string = route.data['expectedRole'];
  const roles = authService.getRoles();

  if(!roles.includes(expectedRole)) {
    router.navigate(['/unauthorized']);
    return false;
  }

  return true;
};
