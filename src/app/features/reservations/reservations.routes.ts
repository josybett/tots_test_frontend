import { Routes } from '@angular/router';

export const RESERVATIONS_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/my-bookings/my-bookings.component').then(c => c.MyBookingsComponent)
  }
];
