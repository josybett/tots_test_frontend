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
          spaceName: 'Sala Ejecutiva A',
          eventName: 'Reunión Estrategias del Q4',
          imageUrl: 'https://placehold.co/150x90/00796B/FFFFFF.png?text=SpotNow',
          date: '26 Oct, 2023',
          time: '09:00 AM - 11:00 AM',
          status: 'CONFIRMADO',
          severity: 'CONFIRMED',
        },
        {
          id: 2,
          spaceName: 'Gran Auditorio',
          eventName: 'Rehearsal Lanzamiento del Producto',
          imageUrl: 'https://placehold.co/150x90/FF6F00/FFFFFF.png?text=SpotNow',
          date: '26 Oct, 2023',
          time: '02:00 PM - 05:00 PM',
          status: 'CONFIRMADO',
          severity: 'CONFIRMED',
        },
        {
          id: 3,
          spaceName: 'Gran Auditorio',
          eventName: 'Rehearsal Lanzamiento del Producto',
          imageUrl: 'https://placehold.co/150x90/FF6F00/FFFFFF.png?text=SpotNow',
          date: '26 Oct, 2023',
          time: '02:00 PM - 05:00 PM',
          status: 'CONFIRMADO',
          severity: 'CONFIRMED',
        },
        {
          id: 4,
          spaceName: 'Sala Ejecutiva A',
          eventName: 'Reunión Estrategias del Q4',
          imageUrl: 'https://placehold.co/150x90/00796B/FFFFFF.png?text=SpotNow',
          date: '26 Oct, 2023',
          time: '09:00 AM - 11:00 AM',
          status: 'CONFIRMADO',
          severity: 'CONFIRMED',
        },
        {
          id: 5,
          spaceName: 'Gran Auditorio',
          eventName: 'Rehearsal Lanzamiento del Producto',
          imageUrl: 'https://placehold.co/150x90/FF6F00/FFFFFF.png?text=SpotNow',
          date: '26 Oct, 2023',
          time: '02:00 PM - 05:00 PM',
          status: 'CONFIRMADO',
          severity: 'CONFIRMED',
        }
      ]);
      this.loading.set(false);
    }, 500);
  }
}
