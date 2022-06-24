import { Component, OnInit } from '@angular/core';
import { IBooking } from '../booking.model';
import { BookingService } from '../booking.service';

@Component({
  selector: 'app-bookings',
  templateUrl: './booking-list.component.html',
  styleUrls: ['./booking-list.component.css'],
})
export class BookingsComponent implements OnInit {
  constructor(private bookingService: BookingService) {}

  bookings: IBooking[] = [];

  ngOnInit(): void {
    this.bookingService.getBookings().subscribe((result) => {
      this.bookings = result;
    });
  }

  deleteBooking(booking: IBooking): void {
    this.bookingService.deleteBooking(booking).subscribe();
    this.bookings = this.bookings.filter((b) => b != booking);
  }
}
