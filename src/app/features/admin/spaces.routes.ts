import { Routes } from '@angular/router';
import { SpaceManagementComponent } from './pages/space-management/space-management.component';
import { SpaceFormComponent } from './components/space-form/space-form.component';

export const SPACES_ADMIN_ROUTES: Routes = [
  {
    path: '',
    component: SpaceManagementComponent,
  },
  {
    path: 'create',
    component: SpaceFormComponent,
  },
];
