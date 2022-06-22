import { style } from '@angular/animations';
import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Booking } from './booking';
import { Place } from './place';
import { IUser } from './user';
import { Room } from './room';
import { IRental } from './rental/rental.model';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const rental: IRental[] = [
      {
        _id: '100',
        title: 'bungalow',
        city: 'nuernberg',
        street: 'Hauptstrasse',
        category: 'wasser',
        images: [
          './assets/images/bungalow.jpg',
          './assets/images/villa.jpg',
          './assets/images/house.jpg',
        ],
        bedrooms: 2,
        description: 'mega gemütlich',
        dailyRate: 4,
        createdAt: new Date(),
        shared: false,
        bookings: [],
      },
      {
        _id: '200',
        title: 'house',
        city: 'nuernberg',
        street: 'Hauptstrasse',
        category: 'berge',
        images: [
          './assets/images/house.jpg',
          './assets/images/bungalow.jpg',
          './assets/images/villa.jpg',
        ],
        bedrooms: 3,
        description: 'mega gemütlich',
        dailyRate: 4,
        createdAt: new Date(),
        shared: false,
        bookings: [],
      },
    ];
    const rooms: Room[] = [
      {
        id: 1,
        name: 'bungalow',
        rating: '4,6',
        location: 'Sea',
        images: [
          './assets/images/bungalow.jpg',
          './assets/images/villa.jpg',
          './assets/images/villa.jpg',
        ],
      },
      {
        id: 2,
        name: 'villa',
        rating: '4,6',
        location: 'City',
        images: [
          './assets/images/villa.jpg',
          './assets/images/bungalow.jpg',
          './assets/images/bungalow.jpg',
        ],
      },
      {
        id: 3,
        name: 'house',
        rating: '4,6',
        location: 'City',
        images: [
          './assets/images/house.jpg',
          './assets/images/villa.jpg',
          './assets/images/villa.jpg',
        ],
      },
      {
        id: 4,
        name: 'ruin',
        rating: '4,6',
        location: 'Sea',
        images: [
          './assets/images/ruin.jpg',
          './assets/images/bungalow.jpg',
          './assets/images/villa.jpg',
        ],
      },
      {
        id: 5,
        name: 'camping',
        rating: '4,6',
        location: 'Lake',
        images: [
          './assets/images/camping.jpg',
          './assets/images/villa.jpg',
          './assets/images/villa.jpg',
        ],
      },
    ];

    const places: Place[] = [
      {
        icon: './assets/icons/building.svg',
        name: 'City',
      },
      {
        icon: './assets/icons/emoji-heart-eyes.svg',
        name: 'Lake',
      },
      {
        icon: './assets/icons/emoji-smile-upside-down.svg',
        name: 'Island',
      },
      {
        icon: './assets/icons/emoji-smile.svg',
        name: 'Desert',
      },
      {
        icon: './assets/icons/emoji-sunglasses.svg',
        name: 'Sea',
      },
      {
        icon: './assets/icons/emoji-wink.svg',
        name: 'Jungle',
      },
      {
        icon: './assets/icons/heart.svg',
        name: 'Hills',
      },
      {
        icon: './assets/icons/house.svg',
        name: 'Mountain',
      },
      {
        icon: './assets/icons/tree.svg',
        name: 'Forest',
      },
      {
        icon: './assets/icons/compass.svg',
        name: 'Hikking',
      },
      {
        icon: './assets/icons/map.svg',
        name: 'Village',
      },
    ];

    const users: IUser[] = [
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
    return { bookings, users, places, rooms, rental };
  }

  genId(bookings: Booking[]): number {
    return bookings.length > 0
      ? Math.max(...bookings.map((b) => b.id)) + 1
      : 11111;
  }
}
