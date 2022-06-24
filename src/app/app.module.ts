import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookingsComponent } from './booking/booking-list/booking-list.component';
import { CreateBookingComponent } from './booking/booking-create/booking-create.component';
import { MatSliderModule } from '@angular/material/slider';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { AuthComponent } from './auth/auth.component';
import { AuthModule } from './auth/auth.module';
import { FavouritePlacesComponent } from './favourite-places/favourite-places.component';
import { ProfileComponent } from './profile/profile.component';
import { RentalComponent } from './rental/rental.component';
import { RentalModule } from './rental/rental.module';

@NgModule({
  declarations: [
    AppComponent,
    BookingsComponent,
    CreateBookingComponent,
    HomeComponent,
    HeaderComponent,
    AuthComponent,
    FavouritePlacesComponent,
    ProfileComponent,
    RentalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    FormsModule,
    RentalModule,
    MatSliderModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
