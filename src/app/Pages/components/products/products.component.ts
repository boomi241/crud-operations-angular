import { Component, OnInit } from '@angular/core';
import { filter } from 'rxjs';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  formatINR(value: number): string {
    return '₹' + value.toLocaleString('en-In');
  }
  viewProduct: boolean = false;
  singleProduct: any;

  products: any[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.products = this.productService.getProduct();
  }

  // get filteredProducts() {
  //   return this.products.filter(
  //     (prod) =>
  //       prod.price > 0 &&
  //       prod.price <= 20000 &&
  //       prod.stock > 0 &&
  //       prod.stock <= 20
  //   );
  // }
  searchproduct(search: HTMLInputElement) {
    console.log(search.value);
    this.products = this.products.filter(
      (prd) => prd.productName.toLowerCase() === search.value.toLowerCase()
    );
    console.log(this.products);
  }
  deleteProduct(productId: number) {
    this.products = this.products.filter((prd) => prd.id !== productId);
    console.log(this.products);
  }
  openViewProduct(product: any) {
    console.log(product);
    this.singleProduct = product;
    this.viewProduct = true;
  }

  onCloseButton(updatedProduct: any) {
    this.viewProduct = false;

    this.productService.updateProduct(updatedProduct);
    this.products = this.productService.getProduct();
  }
}
