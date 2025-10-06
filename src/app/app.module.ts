import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProductsComponent } from './Pages/components/products/products.component';
import { HomeComponent } from './Pages/components/home/home.component';
import { VendorComponent } from './Pages/components/vendor/vendor.component';
import { ContactComponent } from './Pages/components/contact/contact.component';
import { ViewProductComponent } from './Pages/components/view-product/view-product.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProductsComponent,
    HomeComponent,
    VendorComponent,
    ContactComponent,
    ViewProductComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
