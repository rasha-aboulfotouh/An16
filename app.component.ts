import { Component, Inject, inject } from '@angular/core';
import { Employee } from './Employee';
import { ProductsComponent } from './products/products.component';
import { ProductData } from './product-data';

import { ProductserviceService } from './productservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'Rasha16';

  /*****  products *******/

  constructor() {

    this.productdetailsarraylist = this.protectservice.getallproduct();
  }



  productdetailsarraylist: ProductData[] = [

  ]

  protectservice: ProductserviceService= inject(ProductserviceService);




  ///
  productdetailsParent: ProductData = {

    id: 1,
    name: "Tshirt",
    price: 100,
    pdetails: "sale"

  }


  adding(newItem: any) {
    this.productdetailsParent.name = newItem;

  }




  /***** End products *******/


  topic = " Data Binding"

  image = "/assets/Rasha.jpg"


  onClick() {

    console.log("Thanks for subscribing")

  }



  name = " "


  callPhone(parm: any) {
    this.title = " buttton clicked"

    console.log(parm);
  }


  getdata(parm: any) {
    this.title = "button clicked"
    console.log(parm);
  }



  /*  Employees */

  empyeeparent!: Employee;

  recivedata(par: Employee) {

    this.empyeeparent = par;
    console.log("parentdata" + par.name);

  }
  /* End Employees */











}
