import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { CheckboxModule } from 'primeng/checkbox';
import { SelectModule } from 'primeng/select';
import { InputNumberModule } from 'primeng/inputnumber';
import { TextareaModule } from 'primeng/textarea'; 
import { InputTextModule } from 'primeng/inputtext';
import { FloatLabelModule } from 'primeng/floatlabel';

@Component({
  selector: 'app-space-form',
  standalone: true,
  imports: [
    ButtonModule,
    CardModule,
    CheckboxModule,
    CommonModule,
    SelectModule,
    InputNumberModule,
    TextareaModule,
    InputTextModule,
    ReactiveFormsModule,
    FloatLabelModule,
    RouterModule,
  ],
  templateUrl: './space-form.component.html',
  styleUrls: ['./space-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
}) 
export class SpaceFormComponent {
  private fb = inject(FormBuilder);

  form = this.fb.group({
    name: ['', Validators.required],
    type: ['', Validators.required],
    capacity: [1, [Validators.required, Validators.min(1)]],
    description: [''],
    photos: [[]],
    amenities: this.fb.group({
      wifi: [false],
      projector: [false],
      videoConferencing: [false],
      whiteboard: [false],
      airConditioning: [false],
    }),
  });

  spaceTypes = [
    { label: 'Sala de Reuniones', value: 'meeting-room' },
    { label: 'Auditorio', value: 'auditorium' },
    { label: 'Oficina Privada', value: 'private-office' },
  ];

  onSubmit() {
    if (this.form.valid) {
      console.log(this.form.value);
      // Here you would typically call a service to save the data
    }
  }
}
