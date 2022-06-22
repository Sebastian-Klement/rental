import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { BookingsComponent } from './bookings/bookings.component';
import { CreateBookingComponent } from './create-booking/create-booking.component';
import { CreateRoomComponent } from './create-room/create-room.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { RoomViewComponent } from './room-view/room-view.component';

const routes: Routes = [
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'bookings',
    component: BookingsComponent,
  },
  {
    path: 'create',
    component: CreateBookingComponent,
  },
  {
    path: 'edit/:id',
    component: CreateBookingComponent,
  },
  {
    path: 'createroom',
    component: CreateRoomComponent,
  },
  {
    path: 'editroom/:id',
    component: RoomViewComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
