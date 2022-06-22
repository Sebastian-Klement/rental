import { Component, OnInit } from '@angular/core';
import { RentalService } from '../rental/rental.service';
import { IRental } from '../rental/rental.model';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css'],
})
export class RoomsComponent implements OnInit {
  rentals: IRental[] = [];

  constructor(private rentalService: RentalService) {}

  ngOnInit(): void {
    this.rentalService
      .getRentals()
      .subscribe((result) => (this.rentals = result));
    console.log(this.rentals);
  }
}
