import { Component, Input, OnInit } from '@angular/core';
import { RentalService } from '../rental.service';
import { IRental } from '../rental.model';

@Component({
  selector: 'app-rental-list',
  templateUrl: './rental-list.component.html',
  styleUrls: ['./rental-list.component.css'],
})
export class RentalListComponent implements OnInit {
  @Input()
  set event(event: Event) {
    if (event) {
      this.filterCategory();
    }
  }

  rentals: IRental[] = [];

  constructor(private rentalService: RentalService) {}

  ngOnInit(): void {
    this.rentalService.getRentals().subscribe((results) => {
      this.rentals = results;
    });
  }

  filterCategory(): void {
    this.rentalService.getRentalByCategory().subscribe((results) => {
      this.rentals.length = 0;
      this.rentals = results;
      console.log('results: ' + results.length);
    });
  }
}
