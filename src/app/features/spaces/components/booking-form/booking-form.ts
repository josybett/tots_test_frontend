import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { DatePickerModule } from 'primeng/datepicker';
import { SelectModule } from 'primeng/select';
import { ButtonModule } from 'primeng/button';
import { differenceInHours, format } from 'date-fns';

@Component({
  selector: 'app-booking-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CardModule,
    InputTextModule,
    DatePickerModule,
    SelectModule,
    ButtonModule,
  ],
  templateUrl: './booking-form.html',
  styleUrls: ['./booking-form.scss'],
})
export class BookingFormComponent implements OnInit {
  bookingForm: FormGroup;
  timeOptions: { label: string; value: string }[] = [];
  duration: string = '';

  constructor() {
    this.bookingForm = new FormGroup({
      eventName: new FormControl('', [Validators.required]),
      date: new FormControl(new Date(), [Validators.required]),
      startTime: new FormControl('09:00', [Validators.required]),
      endTime: new FormControl('11:00', [Validators.required]),
    });
  }

  ngOnInit(): void {
    this.timeOptions = this.generateTimeOptions();
    this.calculateDuration();

    this.bookingForm.get('startTime')?.valueChanges.subscribe(() => this.calculateDuration());
    this.bookingForm.get('endTime')?.valueChanges.subscribe(() => this.calculateDuration());
  }

  generateTimeOptions(): { label: string; value: string }[] {
    const options = [];
    for (let i = 8; i <= 18; i++) {
      const hour = i.toString().padStart(2, '0');
      options.push({ label: `${hour}:00`, value: `${hour}:00` });
    }
    return options;
  }

  calculateDuration(): void {
    const start = this.bookingForm.get('startTime')?.value;
    const end = this.bookingForm.get('endTime')?.value;
    const date = this.bookingForm.get('date')?.value as Date;

    if (start && end && date) {
      const startDate = new Date(`${format(date, 'yyyy-MM-dd')}T${start}`);
      const endDate = new Date(`${format(date, 'yyyy-MM-dd')}T${end}`);
      const hours = differenceInHours(endDate, startDate);
      this.duration = `${hours} Hour(s)`;
    }
  }

  confirmReservation(): void {
    if (this.bookingForm.valid) {
      console.log('Reservation confirmed:', this.bookingForm.value);
    }
  }
}
