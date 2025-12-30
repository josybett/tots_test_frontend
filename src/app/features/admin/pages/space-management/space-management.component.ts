import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { MCTable, MCThTemplateDirective, MCTdTemplateDirective } from '@mckit/table';
import { MCColumn, MCListResponse } from '@mckit/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-space-management',
  standalone: true,
  imports: [CommonModule, RouterModule, ButtonModule, MCTable, MCThTemplateDirective, MCTdTemplateDirective, ReactiveFormsModule],
  templateUrl: './space-management.component.html',
  styleUrls: ['./space-management.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SpaceManagementComponent {
  private router = inject(Router);
  public searchControl = new FormControl('');

  // Mock response for now
  response: MCListResponse<any> = {
    data: [
      { id: 1, name: 'Conference Room A', type: 'Meeting Room', capacity: 10 },
      { id: 2, name: 'Auditorium B', type: 'Auditorium', capacity: 150 },
    ]
  };

  columns: MCColumn[] = [
    { field: 'name', title: 'Nombre', isSortable: true },
    { field: 'type', title: 'Tipo', isSortable: true },
    { field: 'capacity', title: 'Capacidad', isSortable: true },
    { field: 'actions', title: 'Acciones' },
  ];

  private originalData = this.response.data;

  navigateToAddSpace() {
    this.router.navigate(['/admin/spaces/create']);
  }

  onFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value.toLowerCase();
    if (filterValue) {
      this.response.data = this.originalData.filter(item => {
        return Object.values(item).some(val => 
          String(val).toLowerCase().includes(filterValue)
        );
      });
    } else {
      this.response.data = this.originalData;
    }
  }
}
