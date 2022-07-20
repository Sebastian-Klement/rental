import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
    private activatedRoute: ActivatedRoute,
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

  event: any;

  onChange(event: Event) {
    this.event = event;
  }
}
