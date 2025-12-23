import { Routes } from '@angular/router';
import { SpaceListComponent } from './pages/space-list/space-list.component';
import { SpaceDetailComponent } from './pages/space-detail/space-detail.component';

export const SPACES_ROUTES: Routes = [
  {
    path: '',
    component: SpaceListComponent,
  },
  {
    path: ':id',
    component: SpaceDetailComponent,
  },
];
