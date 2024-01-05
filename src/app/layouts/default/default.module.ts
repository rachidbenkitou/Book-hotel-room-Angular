import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DefaultComponent} from "./default.component";
import {RouterLink, RouterOutlet} from "@angular/router";
import {SharedModule} from "../../shared/shared.module";
import {AddButtonComponent} from "../../shared/components/add-button/add-button.component";


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
    RouterLink,
    AddButtonComponent
  ]
})
export class DefaultModule {
}
