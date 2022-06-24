import { Component, OnInit } from '@angular/core';
import { RentalService } from '../rental.service';
import { IRental } from '../rental.model';

@Component({
  selector: 'app-rental-list',
  templateUrl: './rental-list.component.html',
  styleUrls: ['./rental-list.component.css'],
})
export class RentalListComponent implements OnInit {
  rentals: IRental[] = [];

  constructor(private rentalService: RentalService) {}

  ngOnInit(): void {
    this.rentalService
      .getRentals()
      .subscribe((result) => (this.rentals = result));
  }
}
