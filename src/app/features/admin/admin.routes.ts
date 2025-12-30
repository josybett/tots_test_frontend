import { Routes } from '@angular/router';
export const ADMIN_ROUTES: Routes = [
  {
    path: 'spaces',
    loadChildren: () => import('./spaces.routes').then(m => m.SPACES_ADMIN_ROUTES)
  },
  {
    path: 'bookings',
    loadComponent: () => import('./pages/booking-management/booking-management.component').then(m => m.BookingManagementComponent)
  },
  {
    path: '',
    redirectTo: 'spaces',
    pathMatch: 'full',
  },
];
