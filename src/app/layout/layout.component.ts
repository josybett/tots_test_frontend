import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ToastModule } from 'primeng/toast';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterModule, TopBarComponent, ToastModule],
  template: `
    <p-toast></p-toast>
    <app-top-bar></app-top-bar>
    <main class="main-content">
      <router-outlet></router-outlet>
    </main>
  `,
  styles: [
    `
      .main-content {
        padding: 1.5rem;
        padding-top: 6rem; /* Adjust based on top-bar height */
      }

      @media (max-width: 768px) {
        .main-content {
          padding: 1rem;
          padding-top: 5rem;
        }
      }
    `,
  ],
})
export class LayoutComponent {}
