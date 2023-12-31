import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HotelComponent} from './components/hotel/hotel.component';
import {RouterModule} from "@angular/router";
import {HotelRoutes} from "./hotel.routing";


@NgModule({
  declarations: [
    HotelComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(HotelRoutes)
  ]
})
export class HotelsModule {
}
