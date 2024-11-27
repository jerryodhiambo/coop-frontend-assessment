import { Routes } from '@angular/router';
import { LoginComponent } from './core/components/login/login.component';
import { FeaturesRoutes } from './features/features.routes';
import { FeaturesComponent } from './features/features.component';

export const routes: Routes = [
  { path: '', redirectTo: 'auth', pathMatch: 'full' },
  { path: 'auth', component: LoginComponent },
  {
    path: 'home',
    component: FeaturesComponent,
    children: [...FeaturesRoutes],
  },
];
