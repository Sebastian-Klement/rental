import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../auth/auth.guard';
import { UserComponent } from './user.component';
import { UserBookingComponent } from './user-booking/user-booking.component';
import { UserRentalComponent } from './user-rental/user-rental.component';
import { RentalService } from '../rental/rental.service';
import { BookingService } from '../booking/booking.service';
import { HttpClientModule } from '@angular/common/http';
import { UserListComponent } from './user-list/user-list.component';
import { UserCardComponent } from './user-card/user-card.component';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: 'user',
    component: UserComponent,
    children: [
      {
        path: '',
        component: UserListComponent,
        //canActivate: [AuthGuard],
      },
      {
        path: 'booking',
        component: UserBookingComponent,
        //canActivate: [AuthGuard],
      },
      {
        path: 'rental',
        component: UserRentalComponent,
        //canActivate: [AuthGuard],
      },
    ],
  },
];

@NgModule({
  declarations: [
    UserBookingComponent,
    UserRentalComponent,
    UserListComponent,
    UserCardComponent,
  ],
  imports: [
    FormsModule,
    HttpClientModule,
    CommonModule,
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule, UserListComponent],
  providers: [RentalService, BookingService, AuthGuard],
})
export class UserModule {}
