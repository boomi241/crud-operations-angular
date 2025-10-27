import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProductsComponent } from './Pages/components/products/products.component';
import { HomeComponent } from './Pages/components/home/home.component';
import { VendorComponent } from './Pages/components/vendor/vendor.component';
import { ContactComponent } from './Pages/components/contact/contact.component';
import { ViewProductComponent } from './Pages/components/view-product/view-product.component';
import { LoginComponent } from './Pages/components/login/login.component';
import { LayoutComponent } from './layout/components/layout/layout.component';
import { AddProductComponent } from './Pages/components/add-product/add-product.component';
import { RouterModule } from '@angular/router';
import { AddVendorComponent } from './Pages/components/add-vendor/add-vendor.component';
import { ViewVendorComponent } from './Pages/view-vendor/view-vendor.component';
import { MarketingCallsFormComponent } from './Pages/components/marketing-calls-form/marketing-calls-form.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProductsComponent,
    HomeComponent,
    VendorComponent,
    ContactComponent,
    ViewProductComponent,
    LoginComponent,
    LayoutComponent,
    AddProductComponent,
    AddVendorComponent,
    ViewVendorComponent,
    MarketingCallsFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
