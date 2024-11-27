import { Component, inject } from '@angular/core';
import { ModalsService } from '../../../data/services/modal.service';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-logout-modal',
  standalone: true,
  imports: [],
  templateUrl: './logout-modal.component.html',
  styleUrl: './logout-modal.component.scss',
})
export class LogoutModalComponent {
  private modalsService = inject(ModalsService);
  private authService = inject(AuthService);

  cancel() {
    this.modalsService.logoutModalRef()?.close();
  }

  confirmLogout() {
    this.modalsService.logoutModalRef()?.close();
    this.authService.logout();
  }
}
