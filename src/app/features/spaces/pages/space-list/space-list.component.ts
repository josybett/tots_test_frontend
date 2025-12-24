import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FiltersComponent } from '../../components/filters/filters.component';
import { SpaceCardComponent } from '../../components/space-card/space-card.component';

@Component({
  selector: 'app-space-list',
  standalone: true,
  imports: [CommonModule, FiltersComponent, SpaceCardComponent],
  templateUrl: './space-list.component.html',
  styleUrls: ['./space-list.component.scss'],
})
export class SpaceListComponent {
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
  ];
}
