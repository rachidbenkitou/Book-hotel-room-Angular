import {Routes} from "@angular/router";
import {HotelComponent} from "./components/hotel-list/hotel-list.component";
import {HotelSearchComponent} from "./components/hotel-search/hotel-search.component";

export const HotelRoutes: Routes = [
  {
    path: '',
    component: HotelSearchComponent,
  }
];
