import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { BookingsComponent } from './booking/booking-list/booking-list.component';
import { CreateBookingComponent } from './booking/booking-create/booking-create.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
//import { RoomViewComponent } from './rental-detail/rental-detail.component';

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
  // {
  //   path: 'editroom/:id',
  //   component: RoomViewComponent,
  // },
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
