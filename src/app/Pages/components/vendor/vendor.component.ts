import { Component, OnInit } from '@angular/core';
import { VendorService } from 'src/app/service/vendor.service';
// import { VendorService } from 'src/app/service/vendor.service';
// import { Vendor } from 'src/app/vendor.model';

@Component({
  selector: 'app-vendor',
  templateUrl: './vendor.component.html',
  styleUrls: ['./vendor.component.css'],
})
export class VendorComponent {
  searchText: string = '';
  vendors: any[] = [];

  viewVendor = false;
  singleVendor: any;

  constructor(private vendorService: VendorService) {}

  ngOnInit(): void {
    this.vendors = this.vendorService.getVendors();
  }
  searchvendor(search: HTMLInputElement) {
    console.log(search.value);
    this.vendors = this.vendors.filter(
      (ved) => ved.vendorName.toLowerCase() === search.value.toLowerCase()
    );
    console.log(this.vendors);
  }
  deleteVendor(vendorId: number) {
    this.vendors = this.vendors.filter((ved) => ved.id !== vendorId);
    console.log(this.vendors);
  }
  openViewVendor(vendor: any) {
    console.log(vendor);
    this.singleVendor = vendor;
    this.viewVendor = true;
  }
  onCloseButton(updatedVendor: any) {
    this.viewVendor = false;

    this.vendorService.updateVendor(updatedVendor);
    this.vendors = this.vendorService.getVendors();
  }

  get filteredVendors() {
    const q = this.searchText.trim().toLowerCase();
    if (!q) return this.vendors;
    return this.vendors.filter(
      (v) =>
        String(v.id).includes(q) ||
        v.name.toLowerCase().includes(q) ||
        v.company.toLowerCase().includes(q) ||
        v.email.toLowerCase().includes(q) ||
        v.phone.toLowerCase().includes(q) ||
        v.address.toLowerCase().includes(q) ||
        v.city.toLowerCase().includes(q) ||
        v.state.toLowerCase().includes(q) ||
        v.country.toLowerCase().includes(q) ||
        v.category.toLowerCase().includes(q)
    );
  }
}
