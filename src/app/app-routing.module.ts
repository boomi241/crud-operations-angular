import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './Pages/components/products/products.component';
import { HomeComponent } from './Pages/components/home/home.component';
import { VendorComponent } from './Pages/components/vendor/vendor.component';
import { ContactComponent } from './Pages/components/contact/contact.component';
import { ViewProductComponent } from './Pages/components/view-product/view-product.component';
import { LoginComponent } from './Pages/components/login/login.component';
import { LayoutComponent } from './layout/components/layout/layout.component';
import { AddProductComponent } from './Pages/components/add-product/add-product.component';
import { AddVendorComponent } from './Pages/components/add-vendor/add-vendor.component';
import { MarketingCallsFormComponent } from './Pages/components/marketing-calls-form/marketing-calls-form.component';
import { MarketingcallsListComponent } from './Pages/components/marketingcalls-list/marketingcalls-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'products', component: ProductsComponent },
      { path: 'vendor', component: VendorComponent },
      { path: 'contact', component: ContactComponent },
      { path: 'products/new', component: AddProductComponent },
      { path: 'vendor/new', component: AddVendorComponent },
      { path: 'marketing/new', component: MarketingCallsFormComponent },
      { path: 'customer', component: MarketingcallsListComponent },
    ],
  },

  // { path: 'products/view', component: ViewProductComponent },
  { path: '**', component: HomeComponent },
];

// path: '', homecomponent
//path: 'home, homecompoent
// path: 'vendor', vendorcomponent
// path: 'conatct', contactcomponent
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
