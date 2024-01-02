import {Component, OnInit, ViewChild} from '@angular/core';
import {Hotel} from "../../models/hotel";
import {MatTableDataSource} from "@angular/material/table";
import {HotelService} from "../../services/hotel.service";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {MatDialog} from "@angular/material/dialog";
import {HotelAddEditComponent} from "../hotel-add-edit/hotel-add-edit.component";

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

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngOnInit(): void {
    this.getHotels();
  }

  constructor(private hotelService: HotelService, private _dialog: MatDialog) {
  }

  getHotels(id?: number, name?: string, address?: string, cityId?: number): void {
    this.hotelService.findHotels(id, name, address, cityId).subscribe({
      next: (response: Hotel[]) => {
        this.tableProperties = {
          "dataSource": new MatTableDataSource(response)
        }

        // Set paginator and sort after the data has been fetched
        this.tableProperties.dataSource.paginator = this.paginator;
        this.tableProperties.dataSource.sort = this.sort;
      },
      error: (e) => console.error(e)
    });
  }

  openAddEditHotelForm():void{
    this._dialog.open(HotelAddEditComponent);
  }
}
