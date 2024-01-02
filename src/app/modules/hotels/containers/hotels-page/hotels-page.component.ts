import { Component } from '@angular/core';
import {RouterLink, RouterOutlet} from "@angular/router";

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

}
