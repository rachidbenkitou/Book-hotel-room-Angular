import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HotelComponent} from './components/hotel-list/hotel-list.component';
import {RouterModule} from "@angular/router";
import {HotelRoutes} from "./hotel.routing";
import {MatTableModule} from "@angular/material/table";
import {MatPaginatorModule} from "@angular/material/paginator";
import {HttpClientModule} from "@angular/common/http";
import {HotelService} from "./services/hotel.service";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";
import {MatSortModule} from "@angular/material/sort";
import {HotelAddEditComponent} from './components/hotel-add-edit/hotel-add-edit.component';
import {HotelSearchComponent} from './components/hotel-search/hotel-search.component';
import {MatSelectModule} from "@angular/material/select";
import {FlexModule} from "@angular/flex-layout";
import {MatDialogActions, MatDialogClose, MatDialogContent, MatDialogTitle} from "@angular/material/dialog";
import {ReactiveFormsModule} from "@angular/forms";
import {MatRadioModule} from "@angular/material/radio";
import {MatProgressBarModule} from "@angular/material/progress-bar";


@NgModule({
  declarations: [
    HotelComponent,
    HotelAddEditComponent,
    HotelSearchComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild(HotelRoutes),
    MatTableModule,
    MatPaginatorModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatSortModule,
    MatSelectModule,
    FlexModule,
    MatDialogActions,
    MatDialogClose,
    ReactiveFormsModule,
    MatRadioModule,
    MatDialogContent,
    MatDialogTitle,
    MatProgressBarModule,

  ],
  providers: [HotelService],

})
export class HotelsModule {
}
