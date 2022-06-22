import { Component, OnInit } from '@angular/core';
import { BookingService } from '../booking.service';
import { Room } from '../room';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css'],
})
export class RoomsComponent implements OnInit {
  rooms: Room[] = [];

  constructor(private bookingService: BookingService) {}

  ngOnInit(): void {
    this.bookingService.getRooms().subscribe((result) => (this.rooms = result));
  }
}
