import {Routes} from "@angular/router";
import {HotelSearchComponent} from "./components/hotel-search/hotel-search.component";
import {HotelsPageComponent} from "./containers/hotels-page/hotels-page.component";
import {HotelAddEditComponent} from "./components/hotel-add-edit/hotel-add-edit.component";
import {HotelDetailsComponent} from "./components/hotel-details/hotel-details.component";

export const HotelRoutes: Routes = [
  {
    path: '',
    component: HotelsPageComponent,
    children: [
      {
        path: '',
        redirectTo: 'search',
        pathMatch: 'full',
      },
      {
        path: 'search',
        component: HotelSearchComponent,
        data: {
          title: 'Hotels management',
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
