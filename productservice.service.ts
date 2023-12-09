import { Injectable } from '@angular/core';
import { ProductData } from './product-data';



@Injectable({
  providedIn: 'root'
})
export class ProductserviceService {

  productdetailsarraylist: ProductData[] = [

    {

      id: 10,
      name: "Tshirt",
      price: 100,
      pdetails: "sale"

    },

    {

      id: 11,
      name: "Tshirt",
      price: 100,
      pdetails: "sale"

    },

    {

      id: 12,
      name: "Tshirt",
      price: 100,
      pdetails: "sale"

    },

  ]

  //Serves Main Mathod
// C R U D 
//creat or Add
//search or retrive getall
//get all by id 
//delete
//edit


 constructor() { }

 getallproduct (): ProductData[] {
  return this.productdetailsarraylist;
 }


 
getallproductbyid(id:number): ProductData |undefined {
  return this.productdetailsarraylist.find (productdetail => productdetail.id === id );
}


}