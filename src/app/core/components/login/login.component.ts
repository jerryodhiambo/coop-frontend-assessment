import { Component, inject } from '@angular/core';
import { SharedModule } from '../../../shared/modules/shared.module';
import { FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { LoginRequest } from '../../../data/models/auth.model';
import { Router } from '@angular/router';
import { SharedService } from '../../../data/services/shared.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  loginForm: FormGroup;
  hidePassword = true;
  showPasswordStep = false;

  private router = inject(Router);

  private authService = inject(AuthService);
  private sharedService = inject(SharedService);
  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  proceedToPassword() {
    if (this.loginForm.get('username')?.valid) {
      this.showPasswordStep = true;
    }
  }

  onSubmit() {
    if (this.loginForm.valid) {
      this.authService
        .login(this.loginForm.value as LoginRequest)
        .subscribe((res) => {
          if (res) {
            localStorage.setItem('authUser', JSON.stringify(res));
            this.router.navigate(['/home/dashboard']);
            this.sharedService.toastMessage(
              {
                type: 'success',
                message: { title: 'Success', description: 'Login successful' },
              },
              3
            );
          }
        });
    }
  }
}
