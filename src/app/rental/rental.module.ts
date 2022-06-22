import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { RentalComponent } from './rental.component';
import { RentalCreateComponent } from './rental-create/rental-create.component';
import { RentalService } from './rental.service';

const routes: Routes = [
  {
    path: 'rental',
    component: RentalComponent,
    children: [
      // { path: '', component: RentalListComponent },
      {
        path: 'rentalcreate',
        component: RentalCreateComponent,
      },
      // { path: ':rentalId/edit', component: RentalDetailUpdateComponent },
      // { path: ':rentalId', component: RentalDetailComponent },
      // { path: ':city/homes', component: RentalSearchComponent },
    ],
  },
];

@NgModule({
  declarations: [RentalCreateComponent],
  imports: [
    HttpClientModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule],
  providers: [RentalService],
})
export class RentalModule {}
