import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
    id: '',
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
    //bookings: [],
  };

  selectedCategory = 0;
  categories = [
    { id: 0, name: 'Wähle eine Kategorie' },
    { id: 1, name: 'SUP' },
    { id: 2, name: 'Wandern' },
    { id: 3, name: 'Kiten' },
  ];

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
    //TODO Für Rental noch ein rentaledit Comp. implementieren
    // if (this.router.url != '/rentalcreate') {
    //   var id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    //   this.rentalService.getRentalById(id).subscribe((result) => {
    //     this.rental = result;
    //   });
    // }
  }

  save(): void {
    this.rentalService.addRental(this.rental).subscribe();
    this.router.navigate(['home']);
  }
}
