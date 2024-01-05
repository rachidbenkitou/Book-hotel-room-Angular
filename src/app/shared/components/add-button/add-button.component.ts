import {Component, OnInit} from '@angular/core';
import {NgIf, NgStyle} from "@angular/common";
import {ActivatedRoute, Data, NavigationEnd, Router} from "@angular/router";
import {Title} from "@angular/platform-browser";
import {filter, map, mergeMap} from "rxjs";
import {ActionsService} from "../../services/actions.service";

@Component({
  selector: 'app-add-button',
  standalone: true,
  templateUrl: './add-button.component.html',
  imports: [
    NgStyle,
    NgIf
  ],
  styleUrl: './add-button.component.scss'
})
export class AddButtonComponent implements OnInit{
  url: string = ''
  addButtonText = 'Ajouter'
  showAddButton: boolean = false
  showSecondAddButton: boolean = false
  pageInfo: Data = Object.create(null);
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private actionsService: ActionsService,
    private titleService: Title
  ) {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .pipe(map(() => this.activatedRoute))
      .pipe(
        map(route => {
          while (route.firstChild) {
            route = route.firstChild;
          }
          return route;
        })
      )
      .pipe(filter(route => route.outlet === 'primary'))
      .pipe(mergeMap(route => route.data))
      .subscribe(event => {
        // this.titleService.setTitle(event['title']);
        this.pageInfo = event;
        this.url = event['page']
        this.showAddButton = event['addButton']
        this.showSecondAddButton = event['secondAddButton']
        if (event.hasOwnProperty('secondAddButton')) {
          this.addButtonText = event['title']
        }
        else if (!event.hasOwnProperty('secondAddButton')) {
          this.addButtonText = 'Add new'
        }

      });
  }
  ngOnInit() {

  }

  onAdd() {
    this.actionsService.sendAddEvent(this.url);
  }

  onSecondAdd() {
    this.actionsService.sendSecondAddEvent(this.url);
  }

}
