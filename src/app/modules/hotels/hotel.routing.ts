import {Routes} from "@angular/router";
import {HotelSearchComponent} from "./components/hotel-search/hotel-search.component";
import {HotelsPageComponent} from "./containers/hotels-page/hotels-page.component";
import {HotelAddEditComponent} from "./components/hotel-add-edit/hotel-add-edit.component";

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
      {
        path: 'add',
        component: HotelAddEditComponent,
        data: {
          title: 'Register a new Hotel',
          addAction: true,
          operation: "add"
        },
      },
    ]
  }
];
