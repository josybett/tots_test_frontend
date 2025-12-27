import { Component, HostListener, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-scroll-top',
  standalone: true,
  imports: [CommonModule, ButtonModule],
  template: `
    @if (showScrollTopButton()) {
      <p-button
        icon="pi pi-arrow-up"
        styleClass="p-button-rounded scroll-top-button"
        (onClick)="scrollToTop()"
        data-cy="scroll-top-button"
      ></p-button>
    }
  `,
  styles: [`
    .scroll-top-button {
      position: fixed;
      bottom: 2rem;
      right: 2rem;
      z-index: 1000;
    }
  `]
})
export class ScrollTopComponent {
  showScrollTopButton = signal(false);

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.showScrollTopButton.set(window.scrollY > 300);
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
