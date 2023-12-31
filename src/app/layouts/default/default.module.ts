import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DefaultComponent} from "./default.component";
import {RouterOutlet} from "@angular/router";


@NgModule({
  declarations: [
    DefaultComponent
  ],
  exports: [
    DefaultComponent
  ],
  imports: [
    CommonModule,
    RouterOutlet
  ]
})
export class DefaultModule {
}
