import { HttpInterceptorFn } from '@angular/common/http';

export const headerInterceptor: HttpInterceptorFn = (req, next) => {
  if (sessionStorage.getItem('userToken')) {
    req = req.clone({
      setHeaders: {
        token: sessionStorage.getItem('userToken')!,
      },
    });
  }

  return next(req);
};
