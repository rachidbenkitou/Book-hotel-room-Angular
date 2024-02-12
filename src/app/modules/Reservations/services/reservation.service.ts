import {EventEmitter, Injectable, Output} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {environment} from "../../../../environments/environment";
import {BehaviorSubject, Observable} from "rxjs";
import {Hotel} from "../../hotels/models/hotel";

@Injectable({
  providedIn: 'root'
})
export class ReservationService {
  @Output() reload = new EventEmitter<any>();

  hotelUrl: string = `${environment.appUrl}reservations`

  constructor(private http: HttpClient) {
  }

  public findRooms(id?: number, name?: string, status?: string, cityId?: number): Observable<Hotel[]> {
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

  public countReservationsByHotelId(hotelId?: number): Observable<number> {
    return this.http.get<number>(`${this.hotelUrl}/countReservations/${hotelId}`);
  }

  public sumReservationsPriceByHotelId(hotelId?: number): Observable<number> {
    return this.http.get<number>(`${this.hotelUrl}/sumReservationsPrice/${hotelId}`);
  }

  public sumReservationsPriceForEveryYearByHotelId(hotelId?: number): Observable<any> {
    return this.http.get<any>(`${this.hotelUrl}/sumReservationsPriceForEveryYear/${hotelId}`);
  }
  public findHotelById(id: number): Observable<Hotel> {
    return this.http.get<Hotel>(`${this.hotelUrl}/countRoomsByHotelId/${id}`);
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
