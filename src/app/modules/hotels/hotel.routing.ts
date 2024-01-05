import {Routes} from "@angular/router";
import {HotelSearchComponent} from "./components/hotel-search/hotel-search.component";
import {HotelsPageComponent} from "./containers/hotels-page/hotels-page.component";
import {TableCustomersDemoComponent} from "../rooms/components/table-customers-demo/table-customers-demo.component";

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
        component: TableCustomersDemoComponent,
        data: {
          title: 'Hotel management',
          page: 'hotel',
          addButton: true
        },
      },
    ]
  }
];
