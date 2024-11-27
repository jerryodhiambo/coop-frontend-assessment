import { inject, Injectable, signal } from '@angular/core';
import {
  MatDialog,
  MatDialogConfig,
  MatDialogRef,
} from '@angular/material/dialog';

import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { LogoutModalComponent } from '../../shared/components/logout-modal/logout-modal.component';
import { SuccessfulPaymentModalComponent } from '../../shared/components/successful-payment-modal/successful-payment-modal.component';

interface ModalData {
  entity?: string;
  data?: any;
}
@Injectable({
  providedIn: 'root',
})
export class ModalsService {
  breakpointObserver = inject(BreakpointObserver);

  logoutModalRef = signal<MatDialogRef<LogoutModalComponent> | null>(null);
  successPaymentRef =
    signal<MatDialogRef<SuccessfulPaymentModalComponent> | null>(null);
  dialog = inject(MatDialog);

  logoutModal(data: ModalData) {
    const dialogConfig = this.getDialogConfig(data);
    const dialogRef = this.dialog.open<LogoutModalComponent>(
      LogoutModalComponent,
      dialogConfig
    );
    this.logoutModalRef.set(dialogRef);
  }

  successfulPaymentModal(data: ModalData) {
    const dialogConfig = this.getDialogConfig(data);
    const dialogRef = this.dialog.open<SuccessfulPaymentModalComponent>(
      SuccessfulPaymentModalComponent,
      dialogConfig
    );
    this.successPaymentRef.set(dialogRef);
  }

  private getDialogConfig(data: ModalData): MatDialogConfig {
    const isXSmall = this.breakpointObserver.isMatched(Breakpoints.XSmall);
    const isSmall = this.breakpointObserver.isMatched(Breakpoints.Small);
    const isMedium = this.breakpointObserver.isMatched(Breakpoints.Medium);

    let config: MatDialogConfig = {
      data,
      disableClose: true,
    };

    if (isXSmall) {
      config = {
        ...config,
        maxWidth: '100vw',
        maxHeight: '100vh',
        height: '100%',
        width: '100%',
      };
    } else if (isSmall) {
      config = {
        ...config,
        maxWidth: '90vw',
        maxHeight: '90vh',
        height: '90%',
        width: '90%',
      };
    } else if (isMedium) {
      config = {
        ...config,
        maxWidth: '50vw',
        width: '30%',
      };
    } else {
      config = {
        ...config,
        maxWidth: '50vw',
        width: '30%',
      };
    }

    return config;
  }
}
