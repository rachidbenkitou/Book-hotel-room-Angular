import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {HotelService} from "../../../services/hotel.service";

@Component({
  selector: 'app-hotel-infos',
  templateUrl: './hotel-infos.component.html',
  styleUrls: ['./hotel-infos.component.scss']
})
export class HotelInfosComponent implements OnInit {
  @Input() hotel: any
  @Output() loadingState: EventEmitter<any> = new EventEmitter();


  constructor(private hotelService: HotelService) {
  }

  ngOnInit(): void {
    this.hotel = this.hotelService.hotel.getValue()
    this.hotelService.changeLoadingState(true)
  }

}
