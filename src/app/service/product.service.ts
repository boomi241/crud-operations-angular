import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor() {}

  products = [
    {
      id: 1,
      productName: 'Laptop',
      category: 'Electronics',
      price: 40000,
      stock: 12,
      productCode: 'LAP-A-001',
      rating: 4.5,
      supplier: 'ClouteTech',
    },
    {
      id: 2,
      productName: 'Phone',
      category: 'Electronics',
      price: 80000,
      stock: 10,
      productCode: 'LAP-B-002',
      rating: 4.8,
      supplier: 'Mobix',
    },
    {
      id: 3,
      productName: 'Wireless Mouse',
      category: 'Accessories',
      price: 1000,
      stock: 20,
      productCode: 'MSE-003',
      rating: 4.0,
      supplier: 'PeriParts',
    },
    {
      id: 4,
      productName: 'Mechanical Keybord',
      category: 'Accessories',
      price: 3599,
      stock: 12,
      productCode: 'KEY-004',
      rating: 4.6,
      supplier: 'KeyWorks',
    },
    {
      id: 5,
      productName: 'Monitor 24',
      category: 'Electronics',
      price: 11999,
      stock: 22,
      productCode: 'MON-024-005',
      rating: 4.3,
      supplier: 'DisplayCo',
    },
    {
      id: 6,
      productName: 'External HDD 1TB',
      category: 'Storage',
      price: 3999,
      stock: 80,
      productCode: 'HDD-1TB-006',
      rating: 3.9,
      supplier: 'StoreMax',
    },
    {
      id: 7,
      productName: 'USB-C Hub',
      category: 'Accessories',
      price: 1500,
      stock: 46,
      productCode: 'HUB-007',
      rating: 4.1,
      supplier: 'LinkPro',
    },
    {
      id: 8,
      productName: 'Webcam HD',
      category: 'Peripheralse',
      price: 18999,
      stock: 27,
      productCode: 'CAM-HD-008',
      rating: 4.0,
      supplier: 'VisionTech',
    },
    {
      id: 9,
      productName: 'Bluetooth Speaker',
      category: 'Audio',
      price: 2500,
      stock: 42,
      productCode: 'SPK-009',
      rating: 4.6,
      supplier: 'SoundLab',
    },
    {
      id: 10,
      productName: 'Power Bank 20k',
      category: 'Accessories',
      price: 800,
      stock: 56,
      productCode: 'PWR-20k-010',
      rating: 4.1,
      supplier: 'ChargeIt',
    },
  ];

  getProduct() {
    return this.products;
  }

  addProduct(newProduct: any) {
    this.products.push(newProduct);
  }

  updateProduct(updatedProduct: any) {
    console.log('updatedProduct:', updatedProduct);
    const index = this.products.findIndex(
      (p) => p.productCode === updatedProduct.productCode
    );

    if (index !== -1) {
      this.products[index] = updatedProduct;
    }
  }
}
