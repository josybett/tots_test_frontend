import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';

export const routes: Routes = [
  {
    path: 'spaces/:id',
    loadComponent: () =>
      import('./features/spaces/pages/space-detail/space-detail.component').then(
        (m) => m.SpaceDetailComponent
      ),
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('./features/auth/auth.routes').then((m) => m.AUTH_ROUTES),
  },
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'spaces',
        loadChildren: () =>
          import('./features/spaces/spaces.routes').then((m) => m.SPACES_ROUTES),
      },
      {
        path: 'my-bookings',
        loadChildren: () =>
          import('./features/reservations/reservations.routes').then(
            (m) => m.RESERVATIONS_ROUTES
          ),
      },
      {
        path: 'admin',
        loadChildren: () =>
          import('./features/admin/admin.routes').then((m) => m.ADMIN_ROUTES),
      },
      {
        path: '',
        redirectTo: 'spaces',
        pathMatch: 'full',
      },
    ],
  },
];
