import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { IBooking } from '../booking/booking.model';
import { IUser } from './user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  user: IUser[] = [];
  userUrL: string = '/api/user';
  userBookingUrl: string = '/api/bookings/user';
  response: any;

  constructor(private httpClient: HttpClient) {}
  // TODO User noch in Comp(profile) einbinden

  getUser(): Observable<IUser[]> {
    return (this.response = this.httpClient.get<IUser[]>(this.userUrL));
  }

  getUserById(id: number): Observable<IUser> {
    return (this.response = this.httpClient.get<IUser>(
      this.userUrL + '/' + id
    ));
  }

  getUserBooking(): Observable<IBooking[]> {
    return (this.response = this.httpClient.get<IBooking[]>(
      this.userBookingUrl
    ));
  }

  addUser(user: IUser): Observable<IUser> {
    return (this.response = this.httpClient.post<IUser>(this.userUrL, user));
  }

  deleteUser(user: IUser): Observable<IUser> {
    return (this.response = this.httpClient.delete<IUser>(
      this.userUrL + '/' + user.id
    ));
  }
}
