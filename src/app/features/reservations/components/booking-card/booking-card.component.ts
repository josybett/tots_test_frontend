import { Component, input } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';

@Component({
  selector: 'app-booking-card',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage, CardModule, ButtonModule, TagModule],
  templateUrl: './booking-card.component.html',
  styleUrls: ['./booking-card.component.scss']
})
export class BookingCardComponent {
  booking = input.required<any>();

  getSeverity(status: string) {
    return status === 'CONFIRMED' ? 'success' : 'warn';
  }
}
