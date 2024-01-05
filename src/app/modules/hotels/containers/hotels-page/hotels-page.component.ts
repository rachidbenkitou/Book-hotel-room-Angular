import {Component} from '@angular/core';
import {RouterOutlet} from "@angular/router";
import {ActionsService} from "../../../../shared/services/actions.service";
import {Subscription} from "rxjs";
import {HotelService} from "../../services/hotel.service";

@Component({
  selector: 'app-hotels-page',
  standalone: true,
  templateUrl: './hotels-page.component.html',
  imports: [
    RouterOutlet
  ],
  styleUrl: './hotels-page.component.scss'
})
export class HotelsPageComponent {
  clickActionSubscription: Subscription;

  constructor(
    private actionsService: ActionsService,
    private hotelService: HotelService,
  ) {

    this.clickActionSubscription = this.actionsService.getAddEvent().subscribe((ev) => {

      if (ev === 'hotel') {
        //this.openAddEditEmpForm();
      }
    })
  }


  // openAddEditEmpForm() {
  //   const dialogRef = this._dialog.open(HotelAddEditComponent);
  //   dialogRef.afterClosed().subscribe({
  //     next: (val) => {
  //       if (val) {
  //         //this.getEmployeeList();
  //       }
  //     },
  //   });
  // }

}
