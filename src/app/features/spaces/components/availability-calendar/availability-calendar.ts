import { Component, OnInit } from '@angular/core';
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
  days: Date[] = [];
  timeSlots: string[] = [];
  availability: { [key: string]: TimeSlot[] } = {};

  ngOnInit(): void {
    this.generateDays();
    this.generateTimeSlots();
    this.generateAvailability();
  }

  generateDays(): void {
    const today = new Date();
    for (let i = 0; i < 7; i++) {
      this.days.push(addDays(today, i));
    }
  }

  generateTimeSlots(): void {
    for (let i = 8; i <= 18; i++) {
      this.timeSlots.push(`${i}:00`);
    }
  }

  generateAvailability(): void {
    this.days.forEach(day => {
      const dayKey = format(day, 'yyyy-MM-dd');
      this.availability[dayKey] = this.timeSlots.map(time => ({
        time,
        status: Math.random() > 0.5 ? 'Free' : 'Booked',
      }));
    });
  }

  getSlotStatus(day: Date, time: string): 'Free' | 'Booked' {
    const dayKey = format(day, 'yyyy-MM-dd');
    const daySlots = this.availability[dayKey];
    if (!daySlots) return 'Booked';

    const slot = daySlots.find(s => s.time === time);
    return slot ? slot.status : 'Booked';
  }
}
