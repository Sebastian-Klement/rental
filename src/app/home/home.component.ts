import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BookingService } from '../booking.service';
import { Room } from '../room';
import { IRental } from '../rental/rental.model';
import { RentalService } from '../rental/rental.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  notify: string = '';
  rental: IRental[] = [];

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private bookingService: BookingService,
    private rentalService: RentalService
  ) {}

  ngOnInit(): void {
    this.rentalService
      .getRentals()
      .subscribe((result) => (this.rental = result));

    this.activatedRoute.queryParams.subscribe((params) => {
      const key1 = 'loggedin';
      if (params[key1] === 'success') {
        this.notify = 'You have been successfully loggedin. Welcome home';
      }
    });
  }
}
