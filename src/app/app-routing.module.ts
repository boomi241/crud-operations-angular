import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './Pages/components/products/products.component';
import { HomeComponent } from './Pages/components/home/home.component';
import { VendorComponent } from './Pages/components/vendor/vendor.component';
import { ContactComponent } from './Pages/components/contact/contact.component';
import { ViewProductComponent } from './Pages/components/view-product/view-product.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'vendor', component: VendorComponent },
  { path: 'contact', component: ContactComponent },
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
