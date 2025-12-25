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
      name: 'Executive Boardroom A',
      imageUrl: 'https://via.placeholder.com/300x180.png/00796B/FFFFFF?text=SpotNow',
      capacity: 12,
      type: 'Meeting Room',
      available: true,
      description: 'Premium room with VC equipment.',
    },
    {
      id: 2,
      name: 'Grand Auditorium',
      imageUrl: 'https://via.placeholder.com/300x180.png/FF6F00/FFFFFF?text=SpotNow',
      capacity: 150,
      type: 'Auditorium',
      available: true,
      description: 'Large auditorium for conferences.',
    },
    {
      id: 3,
      name: 'Space Boardroom B',
      imageUrl: 'https://via.placeholder.com/300x180.png/212121/FFFFFF?text=SpotNow',
      capacity: 12,
      type: 'Meeting Room',
      available: false,
      description: 'Premium room with VC equipment.',
    },
    {
      id: 4,
      name: 'Executive Boardroom C',
      imageUrl: 'https://via.placeholder.com/300x180.png/4DB6AC/FFFFFF?text=SpotNow',
      capacity: 12,
      type: 'Meeting Room',
      available: true,
      description: 'Premium room with VC equipment.',
    },
    {
      id: 5,
      name: 'Executive Boardroom D',
      imageUrl: 'https://via.placeholder.com/300x180.png/00796B/FFFFFF?text=SpotNow',
      capacity: 12,
      type: 'Meeting Room',
      available: true,
      description: 'Premium room with VC equipment.',
    },
    {
      id: 6,
      name: 'Grand Auditorium Other',
      imageUrl: 'https://via.placeholder.com/300x180.png/FF6F00/FFFFFF?text=SpotNow',
      capacity: 150,
      type: 'Auditorium',
      available: true,
      description: 'Large auditorium for conferences.',
    },
    {
      id: 7,
      name: 'Space Boardroom C',
      imageUrl: 'https://via.placeholder.com/300x180.png/212121/FFFFFF?text=SpotNow',
      capacity: 12,
      type: 'Meeting Room',
      available: false,
      description: 'Premium room with VC equipment.',
    },
    {
      id: 8,
      name: 'Executive Boardroom E',
      imageUrl: 'https://via.placeholder.com/300x180.png/4DB6AC/FFFFFF?text=SpotNow',
      capacity: 12,
      type: 'Meeting Room',
      available: true,
      description: 'Premium room with VC equipment.',
    },
  ];
}
