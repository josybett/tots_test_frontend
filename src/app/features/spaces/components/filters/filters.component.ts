import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';
import { CardModule } from 'primeng/card';
import { DatePickerModule } from 'primeng/datepicker';
import { MultiSelectModule } from 'primeng/multiselect';
import { SliderModule } from 'primeng/slider';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-filters',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CardModule,
    DatePickerModule,
    MultiSelectModule,
    SliderModule,
    ButtonModule,
  ],
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss'],
})
export class FiltersComponent {
  filterForm = new FormGroup({
    dates: new FormControl<Date[] | null>(null),
    spaceTypes: new FormControl<string[] | null>(null),
    capacity: new FormControl<number>(50),
  });

  spaceTypes = [
    { label: 'Meeting Room', value: 'meeting-room' },
    { label: 'Auditorium', value: 'auditorium' },
  ];

  applyFilters() {
    console.log(this.filterForm.value);
  }
}
