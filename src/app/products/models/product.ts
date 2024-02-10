// export class Product {
//   id!: number;
//
//   name!: string;
//
//   description!: string;
//
//   price!: number;
//
//   comparePrice!: number;
//
//   visibility!: string;
//
//   quantity!: number;
//
//   categoryId!: number;
//
//   categoryName!: string;
//
//   dateCreated!: Date;
//
//   dateUpdated!: Date;
// }
//

export interface Product {
  id?:string;
  code?:string;
  name?:string;
  description?:string;
  price?:number;
  quantity?:number;
  inventoryStatus?:string;
  category?:string;
  image?:string;
  rating?:number;
}

