import { Component, HostListener, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FiltersComponent } from '../../components/filters/filters.component';
import { SpaceCardComponent } from '../../components/space-card/space-card.component';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-space-list',
  standalone: true,
  imports: [CommonModule, RouterModule, FiltersComponent, SpaceCardComponent, ButtonModule],
  templateUrl: './space-list.component.html',
  styleUrls: ['./space-list.component.scss'],
})
export class SpaceListComponent {
  showScrollTopButton = signal(false);

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.showScrollTopButton.set(window.scrollY > 300);
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  spaces = [
    {
      id: 1,
      name: 'Sala de juntas ejecutiva A',
      imageUrl: 'https://placehold.co/300x180/00796B/FFFFFF.png?text=SpotNow',
      capacity: 12,
      type: 'Sala de reuniones',
      available: true,
      description: 'Habitación Premium con equipo VC.',
    },
    {
      id: 2,
      name: 'Gran Auditorio',
      imageUrl: 'https://placehold.co/300x180/FF6F00/FFFFFF.png?text=SpotNow',
      capacity: 150,
      type: 'Auditorio',
      available: true,
      description: 'Large Auditorio for conferences.',
    },
    {
      id: 3,
      name: 'Space Boardroom B',
      imageUrl: 'https://placehold.co/300x180/212121/FFFFFF.png?text=SpotNow',
      capacity: 12,
      type: 'Sala de reuniones',
      available: false,
      description: 'Habitación Premium con equipo VC.',
    },
    {
      id: 4,
      name: 'Sala de juntas ejecutiva C',
      imageUrl: 'https://placehold.co/300x180/4DB6AC/FFFFFF.png?text=SpotNow',
      capacity: 12,
      type: 'Sala de reuniones',
      available: true,
      description: 'Habitación Premium con equipo VC.',
    },
    {
      id: 5,
      name: 'Sala de juntas ejecutiva D',
      imageUrl: 'https://placehold.co/300x180/00796B/FFFFFF.png?text=SpotNow',
      capacity: 12,
      type: 'Sala de reuniones',
      available: true,
      description: 'Habitación Premium con equipo VC.',
    },
    {
      id: 6,
      name: 'Gran Auditorio Other',
      imageUrl: 'https://placehold.co/300x180/FF6F00/FFFFFF.png?text=SpotNow',
      capacity: 150,
      type: 'Auditorio',
      available: true,
      description: 'Large Auditorio for conferences.',
    },
    {
      id: 7,
      name: 'Space Boardroom C',
      imageUrl: 'https://placehold.co/300x180/212121/FFFFFF.png?text=SpotNow',
      capacity: 12,
      type: 'Sala de reuniones',
      available: false,
      description: 'Habitación Premium con equipo VC.',
    },
    {
      id: 8,
      name: 'Sala de juntas ejecutiva E',
      imageUrl: 'https://placehold.co/300x180/4DB6AC/FFFFFF.png?text=SpotNow',
      capacity: 12,
      type: 'Sala de reuniones',
      available: true,
      description: 'Habitación Premium con equipo VC.',
    },
  ];
}
