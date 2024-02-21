import {RouteInfo} from './vertical-sidebar.metadata';

export const ROUTES: RouteInfo[] = [
  {
    path: "",
    title: "Bonketo",
    icon: "mdi mdi-dots-horizontal",
    class: "nav-small-cap",
    extralink: true,
    submenu: [],
  },
  {
    path: '/dashboard',
    title: 'Dashboard',
    icon: 'Home',
    class: '',
    extralink: false,
    submenu: []
  },
  {
    path: '/hotels',
    title: 'Hotels',
    icon: 'Home',
    class: '',
    extralink: false,
    submenu: []
  },
  {
    path: '/hotelOwners',
    title: 'Hotel Owners',
    icon: 'user',
    class: '',
    extralink: false,
    submenu: []
  },
  {
    path: '/rooms',
    title: 'Reservation Requests',
    icon: 'Home',
    class: '',
    extralink: false,
    submenu: []
  },
  {
    path: '/users',
    title: 'Users',
    icon: 'user',
    class: '',
    extralink: false,
    submenu: []
  },
  // {
  //   path: '/WimNotifymodel',
  //   title: 'Settings',
  //   icon: 'settings',
  //   class: 'has-arrow',
  //   extralink: false,
  //   //isPro: false,
  //   submenu: [
  //     {
  //       path: '/WimNotify/model',
  //       title: 'Model',
  //       icon: 'mdi mdi-layers',
  //       class: '',
  //       extralink: false,
  //       //isPro: false,
  //       submenu: []
  //     },
  //   ]
  // },

];
