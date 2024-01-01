import {Component, signal} from '@angular/core';
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
export class SidebarComponent {

  menuItems= signal<MenuItem[]>([
    {
      icon: 'dashboard',
      label: 'Dashboard',
      route: 'dashboard'
    },
    {
      icon: 'hotel-list',
      label: 'Hotels',
      route: 'hotels'
    },
    {
      icon: 'hotel-list',
      label: 'Hotels',
      route: 'hotels'
    },
    {
      icon: 'hotel-list',
      label: 'Hotels',
      route: 'hotels'
    },
    {
      icon: 'hotel-list',
      label: 'Hotels',
      route: 'hotels'
    },
    {
      icon: 'hotel-list',
      label: 'Hotels',
      route: 'hotels'
    },
    {
      icon: 'hotel-list',
      label: 'Hotels',
      route: 'hotels'
    }
  ])
}
