import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookingService } from '../booking.service';
import { Room } from '../room';

@Component({
  selector: 'app-create-room',
  templateUrl: './create-room.component.html',
  styleUrls: ['./create-room.component.css']
})
export class CreateRoomComponent implements OnInit {

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private bookingService: BookingService
  ) { }

  room:Room={
    id: 0,
    name: 'name',
    rating: 'rating',
    location: 'loc',
    images: ['./assets/images/villa.jpg']
  }

  ngOnInit(): void {
    if (this.router.url != '/createroom') {
      var id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
      this.bookingService.getRoomById(id).subscribe((result) => {
        this.room = result;
      });
    }
  }

  save(): void {
    this.bookingService.addRoom(this.room).subscribe();
    this.router.navigate(['home']);
  }

}
