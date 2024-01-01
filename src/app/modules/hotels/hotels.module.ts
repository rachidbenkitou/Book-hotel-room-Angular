import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HotelComponent} from './components/hotel/hotel.component';
import {RouterModule} from "@angular/router";
import {HotelRoutes} from "./hotel.routing";
import {MatTableModule} from "@angular/material/table";
import {MatPaginatorModule} from "@angular/material/paginator";
import {HttpClientModule} from "@angular/common/http";
import {HotelService} from "./services/hotel.service";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";


@NgModule({
  declarations: [
    HotelComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild(HotelRoutes),
    MatTableModule,
    MatPaginatorModule,
    MatIconModule,
    MatButtonModule
  ],
  providers: [HotelService],

})
export class HotelsModule {
}
