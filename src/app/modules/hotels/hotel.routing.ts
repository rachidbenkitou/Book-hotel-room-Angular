import {Routes} from "@angular/router";
import {HotelSearchComponent} from "./components/hotel-search/hotel-search.component";
import {HotelsPageComponent} from "./containers/hotels-page/hotels-page.component";

export const HotelRoutes: Routes = [
  {
    path: '',
    component: HotelsPageComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'search'
      },
      {
        path: 'search',
        component: HotelSearchComponent,
        data: {
          title: 'Hotel management',
          page: 'hotel',
          addButton: true
        },
      },
    ]
  }
];
