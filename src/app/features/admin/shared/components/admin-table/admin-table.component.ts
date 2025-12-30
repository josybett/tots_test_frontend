import { Component, Input, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { MCTable, MCThTemplateDirective, MCTdTemplateDirective } from '@mckit/table';
import { MCColumn, MCListResponse } from '@mckit/core';

@Component({
  selector: 'app-admin-table',
  standalone: true,
  imports: [CommonModule, ButtonModule, MCTable, MCThTemplateDirective, MCTdTemplateDirective],
  styleUrl: './admin-table.component.scss',
  template: `
    <mc-table 
      [response]="response" 
      [columns]="columns" 
      [paginator]="true" 
      >
      <ng-template mcThTemplate let-column>
        {{ column.header }}
      </ng-template>
      <ng-template mcTdTemplate let-item let-column="column">
        <span [ngSwitch]="column.field">
          <ng-container *ngSwitchCase="'imageUrl'">
            <img *ngIf="item.imageUrl" [src]="item.imageUrl" [alt]="item.name" class="table-image">
            <div *ngIf="!item.imageUrl" class="default-logo-container"></div>
          </ng-container>
          <span *ngSwitchCase="'status'" [ngClass]="{'status-active': item.status === 'Active', 'status-inactive': item.status === 'Inactive'}">{{ item.status }}</span>
          <div *ngSwitchCase="'actions'">
            <p-button icon="pi pi-pencil" styleClass="p-button-sm action-button edit-button" (onClick)="onEdit.emit(item)"></p-button>
            <p-button icon="pi pi-trash" styleClass="p-button-sm action-button delete-button" (onClick)="onDelete.emit(item)"></p-button>
          </div>
          <a *ngSwitchCase="'name'" href="#" class="space-name-link">{{ item.name }}</a>
          <span *ngSwitchDefault>{{ item[column.field] }}</span>
        </span>
      </ng-template>
    </mc-table>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdminTableComponent {
  @Input() response: MCListResponse<any> | undefined;
  @Input() columns: MCColumn[] = [];

  @Output() onEdit = new EventEmitter<any>();
  @Output() onDelete = new EventEmitter<any>();
}
