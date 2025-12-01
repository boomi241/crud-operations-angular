import { Component, inject } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-marketingcalls-list',
  templateUrl: './marketingcalls-list.component.html',
  styleUrls: ['./marketingcalls-list.component.css'],
})
export class MarketingcallsListComponent {
  private fb = inject(FormBuilder);
  private apiService = inject(ApiService);
  searchText: string = '';

  isToast = false;
  toastMessage = '';

  marketingList: any[] = [];
  openMarketingModel = false;
  customerId = 0;

  startDate = '';
  endDate = '';

  filter = {
    customerName: '',
  };

  ngOnInit() {
    this.fetchCustomerByDate();
  }
  fetchCustomerByDate() {
    try {
      const data = {
        startDate: this.startDate,
        endDate: this.endDate,
      };

      console.log(data);

      this.apiService.fetchCustomerByDate(data).subscribe({
        next: (val: any) => {
          console.log(val);
          this.marketingList = val;
        },
        error: (err) => {
          console.log(err);
        },
        complete: () =>
          console.log('Observable emitted the complete notfication'),
      });
    } catch (error) {
      console.log(error);
    }
  }

  openViewMarketingCalls(customer: any) {
    console.log(customer);
    this.openMarketingModel = true;
    this.customerId = customer.id;
  }

  deleteMarketingList(id: number) {
    try {
      this.apiService.deleteMarketingList(id).subscribe({
        next: (response: any) => {
          console.log(response);
          console.log(this.marketingList);
          this.isToast = true;
          this.toastMessage = 'Customer details deleted sucessfully';
          setTimeout(() => {
            this.isToast = false;
          }, 2000);
          this.fetchCustomerByDate();
        },
        error: (err) => {
          console.log(err);
        },
        complete: () =>
          console.log('Observable emitted the complete notfication'),
      });
    } catch (error) {
      console.log(error);
    }
  }
  get filteredCustomer() {
    const q = this.searchText.trim().toLowerCase();
    if (!q) return this.marketingList;
    return this.marketingList.filter(
      (c: any) =>
        String(c.id).includes(q) || c.customerName.toLowerCase().includes(q)
    );
  }

  onCloseButton(event: any) {
    this.openMarketingModel = event;
    this.fetchCustomerByDate();
  }
}
