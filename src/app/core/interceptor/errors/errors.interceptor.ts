import { HttpInterceptorFn } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { inject } from '@angular/core';

export const errorsInterceptor: HttpInterceptorFn = (req, next) => {


  const _toastrService  = inject(ToastrService)

  return next(req).pipe(catchError( (err)=>{

    _toastrService.error(err.error.message );

    return throwError(()=>err);
  } ));
};
