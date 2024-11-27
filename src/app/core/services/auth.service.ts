import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { LoginRequest } from '../../data/models/auth.model';
import { environment } from '../../../environments/environment';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private http = inject(HttpClient);
  private router = inject(Router);

  login(payload: LoginRequest) {
    return this.http.post(`${environment.apiUrl}/auth/login`, payload);
  }

  logout() {
    localStorage.removeItem('authUser');
    this.router.navigate(['/auth']);
  }
}
