import { isPlatformBrowser } from '@angular/common';
import { inject, PLATFORM_ID } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const notLoggedGuard: CanActivateFn = (route, state) => {
  const _router = inject(Router);
  const _pLATFORM_ID = inject(PLATFORM_ID);

  if (isPlatformBrowser(_pLATFORM_ID)) {
    if (sessionStorage.getItem('userToken')) {
      return true;
    } else {
      _router.navigate(['/login']);
      return false;
    }
  } else {
    return false;
  }
};
