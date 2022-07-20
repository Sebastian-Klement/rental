import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IRental } from 'src/app/rental/rental.model';
import { RentalService } from 'src/app/rental/rental.service';

@Component({
  selector: 'app-user-rental',
  templateUrl: './user-rental.component.html',
  styleUrls: ['./user-rental.component.css'],
})
export class UserRentalComponent implements OnInit {
  rentals: IRental[] = [
    {
      id: '1',
      title: 'SUP',
      city: 'nuernberg',
      street: 'southside',
      category: 'water',
      images: [],
      bedrooms: 2,
      description: 'just 4 u',
      dailyRate: 1,
      createdAt: new Date(),
      shared: true,
    },
  ];
  constructor(private router: Router, private rentalService: RentalService) {}

  ngOnInit(): void {}

  goToUpdate(rentalId: any): any {
    this.router.navigate([`/rentals/${rentalId}/edit`]);
  }

  deleteRental(rental: any): any {}
}
