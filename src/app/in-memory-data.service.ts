import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Booking } from './booking';
import { BookingsComponent } from './bookings/bookings.component';
import { User } from './user';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const users: User[] = [
      {
        id: 2001,
        username: 'frodo',
        email: 'frodo@mail.de',
        password: '123',
      },
      {
        id: 2002,
        username: 'bilbo',
        email: 'bilbo@mail.de',
        password: '123',
      },
    ];

    const bookings: Booking[] = [
      {
        id: 1001,
        name: 'Frodo Beutlin',
        roomNumber: 1001,
        startDate: new Date(),
        endDate: new Date(),
      },
      {
        id: 1002,
        name: 'Bilbo Beutlin',
        roomNumber: 1002,
        startDate: new Date(),
        endDate: new Date(),
      },
      {
        id: 1003,
        name: 'Samwise Gamdschi',
        roomNumber: 1003,
        startDate: new Date(),
        endDate: new Date(),
      },
      {
        id: 1004,
        name: 'Gandalf der Weise',
        roomNumber: 1004,
        startDate: new Date(),
        endDate: new Date(),
      },
    ];
    return { bookings, users };
  }

  genId(bookings: Booking[]): number {
    return bookings.length > 0
      ? Math.max(...bookings.map((b) => b.id)) + 1
      : 11111;
  }
}
