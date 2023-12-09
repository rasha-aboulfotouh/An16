import { Component, Input, Output, EventEmitter, } from '@angular/core';
import { ProductData } from '../product-data';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

  @Input() pordtdetailchild! : ProductData[] ;


  @Output() varoutput = new EventEmitter<ProductData>();


  add(par:string){     //string

    this.pordtdetailchild.push({
      id: this.pordtdetailchild.length +1 , name :par ,price : 100 , pdetails:"text"

    });
  }


  getdataeventfromuser(par:any) {
    this.varoutput.emit(par);
    console.log(this.varoutput);
  }
 



}
