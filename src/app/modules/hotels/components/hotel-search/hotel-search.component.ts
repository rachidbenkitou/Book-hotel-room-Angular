import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {UntypedFormBuilder, UntypedFormGroup} from "@angular/forms";
import {Product} from "../../../../products/models/product";
import {Category} from "../../../../categories/models/category";
import {ProductService} from "../../../../products/services/product.service";
import {CategoryService} from "../../../../categories/services/category.service";
import {HttpErrorResponse} from "@angular/common/http";
import {Hotel} from "../../models/hotel";
import {HotelService} from "../../services/hotel.service";
@Component({
  selector: 'app-hotel-search',
  templateUrl: './hotel-search.component.html',
  styleUrls: ['./hotel-search.component.scss']
})
export class HotelSearchComponent implements OnInit {

  @Output() loadingState: EventEmitter<any> = new EventEmitter();
  loading: boolean = true

  public isCollapsed1 = false;

  hotelForm!: UntypedFormGroup;

  hotelList: Hotel[] = [];

  categoryList: Category[] = [];

  visibilityList: any[] = [
    {id: 1, name: "visible"},
    {id: 2, name: "invisible"},
  ]

  constructor(
    private formBuilder: UntypedFormBuilder,
    private hotelService: HotelService,
    private categoryService: CategoryService
  ) {
    hotelService.reload.subscribe(ev => {
      this.reset()
    })
  }


  initForm() {
    this.hotelForm = this.formBuilder.group({
      id: [],
      name: [],
      categoryId: [],
      visibility: [],
    });
  }

  public getHotels(id?: number, name?: string, categoryId?: number, visibility?: string): void {
    this.loading = true
    const submitButton = (document.getElementById('find-hotel-form') as HTMLInputElement);
    submitButton.disabled = true
    this.hotelService.changeLoadingState(true)
    this.isCollapsed1 = false
    this.hotelService.findHotels().subscribe(
      (response: any[]) => {
        this.hotelList = response;
        console.log(this.hotelList)
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

  getCategoryList() {
    // //this.loadingState.emit(true)
    // this.productService.changeLoadingState(true)
    // this.categoryService.findCategories().subscribe(
    //   (response: any[]) => {
    //     this.categoryList = response;
    //     //this.loadingState.emit(false)
    //     this.productService.changeLoadingState(false)
    //   }
    // );
  }

  reset(): void {
    this.hotelForm.reset()
    this.getHotels()
  }

  search(): void {
    // this.getProducts(
    //   this?.productForm.value?.id,
    //   this?.productForm.value?.name,
    //   this?.productForm.value?.categoryId,
    //   this?.productForm.value?.visibility)
  }

  ngOnInit(): void {
    this.initForm()
    this.getHotels()
    // this.getCategoryList()
  }
}
