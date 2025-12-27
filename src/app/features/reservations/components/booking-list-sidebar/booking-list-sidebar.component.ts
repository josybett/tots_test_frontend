import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-booking-list-sidebar',
  standalone: true,
  imports: [CommonModule, ButtonModule],
  templateUrl: './booking-list-sidebar.component.html',
  styleUrls: ['./booking-list-sidebar.component.scss']
})
export class BookingListSidebarComponent {
  menuItems = signal([
    { label: 'Activas', icon: 'pi pi-calendar', active: true },
    { label: 'Pasadas', icon: 'pi pi-history', active: false },
    { label: 'Canceladas', icon: 'pi pi-times-circle', active: false }
  ]);

  selectItem(selectedItem: any) {
    this.menuItems.update(items => 
      items.map(item => ({ ...item, active: item.label === selectedItem.label }))
    );
  }
}
