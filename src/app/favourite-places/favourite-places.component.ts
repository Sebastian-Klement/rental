import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { BookingService } from '../booking/booking.service';
import { Place } from '../place';
import { Room } from '../room';

@Component({
  selector: 'app-favourite-places',
  templateUrl: './favourite-places.component.html',
  styleUrls: ['./favourite-places.component.css'],
})
export class FavouritePlacesComponent implements OnInit {
  @ViewChild('widgetsContent', { read: ElementRef })
  widgetsContent!: ElementRef<any>;

  places: Place[] = [];
  rooms: Room[] = [];

  constructor(private bookingService: BookingService) {}

  ngOnInit(): void {
    this.bookingService
      .getPlaces()
      .subscribe((result) => (this.places = result));
    this.bookingService
      .getPlaces()
      .subscribe((result) => (this.places = result));
  }

  public scrollRight(): void {
    this.widgetsContent.nativeElement.scrollTo({
      left: this.widgetsContent.nativeElement.scrollLeft - 250,
      behavior: 'smooth',
    });
  }

  public scrollLeft(): void {
    this.widgetsContent.nativeElement.scrollTo({
      left: this.widgetsContent.nativeElement.scrollLeft + 250,
      behavior: 'smooth',
    });
  }
}
