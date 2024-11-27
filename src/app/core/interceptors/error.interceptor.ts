import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { SharedService } from '../../data/services/shared.service';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  const sharedService = inject(SharedService);

  return next(req).pipe(
    catchError((error: HttpErrorResponse) => {
      let errorMessage = 'An unknown error occurred';

      if (error.error instanceof ErrorEvent) {
        // Client-side error
        errorMessage = error.error.message;
      } else {
        // Server-side error
        errorMessage = error.error?.message || error.message || errorMessage;
      }

      // Show error toast
      sharedService.toastMessage(
        {
          type: 'error',
          message: { title: 'Something went wrong', description: errorMessage },
        },
        3
      );

      return throwError(() => error);
    })
  );
};
