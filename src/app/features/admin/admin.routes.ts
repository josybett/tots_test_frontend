import { Routes } from '@angular/router';
export const ADMIN_ROUTES: Routes = [
  {
    path: 'spaces',
    loadChildren: () => import('./spaces.routes').then(m => m.SPACES_ADMIN_ROUTES)
  },
  {
    path: 'reservations',
    // This should be lazy-loaded as well in a real app
    // For now, keeping it as is.
    loadComponent: () => import('./pages/reservation-list/reservation-list.component').then(m => m.ReservationListComponent)
  },
  {
    path: '',
    redirectTo: 'spaces',
    pathMatch: 'full',
  },
];
