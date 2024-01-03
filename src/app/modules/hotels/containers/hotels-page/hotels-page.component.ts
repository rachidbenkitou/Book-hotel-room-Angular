import {Component} from '@angular/core';
import {RouterOutlet} from "@angular/router";
import {ActionsService} from "../../../../shared/services/actions.service";
import {Subscription} from "rxjs";

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
  ) {

    this.clickActionSubscription = this.actionsService.getAddEvent().subscribe((ev) => {

      if (ev === 'hotel') {
        alert("Hello I am Hotel")
      }
    })
  }

}
