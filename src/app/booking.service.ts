import { Injectable } from '@angular/core';
import { Booking } from './booking';
import { Place } from './place';
import { Room } from './room';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BookingService {
  bookingUrl: string = '/api/bookings';
  placeUrl: string = '/api/places';
  response: any;

  constructor(private httpClient: HttpClient) {}

  getPlaces(): Observable<Place[]> {
    return (this.response = this.httpClient.get<Place[]>(this.placeUrl));
  }

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
