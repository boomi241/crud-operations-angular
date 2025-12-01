import { Component, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-marketing-calls-form',
  templateUrl: './marketing-calls-form.component.html',
  styleUrls: ['./marketing-calls-form.component.css'],
})
export class MarketingCallsFormComponent {
  private fb = inject(FormBuilder);
  private apiService = inject(ApiService);
  private router = inject(Router);

  isToast = false;
  toastMessage = '';
  products: any;

  marketingCallsForm = this.fb.group({
    customerName: ['', Validators.required],
    customerNo: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
    contactPersonName: ['', Validators.required],
    contactNo: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
    emailId: [
      '',
      [
        Validators.required,
        Validators.pattern(/^[A-Za-z0-9]+@[A-Za-z0-9.-]+\.(com|in|edu)$/),
      ],
    ],
    cutomerAdd1: [''],
    cutomerAdd2: [''],
    state: [''],
    city: [''],
    country: [''],
    pincode: [
      '',
      [Validators.required, Validators.minLength(6), Validators.maxLength(6)],
    ],
    productInterested: [''],
    meetingDate: [''],
    meetingTime: [''],
    callType: [false],
  });

  get customerName() {
    return this.marketingCallsForm.get('customerName');
  }
  get customerNo() {
    return this.marketingCallsForm.get('customerNo');
  }

  get contactPersonName() {
    return this.marketingCallsForm.get('contactPersonName');
  }
  get contactNo() {
    return this.marketingCallsForm.get('contactNo');
  }

  get pincode() {
    return this.marketingCallsForm.get('pincode');
  }
  get emailId() {
    return this.marketingCallsForm.get('emailId');
  }

  allowOnlyNumbers(event: KeyboardEvent) {
    const charCode = event.which ? event.which : event.keyCode;
    // Allow only digits (0-9)
    if (charCode < 48 || charCode > 57) {
      event.preventDefault();
    }
  }

  // limitPinCodeLength(event: any) {
  //   const input = event.target;
  //   if (input.value.length > 6) {
  //     input.value = input.value.slice(0, 6);
  //   }
  // }
  ngOnInit(): void {
    this.fetchProductList();
  }
  fetchProductList() {
    try {
      this.apiService.fetchProductList().subscribe({
        next: (val: any) => {
          console.log(val);
          this.products = val.data;
        },
        error: (err) => {
          console.log(err);
        },
      });
    } catch (error) {
      console.log(error);
    }
  }

  onSubmit() {
    try {
      console.log(this.marketingCallsForm.value);

      this.apiService
        .createMarketingCalls(this.marketingCallsForm.value)
        .subscribe({
          next: (response) => {
            console.log(response);
            this.isToast = true;
            this.toastMessage = 'Form Submitted Successfully!';
            setTimeout(() => {
              this.isToast = false;
              this.router.navigate(['/customer']);
            }, 2000);
            // this.isToast.showToast('Form Submitted Successfully!');
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
  }
}
