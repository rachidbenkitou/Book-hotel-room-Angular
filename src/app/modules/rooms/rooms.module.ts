import {NgModule} from '@angular/core';
import {RoomsService} from "./services/rooms.service";
import {FeatherModule} from "angular-feather";
import {NgIf} from "@angular/common";
import {NgbNavModule} from "@ng-bootstrap/ng-bootstrap";
import {PaginatorModule} from "primeng/paginator";
import {ReactiveFormsModule} from "@angular/forms";
import {CategoryModule} from "../../categories/category.module";


@NgModule({
  declarations: [],
  imports: [
    FeatherModule,
    NgIf,
    NgbNavModule,
    PaginatorModule,
    ReactiveFormsModule,
    CategoryModule,
  ],
  exports: [],
  providers: [RoomsService],
})
export class RoomsModule {
}
