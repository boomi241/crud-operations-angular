import { Component, EventEmitter, Inject, inject, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css'],
})
export class AddProductComponent {
  @Output() newProduct = new EventEmitter<any>();
  private fb = inject(FormBuilder);

  isToast = false;
  toastMessage = '';
  products: any;

  constructor(private apiService: ApiService, private router: Router) {}

  productForm = this.fb.group({
    productName: [''],
    category: [''],
    productPrice: [0],
  });

  onSubmit() {
    try {
      console.log(this.productForm.value);

      this.apiService.addProduct(this.productForm.value).subscribe({
        next: (response) => {
          console.log(response);
          this.isToast = true;
          this.toastMessage = 'Form Submitted Successfully!';
          setTimeout(() => {
            this.isToast = false;
            this.router.navigate(['/products']);
          }, 2000);
        },
        error: (err) => {
          console.log(err);
        },
        complete: () =>
          console.log('Observable emitted the complete notification'),
      });
    } catch (error) {
      console.log(error);
    }

    // console.log(this.productForm.value);

    // if (form.valid) {
    //   console.log('Product submitted:', this.product);
    //   alert('Product added successfully!');
    //   form.resetForm();
    // } else {
    //   alert('Please fill all required fields.');
    // }
  }
}
function ngOnInit() {
  throw new Error('Function not implemented.');
}

function fetchProductList() {
  throw new Error('Function not implemented.');
}
