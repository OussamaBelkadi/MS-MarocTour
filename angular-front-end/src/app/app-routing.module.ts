import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RegionComponent} from "./region/region.component";
import {ReservationComponent} from "./reservation/reservation.component";

const routes: Routes = [
  { path: "region", component: RegionComponent },
  { path: "reservation", component: ReservationComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
