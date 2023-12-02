import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Rasha16';

  topic = " Data Binding"

  image= "/assets/Rasha.jpg"


  onClick(){

    console.log("Thanks for subscribing")

  }



  name = " "


  callPhone(parm:any){
    this.title =" buttton clicked"

    console.log(parm);
  }


  getdata(parm:any){
    this.title ="button clicked"
    console.log(parm);
  }
  
}
