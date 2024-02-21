import {NgModule} from '@angular/core';
import {RouterModule} from "@angular/router";
import {HotelOwnerRoutes} from "./hotelOwner-routing.module";
import {HotelOwnerListComponent} from "./components/hotel-owner-list/hotel-owner-list.component";
import {HotelOwnerAddEditComponent} from "./components/hotel-owner-add-edit/hotel-owner-add-edit.component";
import {HotelOwnerSearchComponent} from "./components/hotel-owner-search/hotel-owner-search.component";
import { HotelOwnerPageComponent } from './containers/hotel-owner-page/hotel-owner-page.component';
import {FeatherModule} from "angular-feather";
import {NgSelectModule} from "@ng-select/ng-select";
import {ReactiveFormsModule} from "@angular/forms";
import {NgIf} from "@angular/common";
import {TableModule} from "primeng/table";
import {NgbNavModule} from "@ng-bootstrap/ng-bootstrap";


@NgModule({
  declarations: [
    HotelOwnerListComponent,
    HotelOwnerAddEditComponent,
    HotelOwnerSearchComponent,
    HotelOwnerPageComponent,
  ],
  imports: [
    RouterModule.forChild(HotelOwnerRoutes),
    FeatherModule,
    NgSelectModule,
    ReactiveFormsModule,
    NgIf,
    TableModule,
    NgbNavModule,
  ],
  exports: [],
  providers: [],
})
export class HotelOwnersModule {
}
