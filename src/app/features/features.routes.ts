import { Routes } from '@angular/router';

export const FeaturesRoutes: Routes = [
  {
    path: 'dashboard',
    loadComponent: () =>
      import('./dashboard/dashboard.component').then(
        (c) => c.DashboardComponent
      ),
  },
  {
    path: 'transactions',
    loadComponent: () =>
      import('./transactions/transactions.component').then(
        (c) => c.TransactionsComponent
      ),
  },
  {
    path: 'reports',
    loadComponent: () =>
      import('./reports/reports.component').then((c) => c.ReportsComponent),
  },
  {
    path: 'summary',
    loadComponent: () =>
      import(
        './dashboard/components/product-summary/product-summary.component'
      ).then((c) => c.ProductSummaryComponent),
  },
];
