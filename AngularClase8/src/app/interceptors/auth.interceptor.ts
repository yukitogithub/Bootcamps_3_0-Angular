import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { AuthService } from '../services/auth.service';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  console.log('authInterceptor');
  console.log("Request Previo: ", req);

  const authService = inject(AuthService);
  const token = authService.getToken();

  console.log("Token: ", token);
  if (token) {
    req = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });
  }

  console.log("Request Después: ", req);
  return next(req);
};
