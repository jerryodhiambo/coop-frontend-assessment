import { HttpInterceptorFn } from '@angular/common/http';

export const tokenInterceptor: HttpInterceptorFn = (req, next) => {
  // Get the token from localStorage
  const authUser = localStorage.getItem('authUser');

  const token = authUser ? JSON.parse(authUser).accessToken : null;

  // If token exists, clone the request and add the authorization header
  if (token) {
    const clonedRequest = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`,
      },
    });
    return next(clonedRequest);
  }

  // If no token, proceed with the original request
  return next(req);
};
