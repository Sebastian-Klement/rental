import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookingService } from '../booking.service';
import { Room } from '../room';

@Component({
  selector: 'app-room-view',
  templateUrl: './room-view.component.html',
  styleUrls: ['./room-view.component.css'],
})
export class RoomViewComponent implements OnInit {
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private bookingService: BookingService
  ) {}

  room: Room = {
    id: 0,
    name: '',
    rating: '',
    location: '',
    images: [],
  };

  ngOnInit(): void {
    var id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    this.bookingService.getRoomById(id).subscribe((result) => {
      this.room = result;
    });
  }
}
