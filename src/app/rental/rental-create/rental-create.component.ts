import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Room } from '../../room';
import { IRental } from '../rental.model';
import { RentalService } from '../rental.service';

@Component({
  selector: 'app-rental-create',
  templateUrl: './rental-create.component.html',
  styleUrls: ['./rental-create.component.css'],
})
export class RentalCreateComponent implements OnInit {
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
    images: ['./assets/images/villa.jpg'],
    bedrooms: 0,
    description: '',
    dailyRate: 0,
    createdAt: new Date(),
    shared: false,
    bookings: [],
  };

  // room: any = {
  //   id: '100',
  //   name: 'Bastis Haus',
  //   location: 'Nürnberg',
  //   description:
  //     'Lorem ipsum dolor sit amet, consetetur\
  //     sadipscing elitr, sed diam nonumy eirmod\
  //     tempor invidunt ut labore et dolore magna\
  //     aliquyam erat, sed diam voluptua. At vero\
  //     eos et accusam et justo duo dolores et\
  //     ea rebum. Stet lita kasd gubergren, no\
  //     sea takimata sanctus est Lorem ipsum\
  //     dolor sit amet. Lorem ipsum dolor sit amet,\
  //     consetetur sadipscing elitr, sed diam nonumy\
  //      eirmod tempor invidunt ut labore et dolore\
  //       magna aliquyam erat, sed diam voluptua.',
  //   benefits: 'keine',
  //   bewertung: 'noch keine',
  //   gastgeber: 'keine',
  //   file: 'nix',
  //   dinge: 'noch keine',
  // };

  ngOnInit(): void {
    if (this.router.url != '/createroom') {
      var id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
      this.rentalService.getRoomById(id).subscribe((result) => {
        this.rental = result;
      });
    }
  }

  save(): void {
    this.rentalService.addRoom(this.rental).subscribe();
    this.router.navigate(['home']);
  }
}
