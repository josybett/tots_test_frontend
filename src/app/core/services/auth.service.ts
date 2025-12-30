import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _isAuthenticated = signal(true); // Mock: Default to authenticated
  public isAuthenticated = this._isAuthenticated.asReadonly();

  // Mock: Assume user is an admin for now
  public isAdmin = true;

  login() {
    this._isAuthenticated.set(true);
  }

  logout() {
    this._isAuthenticated.set(false);
  }
}
