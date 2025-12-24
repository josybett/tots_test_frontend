import { Component, Input } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';

@Component({
  selector: 'app-space-card',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage, RouterModule, CardModule, ButtonModule, TagModule],
  templateUrl: './space-card.component.html',
  styleUrls: ['./space-card.component.scss'],
})
export class SpaceCardComponent {
  @Input() space: any; // TODO: Create a strong type for the space
}
