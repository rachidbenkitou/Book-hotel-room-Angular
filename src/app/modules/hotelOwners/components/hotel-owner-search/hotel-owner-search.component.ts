import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {UntypedFormBuilder, UntypedFormGroup} from "@angular/forms";
import {Hotel} from "../../../hotels/models/hotel";
import {HotelService} from "../../../hotels/services/hotel.service";
import {CityService} from "../../../cities/services/city.service";
import {HttpErrorResponse} from "@angular/common/http";
import {ClientService} from "../../../../clients/services/client.service";
import {ClientStatusService} from "../../../../clients/services/clientStatus.service";

@Component({
  selector: 'app-hotel-owner-search',
  templateUrl: './hotel-owner-search.component.html',
  styleUrls: ['./hotel-owner-search.component.scss']
})
export class HotelOwnerSearchComponent implements OnInit {
  @Output() loadingState: EventEmitter<any> = new EventEmitter();
  loading: boolean = true

  public isCollapsed1 = false;

  clientForm!: UntypedFormGroup;

  clientList: any[] = [];
  clientStatusList: any[] = [];

  constructor(
    private formBuilder: UntypedFormBuilder,
    private clientService: ClientService,
    private clientStatusService: ClientStatusService
  ) {
    clientService.reload.subscribe(ev => {
      this.reset()
    })
  }


  initForm() {
    this.clientForm = this.formBuilder.group({
      clientId: [],
      email: [],
      statusId: [],
      phoneNumber: [],
    });
  }

  public getClients(clientId?: number, email?: string, phoneNumber?: string, statusId?: number): void {
    this.loading = true
    const submitButton = (document.getElementById('find-client-form') as HTMLInputElement);
    submitButton.disabled = true
    this.clientService.changeLoadingState(true)
    this.isCollapsed1 = false
    this.clientService.findClients(clientId, email, phoneNumber, statusId).subscribe(
      (response: any[]) => {
        this.clientList = response;
      },
      (error: HttpErrorResponse) => {
        this.loading = false;
        submitButton.disabled = false
        this.clientService.changeLoadingState(false)
      },
      () => {
        submitButton.disabled = false
        this.loading = false
        this.clientService.changeLoadingState(false)

      }
    );
  }

  getClientStatusList() {
    //this.loadingState.emit(true)
    this.clientStatusService.changeLoadingState(true)
    this.clientStatusService.findClientStatuses().subscribe(
      (response: any[]) => {
        this.clientStatusList = response;
        //this.loadingState.emit(false)
        this.clientStatusService.changeLoadingState(false)
      }
    );

  }


  reset(): void {
    this.clientForm.reset()
    this.getClients()
  }

  search(): void {
    this.getClients(
      this?.clientForm.value?.clientId,
      this?.clientForm.value?.email,
      this?.clientForm.value?.phoneNumber,
      this?.clientForm.value?.statusId
    )
  }

  ngOnInit(): void {
    this.initForm()
    this.getClients()
    this.getClientStatusList()
  }
}
