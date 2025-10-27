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
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css'],
})
export class ViewProductComponent implements OnInit {
  @Input() product: any;
  @Output() closeButton = new EventEmitter<any>();

  private fb = inject(FormBuilder);

  constructor(private productService: ProductService, private router: Router) {}

  updateProductForm = this.fb.group({
    productName: [''],
    category: [''],
    price: [''],
    stock: [''],
    productCode: [''],
    rating: [''],
    supplier: [''],
  });

  ngOnInit(): void {
    console.log('testing');
    this.updateProductForm.patchValue(this.product);
  }

  onsubmit() {
    console.log(this.updateProductForm.value);
    this.closeButton.emit(this.updateProductForm.value);
  }
}
