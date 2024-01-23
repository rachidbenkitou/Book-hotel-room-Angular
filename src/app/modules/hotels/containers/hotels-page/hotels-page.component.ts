import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {NavigationEnd, Router} from "@angular/router";
import {ActionsService} from "../../../../shared/services/actions.service";
import {Subject, Subscription} from "rxjs";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {ProductService} from "../../../../products/services/product.service";
import {Title} from "@angular/platform-browser";
import {DataService} from "../../../../shared/services/data.service";

@Component({
  selector: 'app-hotels-page',
  templateUrl: './hotels-page.component.html',
  styleUrls: ['./hotels-page.component.scss']
})
export class HotelsPageComponent implements OnInit {

  clickActionSubscription: Subscription;
  eventProspSubject: Subject<void> = new Subject<void>();
  screenMode: string | undefined
  loading: boolean = false
  currentRoute!: string
  active: number = 1;

  constructor(private productService: ProductService,
              private titleService: Title,
              public dataService: DataService,
              private modalService: NgbModal,
              private actionsService: ActionsService,
              private router: Router,
              private changeDetectorRef: ChangeDetectorRef) {

    this.clickActionSubscription = this.actionsService.getAddEvent().subscribe((ev) => {

      if (ev === 'hotel') {
        this.router.navigate([`/hotels/add`]);
      }
    })
    router.events.subscribe((event => {
      if (event instanceof NavigationEnd) {
        this.currentRoute = event.url;
      }
    }));

  }

  // tslint:disable-next-line:use-lifecycle-interface
  ngOnDestroy(): void {
    this.clickActionSubscription.unsubscribe()
  }

  isActiveRoute() {
    if (this.currentRoute === '/product/search') {
      this.active = 1
    }
  }

  ngOnInit(): void {
    // this.productService.loading$.subscribe(event => {
    //   this.loading = event;
    //   this.changeDetectorRef.detectChanges()
    // })
    this.isActiveRoute()
  }

}
