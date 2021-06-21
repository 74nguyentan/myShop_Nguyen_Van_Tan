import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './Components/nav/nav.component';
import { FooterComponent } from './Components/footer/footer.component';
import { ListProductComponent } from './Components/list-product/list-product.component';
import { DetailProductComponent } from './Components/detail-product/detail-product.component';
import { CartComponent } from './Components/cart/cart.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    ListProductComponent,
    DetailProductComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
