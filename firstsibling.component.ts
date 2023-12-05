import { Component ,Output , EventEmitter } from '@angular/core';
import { Employee } from '../Employee';
import { createApplication } from '@angular/platform-browser';

@Component({
  selector: 'app-firstsibling',
  templateUrl: './firstsibling.component.html',
  styleUrls: ['./firstsibling.component.css']
})
export class FirstsiblingComponent {

  @Output() empltrans : EventEmitter<Employee> = new EventEmitter<Employee>();

  employees: Employee[] =[
  


    
  ]

  addempyee(par:any){
    this.employees.push ({id:1, name:par,city:"test"})
  }


  emplytransfer(pat:Employee){

    this.empltrans.emit(pat)
}

}
