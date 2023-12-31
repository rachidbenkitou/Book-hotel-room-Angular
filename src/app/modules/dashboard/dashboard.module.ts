import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import {DashboardRoutes} from "./dashboard.routing";
import {RouterModule} from "@angular/router";
import {MatPaginatorModule} from "@angular/material/paginator";



@NgModule({
  declarations: [
    DashboardComponent
  ],
    imports: [
        CommonModule,
        RouterModule.forChild(DashboardRoutes),
        MatPaginatorModule
    ]
})
export class DashboardModule {
}
