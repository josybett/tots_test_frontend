import { Component, OnInit, signal, WritableSignal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { getDay, format, addDays } from 'date-fns';

interface TimeSlot {
  time: string;
  status: 'Free' | 'Booked';
}

@Component({
  selector: 'app-availability-calendar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './availability-calendar.html',
  styleUrls: ['./availability-calendar.scss'],
})
export class AvailabilityCalendarComponent implements OnInit {
  days: WritableSignal<Date[]> = signal([]);
  timeSlots: WritableSignal<string[]> = signal([]);
  availability: WritableSignal<{ [key: string]: TimeSlot[] }> = signal({});

  ngOnInit(): void {
    this.generateDays();
    this.generateTimeSlots();
    this.generateAvailability();
  }

  generateDays(): void {
    const today = new Date();
    const newDays: Date[] = [];
    for (let i = 0; i < 7; i++) {
      newDays.push(addDays(today, i));
    }
    this.days.set(newDays);
  }

  generateTimeSlots(): void {
    const newTimeSlots: string[] = [];
    for (let i = 8; i <= 18; i++) {
      newTimeSlots.push(`${i}:00`);
    }
    this.timeSlots.set(newTimeSlots);
  }

  generateAvailability(): void {
    const newAvailability: { [key: string]: TimeSlot[] } = {};
    this.days().forEach(day => {
      const dayKey = format(day, 'yyyy-MM-dd');
      newAvailability[dayKey] = this.timeSlots().map(time => ({
        time,
        status: Math.random() > 0.5 ? 'Free' : 'Booked',
      }));
    });
    this.availability.set(newAvailability);
  }

  getSlotStatus(day: Date, time: string): 'Free' | 'Booked' {
    const dayKey = format(day, 'yyyy-MM-dd');
    const daySlots = this.availability()[dayKey];
    if (!daySlots) return 'Booked';

    const slot = daySlots.find(s => s.time === time);
    return slot ? slot.status : 'Booked';
  }
}
