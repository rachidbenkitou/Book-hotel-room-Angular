import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DefaultComponent} from "./default.component";
import {RouterOutlet} from "@angular/router";
import {SharedModule} from "../../shared/shared.module";
import {MatSidenavModule} from "@angular/material/sidenav";


@NgModule({
  declarations: [
    DefaultComponent
  ],
  exports: [
    DefaultComponent
  ],
  imports: [
    CommonModule,
    RouterOutlet,
    SharedModule,
    MatSidenavModule
  ]
})
export class DefaultModule {
}
