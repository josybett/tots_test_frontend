import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { MenuModule } from 'primeng/menu';

@Component({
  selector: 'app-top-bar',
  standalone: true,
  imports: [CommonModule, RouterModule, ToolbarModule, ButtonModule, MenuModule],
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss'],
})
export class TopBarComponent {
  userMenuItems: MenuItem[] = [
    { label: 'Profile', icon: 'pi pi-fw pi-user', data: { cy: 'profile-link' } },
    { label: 'Settings', icon: 'pi pi-fw pi-cog', data: { cy: 'settings-link' } },
    { separator: true },
    { label: 'Sign Out', icon: 'pi pi-fw pi-sign-out', data: { cy: 'sign-out-link' } },
  ];

  mobileMenuItems: MenuItem[] = [
    { label: 'Espacios', routerLink: '/spaces', data: { cy: 'mobile-spaces-link' } },
    { label: 'Mis reservas', routerLink: '/my-bookings', data: { cy: 'mobile-bookings-link' } },
  ];
}
