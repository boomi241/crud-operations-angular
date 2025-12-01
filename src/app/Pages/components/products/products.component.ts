import { Component, inject, OnInit } from '@angular/core';
import { filter } from 'rxjs';
import { ApiService } from 'src/app/service/api.service';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  private apiService = inject(ApiService);
  viewProduct: boolean = false;
  productId: number = 0;

  products: any[] = [];

  isToast = false;
  toastMessage = '';

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.fetchProductList();
  }
  fetchProductList() {
    try {
      this.apiService.fetchProductList().subscribe({
        next: (val: any) => {
          console.log(val);
          this.products = val.data;
        },
        error: (err) => {
          console.log(err);
        },
      });
    } catch (error) {
      console.log(error);
    }
  }

  searchproduct(search: HTMLInputElement) {
    console.log(search.value);
    this.products = this.products.filter(
      (prd) => prd.productName.toLowerCase() === search.value.toLowerCase()
    );
    console.log(this.products);
  }
  deleteProduct(id: number) {
    try {
      this.apiService.deleteProduct(id).subscribe({
        next: (response: any) => {
          console.log(response);
          this.isToast = true;
          this.toastMessage = 'Customer details deleted sucessfully';
          setTimeout(() => {
            this.isToast = false;
          }, 2000);
          this.fetchProductList();
        },
        error: (err) => {
          console.log(err);
        },
        complete: () =>
          console.log('Observable emitted the complete notfication'),
      });
    } catch (error) {
      console.log(error);
    }
  }
  openViewProduct(productId: number) {
    console.log(productId);
    this.productId = productId;
    this.viewProduct = true;
  }

  onCloseButton(updatedProduct: any) {
    this.viewProduct = false;

    // this.productService.updateProduct(updatedProduct);
    // this.products = this.productService.getProduct();
    this.fetchProductList();
  }
}
