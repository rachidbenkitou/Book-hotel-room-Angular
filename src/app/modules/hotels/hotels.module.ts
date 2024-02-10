import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HotelComponent} from './components/hotel-list/hotel-list.component';
import {RouterModule} from "@angular/router";
import {HotelRoutes} from "./hotel.routing";
import {HttpClientModule} from "@angular/common/http";
import {HotelService} from "./services/hotel.service";

import {HotelAddEditComponent} from './components/hotel-add-edit/hotel-add-edit.component';
import {HotelSearchComponent} from './components/hotel-search/hotel-search.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HotelsPageComponent} from "./containers/hotels-page/hotels-page.component";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {FeatherModule} from "angular-feather";
import {NgSelectModule} from "@ng-select/ng-select";
import {SharedComponentsModule} from "../../shared-components/shared-components.module";
import {NgxDatatableModule} from "@swimlane/ngx-datatable";
import {ButtonModule} from 'primeng/button';
import {SharedModule} from "primeng/api";
import {TableModule} from "primeng/table";
import { HotelDetailsComponent } from './components/hotel-details/hotel-details.component';
import { HotelInfosComponent } from './components/hotel-details/hotel-infos/hotel-infos.component';
import { HotelDashboardComponent } from './components/hotel-details/hotel-dashboard/hotel-dashboard.component';
import {RatingModule} from "primeng/rating";
import {DataViewModule} from "primeng/dataview";
import {DropdownModule} from "primeng/dropdown";
import {InputTextModule} from "primeng/inputtext";
import {ChartModule} from "primeng/chart";



@NgModule({
  declarations: [
    HotelComponent,
    HotelAddEditComponent,
    HotelSearchComponent,
    HotelsPageComponent,
    HotelDetailsComponent,
    HotelInfosComponent,
    HotelDashboardComponent

  ],
    imports: [
        ButtonModule,
        CommonModule,
        HttpClientModule,
        RouterModule.forChild(HotelRoutes),
        ReactiveFormsModule,
        FormsModule,
        NgbModule,
        FeatherModule,
        NgSelectModule,
        SharedComponentsModule,
        NgxDatatableModule,
        SharedModule,
        TableModule,
        RatingModule,
        DataViewModule,
        DropdownModule,
        InputTextModule,
        ChartModule,
    ],
  exports: [HotelComponent],
  providers: [HotelService],
})
export class HotelsModule {
}
