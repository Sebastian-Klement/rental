import { Injectable } from '@angular/core';
import { IBooking } from './booking.model';
import { Place } from '../place';
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

  getBookings(): Observable<IBooking[]> {
    return (this.response = this.httpClient.get<IBooking[]>(this.bookingUrl));
  }

  getBookingById(id: number): Observable<IBooking> {
    return (this.response = this.httpClient.get<IBooking>(
      this.bookingUrl + '/' + id
    ));
  }

  addBooking(booking: IBooking): Observable<IBooking> {
    return (this.response = this.httpClient.post<IBooking>(
      this.bookingUrl,
      booking
    ));
  }

  deleteBooking(booking: IBooking): Observable<IBooking> {
    return (this.response = this.httpClient.delete<IBooking>(
      this.bookingUrl + '/' + booking.id
    ));
  }
}
