import { Component, inject, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/modules/shared.module';
import { Router } from '@angular/router';
import { AuthUser } from '../data/models/auth.model';
import { ModalsService } from '../data/services/modal.service';

@Component({
  selector: 'app-features',
  standalone: true,
  imports: [SharedModule, RouterModule],
  templateUrl: './features.component.html',
  styleUrl: './features.component.scss',
})
export class FeaturesComponent implements OnInit {
  username = 'John Doe';

  private router = inject(Router);
  authUser: AuthUser = JSON.parse(localStorage.getItem('authUser') || '{}');
  private modalService = inject(ModalsService);
  navigateTo(route: string): void {
    this.router.navigate([`/home/${route}`]);
  }

  ngOnInit(): void {
    const authUser: AuthUser = JSON.parse(
      localStorage.getItem('authUser') || '{}'
    );
    this.username = `${this.authUser.firstName} ${this.authUser.lastName}`;
  }

  logout(): void {
    this.modalService.logoutModal({});
  }
}
