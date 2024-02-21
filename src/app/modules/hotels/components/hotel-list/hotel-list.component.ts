import {ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output, TemplateRef} from '@angular/core';
import {ImageService} from "../../../../images/services/image.service";
import {DataService} from "../../../../shared/services/data.service";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {ToastrService} from "ngx-toastr";
import {Router} from "@angular/router";
import {HttpErrorResponse} from "@angular/common/http";
import {HotelService} from "../../services/hotel.service";
import {Hotel} from "../../models/hotel";
import {HotelAddEditComponent} from "../hotel-add-edit/hotel-add-edit.component";

@Component({
  selector: 'app-hotel-list',
  templateUrl: './hotel-list.component.html',
  styleUrls: ['./hotel-list.component.scss']
})
export class HotelListComponent implements OnInit {
  @Input() hotelList: Hotel[] = []
  @Output() getHotels: EventEmitter<any> = new EventEmitter();
  tableLimit: number = 10
  deletedHotel: any;
  rowsPerPage: number = 10;

  // @ts-ignore
  constructor(
    private hotelService: HotelService,
    private imageService: ImageService,
    private dataService: DataService,
    private modalService: NgbModal,
    private toastr: ToastrService,
    private router: Router,
    private changeDetectorRef: ChangeDetectorRef) {
  }

  OncloseModal() {
    this.modalService.dismissAll();
  }

  navigateToDetailsPage(row: any) {
    this.hotelService.editFormList(row);
    // this.router.navigate(['/hotels/details', row.id]);
    this.router.navigate([`/hotels/${row.id}/details`]);
  }

  onEdit(row) {
    const dialogRef = this.modalService.open(HotelAddEditComponent, {
      size: "xl",
      backdrop: 'static',
      keyboard: false,
    });
    const data = {
      operation: "edit",
      product: row,
      item: {}
    }
    dialogRef.componentInstance.data = data;
    dialogRef.componentInstance.onAddEdit.subscribe((event: any) => {
      this.OncloseModal()
      this.getHotels.emit()

    });
  }


  onOpenModal(target: TemplateRef<any>, hotel: any, mode: string): void {
    if (mode === 'delete') {
      this.deletedHotel = hotel;
    }
    this.modalService.open(target, {
      centered: true,
      backdrop: 'static'
    });
  }

  submitButton: any
  sppinerDeleteDisplaying: boolean = false

  deleteProductImages(hotelId: number): void {
    this.imageService.deleteImageByProductId(hotelId).subscribe(
      (response: void) => {
      },
      (error: HttpErrorResponse) => {
      },
      () => {
      }
    );

  }

  deleteProductFunction(hotelId: number): void {

    this.submitButton = (document.getElementById('submitDelete') as HTMLInputElement);
    this.submitButton.disabled = true
    this.sppinerDeleteDisplaying = true
    this.hotelService.deleteHotel(hotelId).subscribe(
      (response: void) => {
      },
      (error: HttpErrorResponse) => {
        this.sppinerDeleteDisplaying = false
        this.submitButton.disabled = false
        this.OncloseModal();
      },
      () => {
        this.sppinerDeleteDisplaying = false
        this.submitButton.disabled = false
        this.getHotels.emit();
        this.OncloseModal();
        this.toastr.success('The hotel has been successfully deleted', 'Success!');
      }
    );

  }

  loading: boolean = false

  ngOnInit(): void {

    this.tableLimit = this.dataService.tableLimit
  }

  navigateToEditPage(row: Hotel) {
    this.hotelService.editFormList(row)
    this.router.navigate(['/hotels/edit', row?.id]);
  }

  showProductImages(productImagePath: string, id: number) {
  //   // Extract the part you want by splitting the string and taking the first two segments
  //   const parts = productImagePath.split('/');
  //   const folderName = parts.slice(0, 2).join('_');
  //   const dialogRef = this.modalService.open(ProductImagesComponent, {
  //     size: "xl",
  //     backdrop: 'static',
  //     keyboard: false,
  //   });
  //   const data = {
  //     operation: "view",
  //     productFolderImages: folderName,
  //     productId: id,
  //     item: {}
  //   }
  //   dialogRef.componentInstance.data = data;
  // }
}
}

