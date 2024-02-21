import {Routes} from "@angular/router";
import {HotelsPageComponent} from "../hotels/containers/hotels-page/hotels-page.component";
import {HotelSearchComponent} from "../hotels/components/hotel-search/hotel-search.component";
import {HotelAddEditComponent} from "../hotels/components/hotel-add-edit/hotel-add-edit.component";
import {HotelDetailsComponent} from "../hotels/components/hotel-details/hotel-details.component";
import {HotelOwnerPageComponent} from "./containers/hotel-owner-page/hotel-owner-page.component";
import {HotelOwnerSearchComponent} from "./components/hotel-owner-search/hotel-owner-search.component";


export const HotelOwnerRoutes: Routes = [
  {
    path: '',
    component: HotelOwnerPageComponent,
    children: [
      {
        path: '',
        redirectTo: 'search',
        pathMatch: 'full',
      },
      {
        path: 'search',
        component: HotelOwnerSearchComponent,
        data: {
          title: 'Hotel Owners management',
          page: 'hotelOwner',
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
      {
        path: 'edit/:id',
        component: HotelAddEditComponent,
        data: {
          title: 'Update a  Hotel',
          addAction: false,
          operation: "edit"
        },
      },
    ]
  },
  {
    path: ':id/details',
    component: HotelDetailsComponent,
    data: {
      title: 'Hotel details',
      addAction: false
    },
  }
];
