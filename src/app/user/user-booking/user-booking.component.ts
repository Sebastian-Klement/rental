import { Component, OnInit } from '@angular/core';
import { IBooking } from 'src/app/booking/booking.model';
import { BookingService } from 'src/app/booking/booking.service';
import { UserService } from '../../user/user.service';

@Component({
  selector: 'app-user-booking',
  templateUrl: './user-booking.component.html',
  styleUrls: ['./user-booking.component.css'],
})
export class UserBookingComponent implements OnInit {
  bookings: IBooking[] = [];

  constructor(private userService: UserService, private bookingService:BookingService) {}

  ngOnInit(): void {
    this.userService.getUserBooking().subscribe((bookings: IBooking[]) => {
      this.bookings = bookings;
    });
  }
  deleteBooking(booking: IBooking): void {
    this.bookingService.deleteBooking(booking).subscribe();
    this.bookings = this.bookings.filter((b) => b != booking);
  }
}
