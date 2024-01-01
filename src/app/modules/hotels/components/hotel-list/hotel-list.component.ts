import {Component, Input, OnInit} from '@angular/core';

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
}

