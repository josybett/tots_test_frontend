import { Component, ChangeDetectionStrategy, OnInit, computed, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

import { MCColumn, MCListResponse } from '@mckit/core';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { AdminTableComponent } from '../../shared/components/admin-table/admin-table.component';

import { SpaceService, Space } from '../../services/space.service';
import { SPACE_COLUMNS } from './space-columns.config';
import {  } from '@mckit/table';

@Component({
  selector: 'app-admin-space-list',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ButtonModule, 
    InputTextModule,
    AdminTableComponent
  ],
  templateUrl: './space-list.component.html',
  styleUrls: ['./space-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SpaceListComponent implements OnInit {
  private spaceService = inject(SpaceService);
  private router = inject(Router);

  public isLoading = signal(true);
  private allSpaces = signal<Space[]>([]);
  public searchControl = new FormControl('');

  public filteredSpaces = computed(() => {
    const searchTerm = this.searchControl.value?.toLowerCase() ?? '';
    if (!searchTerm) {
      return this.allSpaces();
    }
    return this.allSpaces().filter(space => 
      space.name.toLowerCase().includes(searchTerm) ||
      space.type.toLowerCase().includes(searchTerm)
    );
  });

  public columns: MCColumn[] = SPACE_COLUMNS;

  spacesResponse = computed(() => {
    return { data: this.filteredSpaces() } as MCListResponse<Space>;
  });

  ngOnInit() {
    this.loadSpaces();
  }

  private loadSpaces() {
    this.isLoading.set(true);
    this.spaceService.getSpaces().subscribe({
      next: (data) => {
        this.allSpaces.set(data);
        this.isLoading.set(false);
      },
      error: () => this.isLoading.set(false),
    });
  }

  onAddSpace() {
    this.router.navigate(['/admin/spaces/create']);
  }

  onEdit(space: Space) {
    console.log('Edit', space);
  }

  onDelete(space: Space) {
    console.log('Delete', space);
  }
}
