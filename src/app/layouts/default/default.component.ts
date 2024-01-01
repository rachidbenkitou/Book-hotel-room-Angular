import {Component, OnInit} from '@angular/core';

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

}
