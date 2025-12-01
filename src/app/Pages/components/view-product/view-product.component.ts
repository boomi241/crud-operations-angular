import {
  Component,
  EventEmitter,
  inject,
  Inject,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css'],
})
export class ViewProductComponent implements OnInit {
  @Input() productId = 0;
  @Output() closeButton = new EventEmitter<any>();

  allowOnlyNumbers($event: KeyboardEvent) {
    throw new Error('Method not implemented.');
  }

  private fb = inject(FormBuilder);
  private apiService = inject(ApiService);
  searchText: string = '';

  isToast = false;
  toastMessage = '';

  updateProductForm = this.fb.group({
    productName: [''],
    category: [''],
    productPrice: [''],
  });

  ngOnInit(): void {
    console.log('testing');
    this.getProductById();
  }
  getProductById() {
    try {
      this.apiService.fetchProductById(this.productId).subscribe({
        next: (response: any) => {
          console.log(response);
          this.updateProductForm.patchValue(response);
          console.log(this.updateProductForm.value);
        },
        error: (err: any) => {
          console.log(err);
        },
        complete: () => console.log('OB'),
      });
    } catch (error) {
      console.log(error);
    }
  }
  onsubmit() {
    try {
      this.apiService
        .updateProduct(this.productId, this.updateProductForm.value)
        .subscribe({
          next: (response: any) => {
            console.log(response);
            this.isToast = true;
            this.toastMessage = 'Customer details update sucessfully';

            setTimeout(() => {
              this.closeButton.emit(false);
            }, 2000);
          },
          error: (err: any) => {
            console.log(err);
          },
          complete: () => console.log('Ob'),
        });
    } catch (error) {
      console.log(error);
    }
  }
}
