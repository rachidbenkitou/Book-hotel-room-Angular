import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {UntypedFormBuilder, UntypedFormGroup} from "@angular/forms";
import {Hotel} from "../../../hotels/models/hotel";
import {HotelService} from "../../../hotels/services/hotel.service";
import {CityService} from "../../../cities/services/city.service";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-hotel-owner-search',
  templateUrl: './hotel-owner-search.component.html',
  styleUrls: ['./hotel-owner-search.component.scss']
})
export class HotelOwnerSearchComponent implements OnInit {
  @Output() loadingState: EventEmitter<any> = new EventEmitter();
  loading: boolean = true

  public isCollapsed1 = false;

  hotelForm!: UntypedFormGroup;

  hotelList: Hotel[] = [];

  cityList: any[] = [];

  statusList: any[] = [
    {id: 1, name: "active"},
    {id: 2, name: "inactive"},
  ]

  constructor(
    private formBuilder: UntypedFormBuilder,
    private hotelService: HotelService,
    private cityService: CityService
  ) {
    hotelService.reload.subscribe(ev => {
      this.reset()
    })
  }


  initForm() {
    this.hotelForm = this.formBuilder.group({
      id: [],
      name: [],
      cityId: [],
      status: [],
    });
  }

  public getHotels(id?: number, name?: string, cityId?: number, status?: string): void {
    this.loading = true
    const submitButton = (document.getElementById('find-hotel-form') as HTMLInputElement);
    submitButton.disabled = true
    this.hotelService.changeLoadingState(true)
    this.isCollapsed1 = false
    this.hotelService.findHotels(id, name, status, cityId).subscribe(
      (response: any[]) => {
        this.hotelList = response;
      },
      (error: HttpErrorResponse) => {
        this.loading = false;
        submitButton.disabled = false
        this.hotelService.changeLoadingState(false)
      },
      () => {
        submitButton.disabled = false
        this.loading = false
        this.hotelService.changeLoadingState(false)

      }
    );
  }

  getCityList() {
    //this.loadingState.emit(true)
    this.hotelService.changeLoadingState(true)
    this.cityService.findCities().subscribe(
      (response: any[]) => {
        this.cityList = response;
        //this.loadingState.emit(false)
        this.hotelService.changeLoadingState(false)
      }
    );
  }

  reset(): void {
    this.hotelForm.reset()
    this.getHotels()
  }

  search(): void {
    this.getHotels(
      this?.hotelForm.value?.id,
      this?.hotelForm.value?.name,
      this?.hotelForm.value?.cityId,
      this?.hotelForm.value?.status
    )
  }

  ngOnInit(): void {
    this.initForm()
    this.getHotels()
    this.getCityList()
  }
}
