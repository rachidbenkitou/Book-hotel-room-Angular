import {Component, OnInit} from '@angular/core';
import {Hotel} from "../../models/hotel";
import {MatTableDataSource} from "@angular/material/table";
import {HotelService} from "../../services/hotel.service";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";

interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-hotel-search',
  templateUrl: './hotel-search.component.html',
  styleUrls: ['./hotel-search.component.css']
})
export class HotelSearchComponent implements OnInit {

  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'},
  ];


  tableProperties!: any;

  ngOnInit(): void {
    this.getHotels();
  }

  constructor(private hotelService: HotelService) {
  }

  getHotels(id?: number, name?: string, address?: string, cityId?: number): void {
    this.hotelService.findHotels(id, name, address, cityId).subscribe({
      next: (response: Hotel[]) => {
        this.tableProperties = {
          "dataSource": new MatTableDataSource(response)
        }
        console.log(this.tableProperties)
      },
      error: (e) => console.error(e)
    });
  }
}
