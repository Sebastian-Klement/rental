import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { BookingsComponent } from './bookings/bookings.component';
import { CreateBookingComponent } from './create-booking/create-booking.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
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
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'auth/register',
    component: RegisterComponent,
  },
  {
    path: 'auth/login',
    component: LoginComponent,
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
