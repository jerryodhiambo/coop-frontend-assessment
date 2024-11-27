import { inject, Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackbarComponent } from '../../shared/components/snackbar/snackbar.component';
import { CustomNotification } from '../models/general.model';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  private _matSnackBar = inject(MatSnackBar);
  constructor() {}

  toastMessage(data: CustomNotification, duration: number, position?: string) {
    this._matSnackBar.openFromComponent(SnackbarComponent, {
      duration: duration * 1000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
      data,
    });
  }
}
