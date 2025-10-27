import { Component, EventEmitter, inject, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { VendorService } from 'src/app/service/vendor.service';
// import { VendorService } from 'src/app/service/vendor.service';
//import { Vendor } from 'src/app/vendor.model';

@Component({
  selector: 'app-add-vendor',
  templateUrl: './add-vendor.component.html',
  styleUrls: ['./add-vendor.component.css'],
})
export class AddVendorComponent {
  @Output() newVendor = new EventEmitter<any>();
  private fb = inject(FormBuilder);

  constructor(private router: Router, private vendorService: VendorService) {}

  vendorForm = this.fb.group({
    name: [''],
    company: [''],
    email: [''],
    phone: [0],
    address: [''],
    state: [''],
    city: [''],
    country: [''],
    category: [''],
  });

  onSubmit() {
    console.log(this.vendorForm.value);
    // console.log(this.Form.value);
    if (!this.vendorForm.invalid) {
      this.vendorService.addVendor(this.vendorForm.value);
      console.log(this.vendorForm.value);
      this.router.navigate(['/vendor']);
    }
  }
}
