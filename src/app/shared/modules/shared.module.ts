import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatSlideToggle } from '@angular/material/slide-toggle';
import { MatDialogContent, MatDialogModule } from '@angular/material/dialog';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatChipsModule } from '@angular/material/chips';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';

const modules = [
  CommonModule,
  FormsModule,
  ReactiveFormsModule,
  MatCardModule,
  MatIconModule,
  MatInputModule,
  MatFormFieldModule,
  MatSelectModule,
  MatExpansionModule,
  MatRadioModule,
  MatCheckboxModule,
  MatButtonModule,
  MatDividerModule,
  MatSlideToggle,
  MatDialogModule,
  MatDialogContent,
  MatDatepickerModule,
  MatAutocompleteModule,
  MatChipsModule,
  MatToolbarModule,
  MatSidenavModule,
  MatListModule,
];

@NgModule({
  imports: modules,
  exports: modules,
})
export class SharedModule {}
