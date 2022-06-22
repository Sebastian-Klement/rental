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
  constructor(private httpClient: HttpClient) {}

  bookingUrl: string = '/api/bookings';
  placeUrl: string = '/api/places';
  roomUrl: string = '/api/rooms';
  response: any;

  getRooms(): Observable<Room[]> {
    return (this.response = this.httpClient.get<Room[]>(this.roomUrl));
  }

  getRoomById(id: number): Observable<Room> {
    return (this.response = this.httpClient.get<Room>(this.roomUrl + '/' + id));
  }

  addRoom(room: Room): Observable<Room> {
    return (this.response = this.httpClient.post<Room>(this.roomUrl, room));
  }

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
