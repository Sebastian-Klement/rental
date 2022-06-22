import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IRental } from '../rental/rental.model';
import { RentalService } from '../rental/rental.service';

@Component({
  selector: 'app-room-view',
  templateUrl: './room-view.component.html',
  styleUrls: ['./room-view.component.css'],
})
export class RoomViewComponent implements OnInit {
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private rentalService: RentalService
  ) {}

  rental: IRental = {
    _id: '',
    title: '',
    city: '',
    street: '',
    category: '',
    images: [],
    bedrooms: 0,
    description: '',
    dailyRate: 0,
    createdAt: new Date(),
    shared: false,
    bookings: [],
    //user: undefined
  };

  ngOnInit(): void {
    var id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    this.rentalService.getRoomById(id).subscribe((result) => {
      this.rental = result;
    });
  }
}
