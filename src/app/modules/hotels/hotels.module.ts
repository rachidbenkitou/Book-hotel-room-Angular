import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HotelComponent} from './components/hotel-list/hotel-list.component';
import {RouterModule} from "@angular/router";
import {HotelRoutes} from "./hotel.routing";
import {HttpClientModule} from "@angular/common/http";
import {HotelService} from "./services/hotel.service";

import {HotelAddEditComponent} from './components/hotel-add-edit/hotel-add-edit.component';
import {HotelSearchComponent} from './components/hotel-search/hotel-search.component';
import {FlexModule} from "@angular/flex-layout";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AddButtonComponent} from "../../shared/components/add-button/add-button.component";
import {CalendarModule} from 'primeng/calendar';
import {RoomsModule} from "../rooms/rooms.modules";

@NgModule({
  declarations: [
    HotelComponent,
    HotelAddEditComponent,
    HotelSearchComponent,

  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild(HotelRoutes),
    FlexModule,
    ReactiveFormsModule,
    AddButtonComponent,
    CalendarModule,
    FormsModule,
    RoomsModule
  ],
  exports: [HotelComponent],
  providers: [HotelService],
})
export class HotelsModule {
}
