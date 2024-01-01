import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DefaultComponent} from "./layouts/default/default.component";

const routes: Routes = [
  {
    path: '',
    component: DefaultComponent,
    children: [
      {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
      {
        path: 'dashboard',
        loadChildren: () => import('./modules/dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      {
        path: 'hotel-list',
        loadChildren: () => import('./modules/hotels/hotels.module').then(m => m.HotelsModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
