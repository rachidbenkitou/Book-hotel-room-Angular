import {NgModule} from '@angular/core';

// Import PrimeNG modules
import {CustomerService} from "./services/customerservice";
import {TableCustomersDemoComponent} from "./components/table-customers-demo/table-customers-demo.component";
// Import PrimeNG modules
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {PrimengModule} from "../../sharedModules/primeng/primeng.module";
import {NgSelectModule} from "@ng-select/ng-select";


@NgModule({
  imports: [
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    PrimengModule,
    NgSelectModule
  ],
  declarations: [
    TableCustomersDemoComponent
  ],
  bootstrap: [],
  providers: [CustomerService],
  exports: [TableCustomersDemoComponent]
})

export class RoomsModule {
}
