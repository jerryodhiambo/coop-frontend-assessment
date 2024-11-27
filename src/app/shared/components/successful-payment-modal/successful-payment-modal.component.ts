import { Component, inject } from '@angular/core';
import { SharedModule } from '../../modules/shared.module';
import { ModalsService } from '../../../data/services/modal.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-successful-payment-modal',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './successful-payment-modal.component.html',
  styleUrl: './successful-payment-modal.component.scss',
})
export class SuccessfulPaymentModalComponent {
  today = new Date().toISOString();
  private modalsService = inject(ModalsService);
  data = inject(MAT_DIALOG_DATA);
  private router = inject(Router);

  done() {
    this.modalsService.successPaymentRef()?.close();
    this.router.navigate(['/home/dashboard']);
  }

  downloadReceipt() {
    console.log('downloadReceipt');
  }
}
