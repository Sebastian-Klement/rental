import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { RentalComponent } from './rental.component';
import { RentalCreateComponent } from './rental-create/rental-create.component';
import { RentalService } from './rental.service';
import { RentalDetailComponent } from './rental-detail/rental-detail.component';
import { RentalListComponent } from './rental-list/rental-list.component';

import { AuthGuard } from '../auth/auth.guard';

const routes: Routes = [
  {
    path: 'rental',
    component: RentalComponent,
    children: [
      {
        path: '',
        component: RentalListComponent,
      },
      {
        path: 'rentalcreate',
        component: RentalCreateComponent,
        // canActivate: [AuthGuard]
      },
      {
        path: 'rentaldetail/:id',
        component: RentalDetailComponent,
      },
      // { path: ':city/homes', component: RentalSearchComponent },
    ],
  },
];

@NgModule({
  declarations: [
    RentalCreateComponent,
    RentalDetailComponent,
    RentalListComponent,
  ],
  imports: [
    HttpClientModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule, RentalListComponent],
  providers: [RentalService],
})
export class RentalModule {}
