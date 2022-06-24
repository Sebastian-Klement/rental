import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IRental } from './rental.model';

@Injectable({
  providedIn: 'root',
})
export class RentalService {
  rentalUrl: string = '/api/rental';
  response: any;

  constructor(private httpClient: HttpClient) {}

  getRentals(): Observable<IRental[]> {
    return (this.response = this.httpClient.get<IRental[]>(this.rentalUrl));
  }

  getRentalById(id: number): Observable<IRental> {
    return (this.response = this.httpClient.get<IRental>(
      this.rentalUrl + '/' + id
    ));
  }

  addRental(rental: IRental): Observable<IRental> {
    return (this.response = this.httpClient.post<IRental>(
      this.rentalUrl,
      rental
    ));
  }
}
