import { Component, inject, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  router = inject(Router);
  user = {
    username: '',
    password: '',
  };
  message: string = '';
  validUser = {
    username: 'admin',
    password: '12345',
  };

  // onLogin(form: NgForm) {
  //   if (
  //     this.user.username === this.validUser.username &&
  //     this.user.password === this.validUser.password
  //   ) {
  //     this.message = '✅ Login Successful!';
  //   } else {
  //     this.message = '❌ Invalid username or password!';
  //   }
  //   console.log(form);
  //   console.log(form.value);
  // }
  // @ViewChild('loginForm') form: NgForm;

  OnFormSubmitted(form: NgForm) {
    console.log(form.value);
    if (
      form.value.username === this.validUser.username &&
      form.value.password === this.validUser.password
    ) {
      this.router.navigate(['/home']);
    }
  }
}
