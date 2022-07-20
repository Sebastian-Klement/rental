import { Injectable } from '@angular/core';
import { IBooking } from './booking.model';
import { Category } from '../place';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BookingService {
  bookingUrl: string = '/api/bookings';
  categoryUrl: string = '/api/categories';
  response: any;

  constructor(private httpClient: HttpClient) {}

  getPlaces(): Observable<Category[]> {
    return (this.response = this.httpClient.get<Category[]>(this.categoryUrl));
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
