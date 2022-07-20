import {
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { BookingService } from '../booking/booking.service';
import { Category } from '../place';
import { RentalListComponent } from '../rental/rental-list/rental-list.component';
import { RentalService } from '../rental/rental.service';
import { Room } from '../room';

@Component({
  selector: 'app-favourite-places',
  templateUrl: './favourite-places.component.html',
  styleUrls: ['./favourite-places.component.css'],
})
export class FavouritePlacesComponent implements OnInit {
  @ViewChild('widgetsContent', { read: ElementRef })
  widgetsContent!: ElementRef<any>;

  categories: Category[] = [];
  rooms: Room[] = [];

  @Output() eventChange = new EventEmitter<Event>();

  constructor(
    private bookingService: BookingService,
    private rentalService: RentalService
  ) {}

  ngOnInit(): void {
    this.bookingService
      .getPlaces()
      .subscribe((result) => (this.categories = result));
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

  public setCategory(event: Event, name: string) {
    this.rentalService.categoryName = name;
    this.eventChange.emit(event);
  }
}
