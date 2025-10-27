import { Component, EventEmitter, inject, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css'],
})
export class AddProductComponent {
  @Output() newProduct = new EventEmitter<any>();
  private fb = inject(FormBuilder);

  constructor(private productService: ProductService, private router: Router) {}

  productForm = this.fb.group({
    productName: [''],
    category: [''],
    price: [0],
    stock: [0],
    productCode: [''],
    rating: [0],
    supplier: [''],
  });

  onSubmit() {
    // console.log(this.productForm.value);
    if (!this.productForm.invalid) {
      this.productService.addProduct(this.productForm.value);
      console.log(this.productForm.value);
      this.router.navigate(['/products']);
    }
    // if (form.valid) {
    //   console.log('Product submitted:', this.product);
    //   alert('Product added successfully!');
    //   form.resetForm();
    // } else {
    //   alert('Please fill all required fields.');
    // }
  }
}
