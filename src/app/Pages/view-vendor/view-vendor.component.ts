import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { ProductService } from 'src/app/service/product.service';
import { VendorService } from 'src/app/service/vendor.service';

@Component({
  selector: 'app-view-vendor',
  templateUrl: './view-vendor.component.html',
  styleUrls: ['./view-vendor.component.css'],
})
export class ViewVendorComponent {
  @Input() vendor: any;
  @Output() closeButton = new EventEmitter<any>();

  private fb = inject(FormBuilder);

  updateVendorForm = this.fb.group({
    name: [''],
    company: [''],
    email: [''],
    phone: [''],
    category: [''],
    address: [''],
    city: [''],
    state: [''],
    country: [''],
  });
  constructor(private vendorService: VendorService, private router: Router) {}

  ngOnInit(): void {
    console.log('testing');
    this.updateVendorForm.patchValue(this.vendor);
  }
  onsubmit() {
    console.log(this.updateVendorForm.value);
    this.closeButton.emit(this.updateVendorForm.value);
  }
}
