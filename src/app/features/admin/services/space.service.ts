import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

export interface Space {
  id: number;
  imageUrl: string;
  name: string;
  type: string;
  capacity: number;
  status: 'Active' | 'Inactive';
}

@Injectable({
  providedIn: 'root'
})
export class SpaceService {
  private apiUrl = 'http://localhost:8000/api/spaces'; // As per project memory

  // Mock data until backend is ready
  private mockSpaces: Space[] = [
    { id: 1, imageUrl: 'assets/images/salon-1.jpg', name: 'Executive Boardroom A', type: 'Meeting Room', capacity: 12, status: 'Active' },
    { id: 2, imageUrl: 'assets/images/salon-2.png', name: 'Executive Boardroom B', type: 'Meeting Room', capacity: 10, status: 'Active' },
    { id: 3, imageUrl: '', name: 'Executive Boardroom C', type: 'Meeting Room', capacity: 12, status: 'Active' },
    { id: 4, imageUrl: 'assets/images/salon-1.jpg', name: 'Executive Boardroom D', type: 'Meeting Room', capacity: 10, status: 'Active' },
    { id: 5, imageUrl: '', name: 'Executive Boardroom E', type: 'Meeting Room', capacity: 12, status: 'Active' },
  ];

  constructor(private http: HttpClient) { }

  getSpaces(): Observable<Space[]> {
    // return this.http.get<Space[]>(this.apiUrl);
    return of(this.mockSpaces); // Returning mock data for now
  }
}
