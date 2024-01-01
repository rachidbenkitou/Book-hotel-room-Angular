import {Component, OnInit, signal} from '@angular/core';

export type MenuItem= {
  icon: string;
  label: string;
  route: string;
}
@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent implements OnInit {
  sideBarOpen = true;
//Sidebar toggle show hide function
  status = false;
  addToggle()
  {
    this.status = !this.status;
  }
  constructor() {
  }

  ngOnInit() {
  }


  sideBarToggler($event: any) {
    this.sideBarOpen = !this.sideBarOpen;
  }


  menuItems= signal<MenuItem[]>([
    {
      icon: 'bx bxs-dashboard',
      label: 'Dashboard',
      route: 'dashboard'
    },
    {
      icon: 'bx bxs-shopping-bag-alt',
      label: 'Hotels',
      route: 'hotel-list'
    }
  ])

}
