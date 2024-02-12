import {Component, OnInit, ViewChild} from "@angular/core";
import { ChartComponent } from "ng-apexcharts";

import {
  ApexNonAxisChartSeries,
  ApexResponsive,
  ApexChart
} from "ng-apexcharts";
import {Subscription} from "rxjs";
import {ReservationService} from "../../../../Reservations/services/reservation.service";
import {HotelService} from "../../../services/hotel.service";
import {RoomsService} from "../../../../rooms/services/rooms.service";

export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  labels: any;
};

@Component({
  selector: 'app-hotel-dashboard',
  templateUrl: './hotel-dashboard.component.html',
  styleUrls: ['./hotel-dashboard.component.scss']
})
export class HotelDashboardComponent implements OnInit {
  loadingWebSiteAndSection: boolean;
  loadingWebSiteForEachStatus: boolean;
  prep: any;
  maint: any;
  active: any;
  canceled: any;
  delete: any;

  data: any;


  //**********************

  basicData: any;

  basicOptions: any;
  @ViewChild("chart") chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  numberOfRooms: number=0;
  hotel: any;
  numberOfReservations: number=0;
  sumReservationsPrice: number=0;
  sumReservationsPriceForEveryYear: any[] = [];
  years: number[] = [];
  prices: number[] = [];
  constructor(private roomsService: RoomsService,
              private hotelService: HotelService,
              private reservationService: ReservationService) {}

  getNumberOfRoomsByHotelId(hotelId: number) {
    //this.loadingState.emit(true)
    this.roomsService.changeLoadingState(true)
    this.roomsService.countRoomsByHotelId(hotelId).subscribe(
      (response: number) => {
        console.log(response)
        this.numberOfRooms = response;
        this.roomsService.changeLoadingState(false)
      }
    );
  }
  getNumberOfReservationsByHotelId(hotelId: number) {
    //this.loadingState.emit(true)
    this.reservationService.changeLoadingState(true)
    this.reservationService.countReservationsByHotelId(hotelId).subscribe(
      (response: number) => {
        this.numberOfReservations = response;
        this.reservationService.changeLoadingState(false)
      }
    );
  }

  getSumReservationsPriceByHotelId(hotelId: number) {
    //this.loadingState.emit(true)
    this.reservationService.changeLoadingState(true)
    this.reservationService.sumReservationsPriceByHotelId(hotelId).subscribe(
      (response: number) => {
        this.sumReservationsPrice = response;
        this.reservationService.changeLoadingState(false)
      }
    );
  }

  getSumReservationsPriceForEveryYearByHotelId(hotelId: number) {
    //this.loadingState.emit(true)
    this.reservationService.changeLoadingState(true)
    this.reservationService.sumReservationsPriceForEveryYearByHotelId(hotelId).subscribe(
      (response: any) => {
        this.sumReservationsPriceForEveryYear = response;
        this.sumReservationsPriceForEveryYear.forEach(item => {
          this.years.push(item?.year);
          this.prices.push(item?.totalPrice);
        });
        this.reservationService.changeLoadingState(false)
      }
    );
  }
  ngOnInit() {
    this.hotel = this.hotelService.hotel.getValue()
    this.getNumberOfRoomsByHotelId(this.hotel?.id)
    this.getNumberOfReservationsByHotelId(this.hotel?.id)
    this.getSumReservationsPriceByHotelId(this.hotel?.id)
    this.getSumReservationsPriceForEveryYearByHotelId(this.hotel?.id)
    this.basicData = {
      labels: this.years,
      datasets: [
        {
          label: 'Price',
          data: this.prices,
          fill: false,
          borderColor: '#42A5F5',
          tension: .4
        }
      ]
    };

    this.chartOptions = {
      series: [55, 55, 13, 43, 22],
      chart: {
        // width: 300,
        type: "pie",

      },
      labels: ["Team A", "Team B", "Team C", "Team D", "Team E"],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              // width: 200,
            },
            legend: {
              position: "bottom"
            }
          }
        }
      ]
    };

  }


}
