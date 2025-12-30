import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DatePickerModule } from 'primeng/datepicker';
import { SelectModule } from 'primeng/select';
import { InputTextModule } from 'primeng/inputtext';
import { MCTable, MCThTemplateDirective, MCTdTemplateDirective } from '@mckit/table';
import { MCColumn, MCListResponse } from '@mckit/core';

export interface Booking {
  id: number;
  spaceName: string;
  capacity: number;
  user: string;
  dateTime: string;
  status: 'Confirmed' | 'Pending' | 'Cancelled';
}

@Component({
  selector: 'app-booking-management',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ButtonModule,
    DatePickerModule,
    SelectModule,
    InputTextModule,
    MCTable,
    MCThTemplateDirective,
    MCTdTemplateDirective,
  ],
  templateUrl: './booking-management.component.html',
  styleUrls: ['./booking-management.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BookingManagementComponent {
  public searchControl = new FormControl('');
  public dateRangeControl = new FormControl<Date[] | null>(null);
  public statusControl = new FormControl<string | null>(null);
  public userControl = new FormControl<string | null>(null);

  private allBookings = signal<Booking[]>([
    {
      id: 1,
      spaceName: 'Executive Boardroom A',
      capacity: 12,
      user: 'John Doe',
      dateTime: 'Oct 26, 2023 | 09:00 AM - 11:00 AM',
      status: 'Confirmed',
    },
    {
      id: 2,
      spaceName: 'Grand Auditorium',
      capacity: 150,
      user: 'Jane Smith',
      dateTime: 'Oct 27, 2023 | 02:00 PM - 05:00 PM',
      status: 'Confirmed',
    },
    {
      id: 3,
      spaceName: 'Meeting Room B',
      capacity: 8,
      user: 'Alex Johnson',
      dateTime: 'Oct 28, 2023 | 10:00 AM - 12:00 PM',
      status: 'Pending',
    },
    {
      id: 4,
      spaceName: 'Executive Boardroom A',
      capacity: 12,
      user: 'Maria Garcia',
      dateTime: 'Oct 29, 2023 | 01:00 PM - 03:00 PM',
      status: 'Cancelled',
    },
    {
      id: 5,
      spaceName: 'Grand Auditorium',
      capacity: 150,
      user: 'Jane Smith',
      dateTime: 'Oct 27, 2023 | 02:00 PM - 05:00 PM',
      status: 'Pending',
    },
  ]);

  public filteredBookings = computed(() => {
    const searchTerm = this.searchControl.value?.toLowerCase() || '';
    const status = this.statusControl.value;
    const dateRange = this.dateRangeControl.value;
    // Lógica para el filtro de usuario pendiente de implementación

    return this.allBookings().filter(booking => {
      const bookingDate = new Date(booking.dateTime.split(' | ')[0]);

      const matchesSearch = searchTerm ? Object.values(booking).some(val =>
        String(val).toLowerCase().includes(searchTerm)
      ) : true;

      const matchesStatus = status ? booking.status === status : true;

      const matchesDate = dateRange && dateRange[0] && dateRange[1]
        ? bookingDate >= dateRange[0] && bookingDate <= dateRange[1]
        : true;

      return matchesSearch && matchesStatus && matchesDate;
    });
  });

  response = computed<MCListResponse<Booking>>(() => ({
    data: this.filteredBookings(),
  }));
  
  columns: MCColumn[] = [
    { field: 'spaceName', title: 'Nombre del Espacio', isSortable: true },
    { field: 'capacity', title: 'Capacidad', isSortable: true },
    { field: 'user', title: 'Usuario', isSortable: true },
    { field: 'dateTime', title: 'Día y Hora', isSortable: true },
    { field: 'status', title: 'Estatus', isSortable: true },
    { field: 'actions', title: 'Acciones' },
  ];

  statusOptions = [
    { label: 'Todos', value: null },
    { label: 'Confirmado', value: 'Confirmed' },
    { label: 'Pendiente', value: 'Pending' },
    { label: 'Cancelado', value: 'Cancelled' },
  ];

  userOptions = [
    { label: 'Todos los usuarios', value: null },
    { label: 'Mis Reservas', value: 'my-bookings' },
  ];
}
