import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormArray, UntypedFormBuilder, UntypedFormGroup, Validators} from "@angular/forms";
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
  @Input() product: any
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
      name: [, Validators.required],
      cityId: [, Validators.required],
      phoneNumbers: this.formBuilder.array([this.formBuilder.control('')], Validators.required),
      emails: this.formBuilder.array([this.formBuilder.control('')], Validators.required),
      address: [, Validators.required],
      description: [],
      status: ["active", Validators.required],
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
    console.log(this.hotelForm.value)
    const formData = new FormData();
    formData.append("hotel", this.hotelForm.value)
    for (const file of this.selectedImages){
      formData.append("images", file );
    }
    // this.hotelService.addHotel(this.hotelForm.value).subscribe(
    //   (response: Hotel) => {
    //
    //     // if (this.selectedImages !== null && this.selectedImages !== undefined) {
    //     //   this.uploadFiles(response?.id)
    //     // }
    //     // if (!this.isSizeRespected) {
    //     //   this.toastr.info('Images are not added because they are out of size, click Edit and choose the correct size images.', 'Info!');
    //     // }
    //
    //   },
    //   (error: HttpErrorResponse) => {
    //     this.submitButton.disabled = false
    //     this.sppinerDeleteDisplaying = false
    //   },
    //   () => {
    //     if (this.isSizeRespected) {
    //       this.toastr.success('Added successfully', 'Success!');
    //     }
    //
    //     // if (!this.selectedImages) {
    //     //   this.sppinerDeleteDisplaying = false
    //     //   this.router.navigate(['hotels/search'])
    //     // }
    //     this.router.navigate(['hotels/search'])
    //   }
    // );


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
    // this.productForm.controls.id.setValue(this.product?.id);
    // this.productForm.controls.name.setValue(this.product?.name);
    // this.productForm.controls.categoryId.setValue(this.product?.categoryId);
    // this.productForm.controls.quantity.setValue(this.product?.quantity);
    // this.productForm.controls.price.setValue(this.product?.price);
    // this.productForm.controls.comparePrice.setValue(this.product?.comparePrice);
    // this.productForm.controls.visibility.setValue(this.product?.visibility);
    // this.productForm.controls.description.setValue(this.product?.description);
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


    // Clear existing controls in the images FormArray
    const imagesFormArray = this.hotelForm.get('images') as FormArray;
    imagesFormArray.clear();

    // Add new controls for the selected images directly to this.hotelForm.get('images')
    for (const file of this.selectedImages) {
      imagesFormArray.push(this.formBuilder.control(file));
    }
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
      if (this.productService.product.getValue()) {
        this.product = this.productService.product.getValue()
        this.editFormList = true
      }
      this.editForm()
    }

  }
}
