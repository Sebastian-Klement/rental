import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { IRental } from '../rental.model';
import { RentalService } from '../rental.service';

@Component({
  selector: 'app-rental-detail',
  templateUrl: './rental-detail.component.html',
  styleUrls: ['./rental-detail.component.css'],
})
export class RentalDetailComponent implements OnInit {
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private rentalService: RentalService
  ) {}

  rental: IRental = {
    id: '',
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
    //bookings: [],
    //user: undefined
  };

  ngOnInit(): void {
    var id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    this.rentalService.getRentalById(id).subscribe((result) => {
      this.rental = result;
    });
  }
}
