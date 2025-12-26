import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { GalleriaModule } from 'primeng/galleria';

@Component({
  selector: 'app-image-gallery',
  standalone: true,
  imports: [GalleriaModule],
  templateUrl: './image-gallery.html',
  styleUrls: ['./image-gallery.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ImageGalleryComponent {
  @Input({ required: true }) images: string[] = [];

  responsiveOptions: any[] = [
    {
      breakpoint: '1024px',
      numVisible: 5,
    },
    {
      breakpoint: '768px',
      numVisible: 3,
    },
    {
      breakpoint: '560px',
      numVisible: 1,
    },
  ];
}
