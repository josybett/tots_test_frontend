import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-space-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './space-list.component.html',
  styleUrls: ['./space-list.component.scss'],
})
export class SpaceListComponent {
  spaces = [
    { id: 1, name: 'Sala de Conferencias A', type: 'Sala de Reuniones', capacity: 50 },
    { id: 2, name: 'Auditorio Principal', type: 'Auditorio', capacity: 200 },
    { id: 3, name: 'Sala de Juntas B', type: 'Sala de Reuniones', capacity: 20 },
    { id: 4, name: 'Espacio Creativo C', type: 'Coworking', capacity: 30 },
  ];
}
