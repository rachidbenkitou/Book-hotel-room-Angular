import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {ClientService} from "../../../../clients/services/client.service";
import {DataService} from "../../../../shared/services/data.service";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {ActionsService} from "../../../../shared/services/actions.service";
import {NavigationEnd, Router} from "@angular/router";
import {HotelOwnerAddEditComponent} from "../../components/hotel-owner-add-edit/hotel-owner-add-edit.component";

@Component({
  selector: 'app-hotel-owner-page',
  templateUrl: './hotel-owner-page.component.html',
  styleUrls: ['./hotel-owner-page.component.scss']
})
export class HotelOwnerPageComponent implements OnInit {
  clickActionSubscription: Subscription;
  loading: boolean = false
  currentRoute!: string
  active: number = 1;

  constructor(private hotelOwnerService: ClientService,
              public dataService: DataService,
              private modalService: NgbModal,
              private actionsService: ActionsService,
              private router: Router,
              private changeDetectorRef: ChangeDetectorRef) {

    this.clickActionSubscription = this.actionsService.getAddEvent().subscribe((ev) => {

      if (ev === 'hotelOwner') {
        this.addHotelOwner();
      }
    })

    router.events.subscribe((event => {
      if (event instanceof NavigationEnd) {
        this.currentRoute = event.url;
      }
    }));

  }

  addHotelOwner() {
    const dialogRef = this.modalService.open(HotelOwnerAddEditComponent, {
      size: "xl",
      backdrop: 'static',
      keyboard: false,
    });
    const data = {
      operation: "add",
      item: {}
    }
    dialogRef.componentInstance.data = data;
    dialogRef.componentInstance.onAddEdit.subscribe((event: any) => {
      if (event.source === "close") {
        dialogRef.close()
      }
      this.hotelOwnerService.reload.emit()
    });
  }

  // tslint:disable-next-line:use-lifecycle-interface
  ngOnDestroy(): void {
    this.clickActionSubscription.unsubscribe()
  }

  isActiveRoute() {
    if (this.currentRoute === '/hotelOwners/search') {
      this.active = 1
    }
  }

  ngOnInit(): void {
    this.hotelOwnerService.loading$.subscribe(event => {
      this.loading = event;
      this.changeDetectorRef.detectChanges()
    })
    this.isActiveRoute()
  }

}
