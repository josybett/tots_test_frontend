import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookingListSidebarComponent } from '../../components/booking-list-sidebar/booking-list-sidebar.component';
import { BookingCardComponent } from '../../components/booking-card/booking-card.component';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { ScrollTopComponent } from '../../../../shared/components/scroll-top/scroll-top.component';

@Component({
  selector: 'app-my-bookings',
  standalone: true,
  imports: [CommonModule, BookingListSidebarComponent, BookingCardComponent, ProgressSpinnerModule, ScrollTopComponent],
  templateUrl: './my-bookings.component.html',
  styleUrls: ['./my-bookings.component.scss']
})
export class MyBookingsComponent implements OnInit {
  loading = signal(true);
  bookings = signal<any[]>([]);

  ngOnInit(): void {
    setTimeout(() => {
      this.bookings.set([
        {
          id: 1,
          spaceName: 'Sala Ejecutiva A para reuniones de alta importancia',
          eventName: 'Reunión de Planificación Estratégica para el Cuarto Trimestre del Año Fiscal',
          imageUrl: 'https://placehold.co/150x90/00796B/FFFFFF.png?text=SpotNow',
          date: '26 Oct, 2023',
          time: '09:00 AM - 11:00 AM',
          status: 'CONFIRMADO',
          severity: 'CONFIRMED',
        },
        {
          id: 2,
          spaceName: 'Gran Auditorio Principal del Centro de Convenciones',
          eventName: 'Ensayo General para el Lanzamiento Global del Nuevo Producto de la Compañía',
          imageUrl: 'https://placehold.co/150x90/FF6F00/FFFFFF.png?text=SpotNow',
          date: '26 Oct, 2023',
          time: '02:00 PM - 05:00 PM',
          status: 'CONFIRMADO',
          severity: 'CONFIRMED',
        },
        {
          id: 3,
          spaceName: 'Sala de Juntas B (Capacidad para 20 personas)',
          eventName: 'Reunión de seguimiento del proyecto de desarrollo de software',
          imageUrl: 'https://placehold.co/150x90/212121/FFFFFF.png?text=SpotNow',
          date: '27 Oct, 2023',
          time: '10:00 AM - 12:00 PM',
          status: 'CONFIRMADO',
          severity: 'CONFIRMED',
        },
      ]);
      this.loading.set(false);
    }, 500);
  }
}
