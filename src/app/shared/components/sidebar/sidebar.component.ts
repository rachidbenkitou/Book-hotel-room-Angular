import {Component, OnInit, signal} from '@angular/core';
export type MenuItem= {
  icon: string;
  label: string;
  route: string;
}
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit{
  ngOnInit(): void {
  }

  //Sidebar toggle show hide function
  status = false;
  addToggle()
  {
    this.status = !this.status;
  }
  menuItems= signal<MenuItem[]>([
    {
      icon: 'dashboard',
      label: 'Dashboard',
      route: 'dashboard'
    },
    {
      icon: 'hotel',
      label: 'Hotels',
      route: 'hotels'
    },
    {
      icon: 'hotel',
      label: 'Hotels',
      route: 'hotels'
    },
    {
      icon: 'hotel',
      label: 'Hotels',
      route: 'hotels'
    },
    {
      icon: 'hotel',
      label: 'Hotels',
      route: 'hotels'
    },
    {
      icon: 'hotel',
      label: 'Hotels',
      route: 'hotels'
    },
    {
      icon: 'hotel',
      label: 'Hotels',
      route: 'hotels'
    }
  ])
}
