import {EventEmitter, Injectable, Output} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {environment} from "../../../../environments/environment";
import {BehaviorSubject, Observable} from "rxjs";
import {Hotel} from "../models/hotel";

@Injectable({
  providedIn: 'root'
})
export class HotelService {
  @Output() reload = new EventEmitter<any>();

  hotelUrl: string = `${environment.appUrl}hotels`

  constructor(private http: HttpClient) {
  }

  public findHotels(id?: number, name?: string, status?: string, cityId?: number): Observable<Hotel[]> {
    let params: any = new HttpParams();
    if (id != null) {
      params = params.set("id", id);
    }
    if (name != null && name !== "") {
      params = params.set("name", name);
    }
    if (status != null && status !== "") {
      params = params.set("status", status);
    }
    if (cityId != null) {
      params = params.set("cityId", cityId);
    }

    return this.http.get<Hotel[]>(`${this.hotelUrl}`, {params});
  }

  public findHotelById(id: number): Observable<Hotel> {
    return this.http.get<Hotel>(`${this.hotelUrl}/${id}`);
  }

  public addHotel(hotelDto: Hotel, images?: File[]): Observable<Hotel> {
    const formData = new FormData();

    // Append hotelDto as JSON string
    formData.append('hotelDto', JSON.stringify(hotelDto));

    // Append each image file
    if (images) {
      for (const image of images) {
        formData.append('images', image);
      }
    }

    return this.http.post<Hotel>(`${this.hotelUrl}`, formData);
  }


  public updateHotel(id: number, hotel: Hotel): Observable<Hotel> {
    return this.http.put<Hotel>(`${this.hotelUrl}/${id}`, hotel);
  }

  public deleteHotel(id: number): Observable<void> {
    return this.http.delete<void>(`${this.hotelUrl}/${id}`);
  }

  public hotel = new BehaviorSubject(false)

  editFormList(hotel: any) {
    this.hotel.next(hotel)
  }

  //loading in router outlet
  public loading = new BehaviorSubject(false);
  loading$ = this.loading.asObservable();

  changeLoadingState(loading: boolean) {
    this.loading.next(loading)
  }

  private hotelId: number;

  setHotelId(id: number) {
    this.hotelId = id;
  }

  getHotelId(): number {
    return this.hotelId;
  }
}
