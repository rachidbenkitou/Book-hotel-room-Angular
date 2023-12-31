import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import {DashboardRoutes} from "./dashboard.routing";
import {RouterModule} from "@angular/router";



@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(DashboardRoutes)
  ]
})
export class DashboardModule {
}
