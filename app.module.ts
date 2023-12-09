import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstsiblingComponent } from './firstsibling/firstsibling.component';
import { SecondsiblingComponent } from './secondsibling/secondsibling.component';

import { YouTubePlayerModule } from '@angular/youtube-player';
import { ProductsComponent } from './products/products.component';


@NgModule({
  declarations: [
    AppComponent,
    FirstsiblingComponent,
    SecondsiblingComponent,
    ProductsComponent
    
  
  ],
  
/*******  imports  ******/
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    YouTubePlayerModule
   
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
