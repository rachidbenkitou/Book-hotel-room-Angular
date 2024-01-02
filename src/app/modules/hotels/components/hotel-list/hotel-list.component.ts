import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {MatSort} from "@angular/material/sort";
import {MatPaginator} from "@angular/material/paginator";

@Component({
  selector: 'app-hotel-list',
  templateUrl: './hotel-list.component.html',
  styleUrls: ['./hotel-list.component.scss']
})
export class HotelComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'address', 'city', 'description', "actions"];
  @Input() tableProperties!: any;
  ngOnInit(): void {
  }

  test(): void {
    console.log(this.tableProperties.dataSource.sort)
  }
}

