import { Component } from '@angular/core';
import { filter } from 'rxjs';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent {
  formatINR(value: number): string {
    return '₹' + value.toLocaleString('en-In');
  }
  viewProduct: boolean = false;
  singleProduct: any;
  products = [
    {
      id: 1,
      name: 'Laptop',
      category: 'Electronics',
      price: 40000,
      stock: 12,
      productcode: 'LAP-A-001',
      rating: 4.5,
      supplier: 'ClouteTech',
    },
    {
      id: 2,
      name: 'Phone',
      category: 'Electronics',
      price: 80000,
      stock: 10,
      productcode: 'LAP-B-002',
      rating: 4.8,
      supplier: 'Mobix',
    },
    {
      id: 3,
      name: 'Wireless Mouse',
      category: 'Accessories',
      price: 1000,
      stock: 20,
      productcode: 'MSE-003',
      rating: 4.0,
      supplier: 'PeriParts',
    },
    {
      id: 4,
      name: 'Mechanical Keybord',
      category: 'Accessories',
      price: 3599,
      stock: 12,
      productcode: 'KEY-004',
      rating: 4.6,
      supplier: 'KeyWorks',
    },
    {
      id: 5,
      name: 'Monitor 24',
      category: 'Electronics',
      price: 11999,
      stock: 22,
      productcode: 'MON-024-005',
      rating: 4.3,
      supplier: 'DisplayCo',
    },
    {
      id: 6,
      name: 'External HDD 1TB',
      category: 'Storage',
      price: 3999,
      stock: 80,
      productcode: 'HDD-1TB-006',
      rating: 3.9,
      supplier: 'StoreMax',
    },
    {
      id: 7,
      name: 'USB-C Hub',
      category: 'Accessories',
      price: 1500,
      stock: 46,
      productcode: 'HUB-007',
      rating: 4.1,
      supplier: 'LinkPro',
    },
    {
      id: 8,
      name: 'Webcam HD',
      category: 'Peripheralse',
      price: 18999,
      stock: 27,
      productcode: 'CAM-HD-008',
      rating: 4.0,
      supplier: 'VisionTech',
    },
    {
      id: 9,
      name: 'Bluetooth Speaker',
      category: 'Audio',
      price: 2500,
      stock: 42,
      productcode: 'SPK-009',
      rating: 4.6,
      supplier: 'SoundLab',
    },
    {
      id: 10,
      name: 'Power Bank 20k',
      category: 'Accessories',
      price: 800,
      stock: 56,
      productcode: 'PWR-20k-010',
      rating: 4.1,
      supplier: 'ChargeIt',
    },
  ];

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
      (prd) => prd.name.toLowerCase() === search.value.toLowerCase()
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

  onCloseButton(close: boolean) {
    this.viewProduct = close;
  }
}
