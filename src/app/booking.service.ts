import { Injectable } from '@angular/core';
import { Booking } from './booking';
import { Bookings } from './mock-booking';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class BookingService {
  constructor(private httpClient: HttpClient) {}

  bookingUrl: string = '/api/bookings';
  response: any;

  getBookings(): Observable<Booking[]> {
    return (this.response = this.httpClient.get<Booking[]>(this.bookingUrl));
  }

  getBookingById(id: number): Observable<Booking> {
    return (this.response = this.httpClient.get<Booking>(
      this.bookingUrl + '/' + id
    ));
  }

  addBooking(booking: Booking): Observable<Booking> {
    return (this.response = this.httpClient.post<Booking>(
      this.bookingUrl,
      booking
    ));
  }

  deleteBooking(booking: Booking): Observable<Booking> {
    return (this.response = this.httpClient.delete<Booking>(
      this.bookingUrl + '/' + booking.id
    ));
  }
}
