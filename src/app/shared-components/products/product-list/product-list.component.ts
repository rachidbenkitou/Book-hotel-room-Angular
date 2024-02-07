import {ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output, TemplateRef} from '@angular/core';
import {DataService} from "../../../shared/services/data.service";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {ToastrService} from "ngx-toastr";
import {Router} from "@angular/router";
import {ProductAddEditComponent} from "../../../products/components/product-add-edit/product-add-edit.component";
import {ProductService} from "../../../products/services/product.service";
import {HttpErrorResponse} from "@angular/common/http";
import {Product} from "../../../products/models/product";
import {ImageService} from "../../../images/services/image.service";
import {ProductImagesComponent} from "../../../products/components/product-images/product-images.component";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  @Input() productList: any[] = []
  @Output() getProducts: EventEmitter<any> = new EventEmitter();
  tableLimit: number = 10
  deletedProduct: any;
  products: any[]= [
    { id: 1, name: 'Product 1', price: 10 },
    { id: 2, name: 'Product 2', price: 20 },
    { id: 3, name: 'Product 3', price: 30 },
    { id: 4, name: 'Product 4', price: 40 },
    { id: 5, name: 'Product 5', price: 50 },
    { id: 6, name: 'Product 6', price: 60 },
    { id: 7, name: 'Product 7', price: 70 },
    { id: 8, name: 'Product 8', price: 80 },
    { id: 9, name: 'Product 9', price: 90 },
    { id: 10, name: 'Product 10', price: 100 }
  ];

  // @ts-ignore
  constructor(
    private productService: ProductService,
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

  onDisplay(row: any) {
    this.router.navigate(['/products', row.id]);
  }

  onEdit(row) {
    const dialogRef = this.modalService.open(ProductAddEditComponent, {
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
      this.getProducts.emit()

    });
  }


  onOpenModal(target: TemplateRef<any>, product: any, mode: string): void {
    if (mode === 'delete') {
      this.deletedProduct = product;
    }
    this.modalService.open(target, {
      centered: true,
      backdrop: 'static'
    });
  }

  submitButton: any
  sppinerDeleteDisplaying: boolean = false

  deleteProductImages(productId: number): void {
    this.imageService.deleteImageByProductId(productId).subscribe(
      (response: void) => {
      },
      (error: HttpErrorResponse) => {
      },
      () => {
      }
    );

  }
  deleteProductFunction(productId: number): void {

    this.submitButton = (document.getElementById('submitDelete') as HTMLInputElement);
    this.submitButton.disabled = true
    this.sppinerDeleteDisplaying = true
    this.productService.deleteProduct(productId).subscribe(
      (response: void) => {
        this.deleteProductImages(productId)
      },
      (error: HttpErrorResponse) => {
        this.sppinerDeleteDisplaying = false
        this.submitButton.disabled = false
        this.OncloseModal();
      },
      () => {
        this.sppinerDeleteDisplaying = false
        this.submitButton.disabled = false
        this.getProducts.emit();
        this.OncloseModal();
        this.toastr.success('Supprimé avec succès', 'Succès!');
      }
    );

  }

  loading: boolean = false

  ngOnInit(): void {

    this.tableLimit = this.dataService.tableLimit
  }

  navigateToEditPage(row: Product) {
    this.productService.editFormList(row)
    this.router.navigate(['/products/edit', row?.id]);
  }

  showProductImages(productImagePath: string, id: number) {
    // Extract the part you want by splitting the string and taking the first two segments
    const parts = productImagePath.split('/');
    const folderName = parts.slice(0, 2).join('_');
    const dialogRef = this.modalService.open(ProductImagesComponent, {
      size: "xl",
      backdrop: 'static',
      keyboard: false,
    });
    const data = {
      operation: "view",
      productFolderImages: folderName,
      productId: id,
      item: {}
    }
    dialogRef.componentInstance.data = data;
  }
}
