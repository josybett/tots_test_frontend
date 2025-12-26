import { Component, OnInit, WritableSignal, inject, signal } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ImageGalleryComponent } from '../../components/image-gallery/image-gallery';
import { BookingFormComponent } from '../../components/booking-form/booking-form';
import { AvailabilityCalendarComponent } from '../../components/availability-calendar/availability-calendar';
import { AccordionModule } from 'primeng/accordion';

@Component({
  selector: 'app-space-detail',
  standalone: true,
  imports: [CommonModule, ImageGalleryComponent, BookingFormComponent, AvailabilityCalendarComponent, AccordionModule],
  templateUrl: './space-detail.component.html',
  styleUrls: ['./space-detail.component.scss'],
})
export class SpaceDetailComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private location = inject(Location);
  space: WritableSignal<any | undefined> = signal(undefined);

  amenities = [
    { icon: 'pi pi-wifi', name: 'WiFi' },
    { icon: 'pi pi-desktop', name: '4K Projector' },
    { icon: 'pi pi-video', name: 'Video Conferencing' },
    { icon: 'pi pi-tablet', name: 'Whiteboard' },
    { icon: 'pi pi-snowflake', name: 'Air Conditioning' },
    { icon: 'pi pi-coffee', name: 'Coffee Machine' },
  ];

  images = [
    'https://placehold.co/900x600/00796B/FFFFFF.png?text=SpotNow+1',
    'https://placehold.co/900x600/FF6F00/FFFFFF.png?text=SpotNow+2',
    'https://placehold.co/900x600/212121/FFFFFF.png?text=SpotNow+3',
    'https://placehold.co/900x600/4DB6AC/FFFFFF.png?text=SpotNow+4',
    'https://placehold.co/900x600/FBC02D/FFFFFF.png?text=SpotNow+5',
  ];

  // Dummy data representing all spaces
  private allSpaces = [
    { id: 1, name: 'Sala de Conferencias A', type: 'Sala de Reuniones', capacity: 50, description: 'Equipada con proyector y pizarra.' },
    { id: 2, name: 'Auditorio Principal', type: 'Auditorio', capacity: 200, description: 'Ideal para grandes eventos y conferencias.' },
    { id: 3, name: 'Sala de Juntas B', type: 'Sala de Reuniones', capacity: 20, description: 'Perfecta para reuniones de equipo.' },
    { id: 4, name: 'Espacio Creativo C', type: 'Coworking', capacity: 30, description: 'Un espacio flexible para la colaboración.' },
  ];

  goBack(): void {
    this.location.back();
  }

  ngOnInit(): void {
    const spaceId = this.route.snapshot.paramMap.get('id');
    if (spaceId) {
      this.space.set(this.allSpaces.find(s => s.id === +spaceId));
    }
  }
}
