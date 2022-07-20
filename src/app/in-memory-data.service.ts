import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { IBooking } from './booking/booking.model';
import { Category } from './place';
import { IUser } from './user/user.model';
import { Room } from './room';
import { IRental } from './rental/rental.model';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const rental: IRental[] = [
      {
        id: '100',
        title: 'Schnorcheln',
        city: 'nuernberg',
        street: 'Hauptstrasse',
        category: 'Wasser',
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
        //bookings: [],
      },
      {
        id: '200',
        title: 'Klettern',
        city: 'nuernberg',
        street: 'Hauptstrasse',
        category: 'Berge',
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
        //bookings: [],
      },
      {
        id: '300',
        title: 'Dünensurfen',
        city: 'nuernberg',
        street: 'Hauptstrasse',
        category: 'Wüste',
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
        //bookings: [],
      },
      {
        id: '400',
        title: 'Wandern',
        city: 'nuernberg',
        street: 'Hauptstrasse',
        category: 'Outdoor',
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
        //bookings: [],
      },
      {
        id: '500',
        title: 'Stand Up Padel',
        city: 'nuernberg',
        street: 'Hauptstrasse',
        category: 'Wasser',
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
        //bookings: [],
      },
      {
        id: '600',
        title: 'Kitesurfing',
        city: 'nuernberg',
        street: 'Hauptstrasse',
        category: 'Wasser',
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
        //bookings: [],
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

    const categories: Category[] = [
      {
        id: 1,
        icon: './assets/icons/building.svg',
        name: 'Kiten',
      },
      {
        id: 2,
        icon: './assets/icons/emoji-heart-eyes.svg',
        name: 'Wasser',
      },
      {
        id: 3,
        icon: './assets/icons/emoji-smile-upside-down.svg',
        name: 'SUP',
      },
      {
        id: 4,
        icon: './assets/icons/emoji-smile.svg',
        name: 'Wüste',
      },
      {
        id: 5,
        icon: './assets/icons/emoji-sunglasses.svg',
        name: 'Meer',
      },
      {
        id: 6,
        icon: './assets/icons/emoji-wink.svg',
        name: 'Berge',
      },
      {
        id: 7,
        icon: './assets/icons/heart.svg',
        name: 'Hills',
      },
      {
        id: 8,
        icon: './assets/icons/house.svg',
        name: 'Mountain',
      },
      {
        id: 9,
        icon: './assets/icons/tree.svg',
        name: 'Forest',
      },
      {
        id: 10,
        icon: './assets/icons/compass.svg',
        name: 'Hikking',
      },
      {
        id: 11,
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

    const bookings: IBooking[] = [
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
    return { bookings, users, categories, rooms, rental };
  }

  genId(bookings: IBooking[]): number {
    return bookings.length > 0
      ? Math.max(...bookings.map((b) => b.id)) + 1
      : 11111;
  }
}
