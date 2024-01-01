import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from "@angular/material/paginator";
import {MatTableDataSource} from "@angular/material/table";
import {HotelService} from "../../services/hotel.service";
import {HttpErrorResponse} from "@angular/common/http";
import {Hotel} from "../../models/hotel";

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.scss']
})
export class HotelComponent implements  OnInit {
  displayedColumns: string[] = ['id', 'name', 'address', 'city', 'description', "actions"];
  dataSource!: MatTableDataSource<Hotel>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngOnInit(): void {
    this.getHotels();
  }

  constructor(private hotelService: HotelService) {
  }

  public getHotels(id?: number, name?: string, address?: string, cityId?: number): void {
    this.hotelService.findHotels(id, name, address, cityId).subscribe(
      (response: Hotel[]) => {
        this.dataSource = new MatTableDataSource(response);
        this.dataSource.paginator = this.paginator;
        console.log(this.dataSource.data)
      },
      (error: HttpErrorResponse) => {
      },
      () => {
      }
    );
  }


}

