import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-space-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './space-detail.component.html',
  styleUrls: ['./space-detail.component.scss'],
})
export class SpaceDetailComponent implements OnInit {
  space: { id: number; name: string; type: string; capacity: number; description: string; } | undefined;

  // Dummy data representing all spaces
  private allSpaces = [
    { id: 1, name: 'Sala de Conferencias A', type: 'Sala de Reuniones', capacity: 50, description: 'Equipada con proyector y pizarra.' },
    { id: 2, name: 'Auditorio Principal', type: 'Auditorio', capacity: 200, description: 'Ideal para grandes eventos y conferencias.' },
    { id: 3, name: 'Sala de Juntas B', type: 'Sala de Reuniones', capacity: 20, description: 'Perfecta para reuniones de equipo.' },
    { id: 4, name: 'Espacio Creativo C', type: 'Coworking', capacity: 30, description: 'Un espacio flexible para la colaboración.' },
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.space = this.allSpaces.find(s => s.id === +id);
    }
  }
}
