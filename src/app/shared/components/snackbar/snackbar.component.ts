import { Component, Inject } from '@angular/core';
import { MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';
import { CustomNotification } from '../../../data/models/general.model';
import { SharedModule } from '../../modules/shared.module';

@Component({
  selector: 'app-snackbar',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './snackbar.component.html',
  styleUrl: './snackbar.component.scss',
})
export class SnackbarComponent {
  constructor(@Inject(MAT_SNACK_BAR_DATA) public data: CustomNotification) {}
}
