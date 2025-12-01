import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-view-markeing-calls',
  templateUrl: './view-markeing-calls.component.html',
  styleUrls: ['./view-markeing-calls.component.css'],
})
export class ViewMarkeingCallsComponent {
  @Input() customerId = 0;
  @Output() closeButton = new EventEmitter<any>();

  allowOnlyNumbers($event: KeyboardEvent) {
    throw new Error('Method not implemented.');
  }
  private fb = inject(FormBuilder);
  private apiService = inject(ApiService);
  searchText: string = '';

  isToast = false;
  toastMessage = '';

  updateMarketingCalls = this.fb.group({
    customerName: [''],
    customerNo: [''],
    contactPersonName: [''],
    contactNo: [''],
    emailId: [''],
    cutomerAdd1: [''],
    cutomerAdd2: [''],
    state: [''],
    city: [''],
    country: [''],
    pincode: [''],
    productInterested: [''],
    meetingDate: [''],
    meetingTime: [''],
    callType: [false],
  });

  get customerName() {
    return this.updateMarketingCalls.get('customerName');
  }
  get customerNo() {
    return this.updateMarketingCalls.get('customerNo');
  }
  get contactPersonName() {
    return this.updateMarketingCalls.get('contactPersonName');
  }
  get contactNo() {
    return this.updateMarketingCalls.get('contactNo');
  }
  get emailId() {
    return this.updateMarketingCalls.get('emailId');
  }
  get cutomerAdd1() {
    return this.updateMarketingCalls.get('cutomerAdd1');
  }
  get cutomerAdd2() {
    return this.updateMarketingCalls.get('cutomerAdd2');
  }
  get state() {
    return this.updateMarketingCalls.get('state');
  }
  get city() {
    return this.updateMarketingCalls.get('city');
  }
  get country() {
    return this.updateMarketingCalls.get('country');
  }
  get pincode() {
    return this.updateMarketingCalls.get('pincode');
  }
  get productInterested() {
    return this.updateMarketingCalls.get('productInterested');
  }
  get meetingDate() {
    return this.updateMarketingCalls.get('meetingDate');
  }
  get meetingTime() {
    return this.updateMarketingCalls.get('meetingTime');
  }

  ngOnInit() {
    this.getMarketingcallsList();
  }
  getMarketingcallsList() {
    try {
      this.apiService.getMarketingcalls(this.customerId).subscribe({
        next: (response: any) => {
          console.log(response);
          this.updateMarketingCalls.patchValue(response.data);
          console.log(this.updateMarketingCalls.value);
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

  onsubmit() {
    try {
      this.apiService
        .updateMarketingCalls(this.customerId, this.updateMarketingCalls.value)
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
