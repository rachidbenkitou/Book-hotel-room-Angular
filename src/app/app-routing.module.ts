import {NotfoundComponent} from './shared/components/404/not-found.component';
import {Routes} from '@angular/router';
import {FullComponent} from './layouts/full/full.component';

export const Approutes: Routes = [
  {
    path: '',
    component: FullComponent,

    children: [
      {path: '', redirectTo: '/dashboard', pathMatch: 'full'},

      {
        path: 'dashboard',
        loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      {
        path: 'hotels',
        loadChildren: () => import('./modules/hotels/hotels.module').then(m => m.HotelsModule)
      },
      {
        path: 'hotelOwners',
        loadChildren: () => import('./modules/hotelOwners/hotelOwner.module').then(m => m.HotelOwnersModule)
      },
      {
        path: 'categories',
        loadChildren: () => import('./categories/category.module').then(m => m.CategoryModule)
      },
      {
        path: 'clients',
        loadChildren: () => import('./clients/client.module').then(m => m.ClientModule)
      },
    ]
  },
  {
    path: '**',
    component: NotfoundComponent
  }


];

