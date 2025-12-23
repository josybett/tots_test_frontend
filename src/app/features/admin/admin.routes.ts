import { Routes } from '@angular/router';
import { ReservationListComponent } from './pages/reservation-list/reservation-list.component';
import { SpaceCreateComponent } from './pages/space-create/space-create.component';
import { SpaceListComponent } from './pages/space-list/space-list.component';

export const ADMIN_ROUTES: Routes = [
  {
    path: 'reservations',
    component: ReservationListComponent,
  },
  {
    path: 'spaces/create',
    component: SpaceCreateComponent,
  },
  {
    path: 'spaces',
    component: SpaceListComponent,
  },
  {
    path: '',
    redirectTo: 'spaces',
    pathMatch: 'full',
  },
];
