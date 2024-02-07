import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {UntypedFormBuilder, UntypedFormGroup, Validators} from "@angular/forms";
import {ImageService} from "../../../../images/services/image.service";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {DataService} from "../../../../shared/services/data.service";
import {ToastrService} from "ngx-toastr";
import {HttpErrorResponse} from "@angular/common/http";
import {ProductService} from "../../../../products/services/product.service";
import {ActivatedRoute, Router} from "@angular/router";
import {CityService} from "../../../cities/services/city.service";
import {City} from "../../../cities/models/city";
import {HotelService} from "../../services/hotel.service";
import {Hotel} from "../../models/hotel";

@Component({
  selector: 'app-hotel-add-edit',
  templateUrl: './hotel-add-edit.component.html',
  styleUrls: ['./hotel-add-edit.component.scss'],
})
export class HotelAddEditComponent implements OnInit {

  @Input() data: any = {};
  @Input() hotel: any
  selectedImages: any;
  // tslint:disable-next-line:no-output-on-prefix
  @Output() onAddEdit: EventEmitter<any> = new EventEmitter();
  hotelForm!: UntypedFormGroup;
  updateState: boolean = false
  loadingCity: boolean = false
  sppinerDeleteDisplaying: boolean = false
  cities: City[] = [];
  titre: any
  buttonName: string = 'Enregistrer'
  productId: number;
  editFormList: boolean = false;

  constructor(private formBuilder: UntypedFormBuilder,
              private productService: ProductService,
              private imageService: ImageService,
              private modalService: NgbModal,
              private dataService: DataService,
              private toastr: ToastrService,
              private activatedRouter: ActivatedRoute,
              private router: Router,
              private cityService: CityService,
              private hotelService: HotelService) {
    if (activatedRouter.snapshot.data.addAction) {
      this.data.operation = "add"
    }
  }

  initForm() {
    this.hotelForm = this.formBuilder.group({
      id: [],
      name: ["Test", Validators.required],
      cityId: [1, Validators.required],
      defaultPhoneNumber: ["0655407529", Validators.required],
      defaultEmail: ["rachid@gmail.com", Validators.required],
      address: ["Casa", Validators.required],
      description: ["Great"],
      status: ["active", Validators.required],
      //images: this.formBuilder.array([this.formBuilder.control('')], Validators.required),
    });
  }


  OncloseModal(from?: string) {
    this.router.navigate(['hotels/search'])
  }

  OncloseModal1(from?: string) {
    this.modalService.dismissAll();
  }

  submitButton: any

  addEditProduct() {
    this.sppinerDeleteDisplaying = true
    this.submitButton = (document.getElementById('submitHotel') as HTMLInputElement);
    this.submitButton.disabled = true
    if (this.data.operation === "add") {
      this.addHotel()
    } else {
      this.editHotel()
    }
  }


  addHotel() {


    this.sppinerDeleteDisplaying = true
    this.submitButton.disabled = true

    if (this.selectedImages && this.selectedImages.length > 0) {
      this.hotelService.addHotel(this.hotelForm.value, this.selectedImages).subscribe(
        (response: Hotel) => {
        },
        (error: HttpErrorResponse) => {
          this.submitButton.disabled = false
          this.sppinerDeleteDisplaying = false
        },
        () => {
          if (this.isSizeRespected) {
            this.toastr.success('Added successfully', 'Success!');
          }
          this.router.navigate(['hotels/search'])
        }
      );
    } else {
      alert("Images are necessary!")
      this.submitButton.disabled = false;
      this.sppinerDeleteDisplaying = false;
    }
  }

  deleteHotelImages(): void {
    this.imageService.deleteImageByProductId(this.hotelForm.value?.id).subscribe(
      (response: void) => {
        this.uploadFiles(this.hotelForm.value?.id)
      },
      (error: HttpErrorResponse) => {
      },
      () => {
      }
    );

  }

  deleteAndUploadImagesIfSelected(): void {
    if (this.selectedImages !== null && this.selectedImages !== undefined) {
      this.deleteHotelImages()
    }
  }

  editHotel() {
    this.sppinerDeleteDisplaying = true
    this.submitButton.disabled = true
    this.deleteAndUploadImagesIfSelected()
    this.hotelService.updateHotel(this.hotelForm.value?.id, this.hotelForm.value).subscribe(
      (response: any) => {
      },
      (error: HttpErrorResponse) => {
        this.submitButton.disabled = false
        this.sppinerDeleteDisplaying = false
      },
      () => {
        // if (this.isSizeRespected) {
        //   this.toastr.success('Edited successfully', 'Success!');
        // }
        // if (!this.selectedImages) {
        //   this.sppinerDeleteDisplaying = false
        //   this.router.navigate(['products/search'])
        // }
        this.router.navigate(['hotels/search'])
      }
    );
  }

  addForm() {
  }

  editForm() {
    this.updateState = true
    this.hotelForm.controls.id.setValue(this.hotel?.id);
    this.hotelForm.controls.status.setValue(this.hotel?.status);
    this.hotelForm.controls.address.setValue(this.hotel?.address);
    this.hotelForm.controls.cityId.setValue(this.hotel?.cityId);
    this.hotelForm.controls.defaultEmail.setValue(this.hotel?.defaultEmail);
    this.hotelForm.controls.defaultPhoneNumber.setValue(this.hotel?.defaultPhoneNumber);
    this.hotelForm.controls.defaultImage.setValue(this.hotel?.defaultImage);
    this.hotelForm.controls.description.setValue(this.hotel?.description);
  }

  getCities(): void {
    this.loadingCity = true
    this.cityService.findCities().subscribe(
      (response: City[]) => {
        this.cities = response
        this.loadingCity = false
      },
      (error: HttpErrorResponse) => {
        this.loadingCity = false;
      }, () => {
        this.loadingCity = false;
      }
    );
  }

  isSizeRespected: boolean = false;

  getSelectedImages(event: any) {
    this.selectedImages = event.selectedImages.target.files;
    this.isSizeRespected = event.isSizeRespected
    console.log(this.selectedImages)
  }

  uploadFiles(productId: number): void {
    if (this.selectedImages.length !== 0) {
      this.imageService.uploadProductImages(productId, this.selectedImages).subscribe(
        (response) => {
          console.log('Images uploaded successfully:', response);
        },
        (error) => {
          console.error('Error uploading images:', error);
        },
        () => {
          this.sppinerDeleteDisplaying = false
          this.router.navigate(['products/search'])

        }
      );
    }
  }

  ngOnInit(): void {
    this.initForm()
    this.getCities()
    if (this.data.operation === 'add') {
      this.addForm()
    } else {
      if (this.hotelService.hotel.getValue()) {
        this.hotel = this.hotelService.hotel.getValue()
        this.editFormList = true
      }
      this.editForm()
    }

  }
}
