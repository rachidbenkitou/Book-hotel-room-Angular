import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from "@angular/material/paginator";
import {MatTableDataSource} from "@angular/material/table";
import {HotelService} from "../../services/hotel.service";
import {Hotel} from "../../models/hotel";
import {MatSort} from "@angular/material/sort";

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.scss']
})
export class HotelComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'address', 'city', 'description', "actions"];
  dataSource!: MatTableDataSource<Hotel>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngOnInit(): void {
    this.getHotels();
  }

  constructor(private hotelService: HotelService) {
  }

  getHotels(id?: number, name?: string, address?: string, cityId?: number): void {
    this.hotelService.findHotels(id, name, address, cityId).subscribe({
      next: (response: Hotel[]) => {
        this.dataSource = new MatTableDataSource(response);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      error: (e) => console.error(e)
    });
  }
}

